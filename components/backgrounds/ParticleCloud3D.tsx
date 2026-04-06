'use client'

import { useRef, useMemo, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 500

function createCircleTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext('2d')!
  ctx.beginPath()
  ctx.arc(16, 16, 14, 0, Math.PI * 2)
  ctx.fillStyle = '#ffffff'
  ctx.fill()
  return new THREE.CanvasTexture(canvas)
}

// Dark mode: brighter, more saturated — pops against dark bg
const DARK_PALETTES = [
  [1.0, 0.6, 0.3], // warm orange
  [0.45, 0.65, 1.0], // soft blue
  [0.95, 0.45, 0.6], // rose
  [0.4, 0.9, 0.65], // mint
  [1.0, 0.85, 0.35], // golden
]

// Light mode: bold, saturated — clearly visible against white bg
const LIGHT_PALETTES = [
  [0.75, 0.3, 0.05], // burnt orange
  [0.15, 0.3, 0.7], // strong blue
  [0.65, 0.15, 0.35], // deep rose
  [0.1, 0.45, 0.35], // dark teal
  [0.65, 0.45, 0.05], // amber
]

function useIsDark() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isDark
}

function Particles({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Points>(null)
  const circleTexture = useMemo(() => createCircleTexture(), [])
  // Store which palette index each particle uses, so colors stay consistent per particle
  const paletteIndices = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, () => Math.floor(Math.random() * 5)),
    []
  )
  const colorVariations = useMemo(
    () => Array.from({ length: PARTICLE_COUNT * 3 }, () => (Math.random() - 0.5) * 0.08),
    []
  )

  const { positions, colors, basePositions, drifts } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const basePositions = new Float32Array(PARTICLE_COUNT * 3)
    const drifts = new Float32Array(PARTICLE_COUNT * 6)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 16
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 6

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      basePositions[i * 3] = x
      basePositions[i * 3 + 1] = y
      basePositions[i * 3 + 2] = z

      const di = i * 6
      drifts[di] = 0.3 + Math.random() * 0.8
      drifts[di + 1] = 0.2 + Math.random() * 0.7
      drifts[di + 2] = 0.25 + Math.random() * 0.6
      drifts[di + 3] = 0.1 + Math.random() * 0.25
      drifts[di + 4] = 0.1 + Math.random() * 0.3
      drifts[di + 5] = 0.08 + Math.random() * 0.2

      // Initial colors (will be updated by theme effect)
      colors[i * 3] = 0.5
      colors[i * 3 + 1] = 0.5
      colors[i * 3 + 2] = 0.5
    }
    return { positions, colors, basePositions, drifts }
  }, [])

  // Update colors when theme changes
  const updateColors = useCallback(() => {
    if (!meshRef.current) return
    const colorsArr = meshRef.current.geometry.attributes.color.array as Float32Array
    const palettes = isDark ? DARK_PALETTES : LIGHT_PALETTES

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const palette = palettes[paletteIndices[i]]
      colorsArr[i * 3] = palette[0] + colorVariations[i * 3]
      colorsArr[i * 3 + 1] = palette[1] + colorVariations[i * 3 + 1]
      colorsArr[i * 3 + 2] = palette[2] + colorVariations[i * 3 + 2]
    }
    meshRef.current.geometry.attributes.color.needsUpdate = true
  }, [isDark, paletteIndices, colorVariations])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    meshRef.current.rotation.y = t * 0.04
    meshRef.current.rotation.x = Math.sin(t * 0.03) * 0.15

    const pos = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const di = i * 6
      const phase = i * 1.37
      pos[i3] = basePositions[i3] + Math.sin(t * drifts[di] + phase) * drifts[di + 3]
      pos[i3 + 1] =
        basePositions[i3 + 1] + Math.cos(t * drifts[di + 1] + phase * 0.7) * drifts[di + 4]
      pos[i3 + 2] =
        basePositions[i3 + 2] + Math.sin(t * drifts[di + 2] + phase * 1.3) * drifts[di + 5]
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Apply colors on mount and theme change
  useEffect(() => {
    // Small delay to ensure geometry is ready
    const timer = setTimeout(updateColors, 50)
    return () => clearTimeout(timer)
  }, [updateColors])

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={circleTexture}
        alphaMap={circleTexture}
        vertexColors
        transparent
        opacity={isDark ? 0.8 : 0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

const ParticleCloud3D = () => {
  const isDark = useIsDark()

  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <Particles isDark={isDark} />
      </Canvas>
    </div>
  )
}

export default ParticleCloud3D
