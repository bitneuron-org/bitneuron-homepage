const MediaCard = ({ title, description, imgSrc, href, time, avatar, author = "" }) => (
  <div className="md relative max-w-[544px]  p-4 md:w-1/3">
    <a href={href} aria-label={`Link to ${title}`}>
      <div
        className={`${
          imgSrc && "h-full"
        }  relative overflow-hidden rounded-3xl border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <a href={href} aria-label={`Link to ${title}`}>
              <img
                alt={title}
                src={imgSrc}
                className="inset-0 rounded object-contain h-full w-full max-h-80 object-center hover:scale-105 "
              />
            </a>
          ) : (
            <img
              alt={title}
              src={imgSrc}
              className="inset-0 rounded object-contain h-full w-full max-h-80 object-center hover:scale-105 "
            />
          ))}
        <div className="relative p-6 ">
          <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight ">
            {href ? (
              <a href={href} aria-label={`Link to ${title}`}>
                {title}
              </a>
            ) : (
              title
            )}
          </h2>

          <span className="rounded-full bg-green px-2 text-white">{time}</span>
          <p className="prose mt-10 mb-3 max-w-none pb-10 text-gray-light dark:text-gray-light">
            {description}
          </p>
        </div>
      </div>
      {href && (
        <div className="absolute bottom-8 left-10">
          <a
            href={href}
            className="h-30 flex w-full gap-2 text-base font-medium leading-6 "
            aria-label={`Link to ${title}`}
          >
            <img src={avatar} alt="avatar" width={80} height={80} />
            {author && <span className="rounded-full bg-gray-light px-2 text-white">{author}</span>}
          </a>
        </div>
      )}
    </a>
  </div>
);

export default MediaCard;
