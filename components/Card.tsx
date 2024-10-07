import Image from './Image'
import Link from './Link'

const Card = ({ project }) => {
  const { title, description, imgSrc, href, from, to, keywords } = project
  return (
    <div
      className={`rounded-md border-2 border-gray-200 border-opacity-60 p-4 dark:border-gray-700 `}
    >
      {imgSrc ? (
        <Image
          alt={title}
          src={imgSrc}
          className="h-72 object-cover object-center"
          width={544}
          height={406}
        />
      ) : (
        <div className="flex h-[288px] items-center justify-center overflow-clip bg-gray-100 text-2xl font-semibold text-gray-900">
          {title}
        </div>
      )}

      <div className="h-fit p-6">
        <Link className="mb-1 text-2xl font-bold leading-8 tracking-tight" href={href}>
          {title}
        </Link>
        <p className="mb-2 text-gray-400 dark:text-gray-500">{`${from}${to ? ` - ${to}` : ''}`}</p>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex w-fit max-w-fit flex-wrap gap-x-2 pb-2">
          {keywords.map((keyword, i) => (
            <span
              key={i}
              className="mb-2 rounded-xl bg-gray-300 bg-opacity-40 px-2 py-1 text-sm text-gray-600  dark:text-gray-200"
            >
              {keyword}
            </span>
          ))}
        </div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card
