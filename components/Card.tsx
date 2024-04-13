import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, from, to }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <Image
        alt={title}
        src={imgSrc}
        className="h-72 object-cover object-center"
        width={544}
        height={406}
      />

      <div className="p-6">
        <h2 className="mb-1 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="mb-2 text-gray-400 dark:text-gray-500">{`${from}${to ? ` - ${to}` : ''}`}</p>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
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
  </div>
)

export default Card
