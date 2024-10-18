'use client'

import Matter, { Runner } from 'matter-js'
import { useEffect, useRef } from 'react'

const BackgroundAnimation = () => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const h = window.innerHeight - 100
    const w = window.innerWidth - 100
    const engine = Matter.Engine.create({ gravity: { x: 0.05, y: 0.2 } })
    const runner = Matter.Runner.create()
    const { Render, World, Bodies } = Matter

    const render = Render.create({
      element: boxRef.current || undefined,
      engine,
      canvas: canvasRef.current || undefined,
      options: {
        width: w,
        height: h,
        background: 'transparent',
        wireframes: false,
      },
    })

    const floor = Bodies.rectangle(w / 2, h, w, 15, {
      isStatic: true,
      friction: 0,
      restitution: 1,
      render: {
        fillStyle: 'transparent',
      },
      angle: 0,
    })

    // Create an array to hold the bouncy balls
    const numberOfObjs = w / 40
    const balls = Array.from({ length: numberOfObjs }, (_, index) => {
      const x = (w / numberOfObjs) * index
      const y = 0
      return Bodies.circle(x, y, (Math.random() + 0.3) * 20, {
        // Create a circle body for the bouncy ball
        mass: 0.01,
        friction: 0,
        restitution: 1,
        render: {
          fillStyle: 'rgba(255, 170, 87, 0.2)',
        },
      })
    })

    const cubes = Array.from({ length: numberOfObjs }, (_, index) => {
      const x = (w / numberOfObjs) * index
      const y = -10
      const size = (Math.random() + 0.4) * 30
      return Bodies.rectangle(x, y, size, size, {
        // Create a circle body for the bouncy ball
        mass: 0.01,
        friction: 0,
        restitution: 1,
        chamfer: {
          radius: size / 4,
        },
        angle: (Math.random() - 0.5) * 0.8,
        render: {
          fillStyle: 'rgba(255, 199, 44, 0.2)',
        },
      })
    })

    const numberOfBlocks = w / 30
    const blocks = Array.from({ length: numberOfBlocks }, (_, index) => {
      const x = (w / numberOfBlocks) * index
      const y = Math.min(Math.random() * h + 60, h - 80)
      return Bodies.rectangle(x, y, 20, 5, {
        isStatic: true,
        friction: 0,
        restitution: 1,
        render: {
          fillStyle: 'transparent',
        },
        angle: Math.random() - 0.5,
      })
    })

    // Add the bouncy balls to the world
    World.add(engine.world, [floor, ...balls, ...cubes, ...blocks])
    Runner.run(runner, engine)
    Render.run(render)
  }, [])

  return (
    <div ref={boxRef}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default BackgroundAnimation
