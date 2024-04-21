'use client'
import experiencesData from '@/data/experiencesData'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Image from 'next/image'

export default function ExperiencesPage() {
  const [views, setViews] = useState(experiencesData.map(() => false))
  const toggleView = (i: number) => {
    const newViews = [...views]
    newViews[i] = !newViews[i]
    setViews(newViews)
  }
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Experiences
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {experiencesData.map((exp, i) => {
            return (
              <li key={i} className="py-12">
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dd className="text-base font-medium leading-6 text-gray-600 dark:text-gray-300">
                      {`${exp.from} - ${exp.to}`}
                    </dd>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {exp.location}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">{`${exp.title} • ${exp.company}`}</h2>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {exp.descriptions.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                        {views[i] && exp.meme && (
                          <div className="flex flex-col">
                            <Image
                              src={exp.meme}
                              alt="Behind the Scenes"
                              width={300}
                              height={300}
                              className="mb-0"
                            />
                            <a
                              href={exp.src}
                              className="dark: mt-0 text-xs text-gray-200 dark:text-gray-700"
                            >
                              via GIPHY
                            </a>
                          </div>
                        )}
                      </div>
                      {exp.meme && (
                        <div
                          onClick={() => toggleView(i)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') toggleView(i)
                          }}
                          tabIndex={0}
                          role="button"
                          className="cursor-pointer text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {!views[i] ? 'Behind the Scnenes' : "Don't Care"}
                        </div>
                      )}
                    </div>
                    <div className="flex w-fit max-w-fit flex-wrap">
                      {exp.keywords?.map((keyword, i) => (
                        <span
                          key={i}
                          className="m-1 rounded-xl bg-gray-300 bg-opacity-40 px-4 py-1 text-gray-600  dark:text-gray-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
