import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div
        className="absolute left-1/2 top-0 -z-10
        ml-[-13rem] h-[15rem] w-[25rem]
       dark:[mask-image:linear-gradient(white,transparent)] md:ml-[-20rem] md:h-[25rem] 
       md:w-[50rem] lg:h-[25rem] xl:ml-[-38rem]
       xl:w-[80rem]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
          <svg
            aria-hidden="true"
            className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:stroke-white/5"
          >
            <defs>
              <pattern
                id=":r5r:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="-12"
                y="4"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r5r:)"></rect>
            <svg x="-12" y="4" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
              <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
              <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
            </svg>
          </svg>
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
        </svg>
      </div>

      <div className="pl-0 pt-5 pb-10 sm:pt-10">
        <h2 className="text-center text-2xl font-bold leading-8 tracking-tight sm:text-left">
          Welcome to my website!
        </h2>
        <p className="pt-5 text-justify text-lg leading-7 text-gray-500 dark:text-gray-400">
          I am
          <span
            className="inline bg-gradient-to-r from-green-400 via-indigo-400 to-purple-500 
          bg-clip-text pl-3 pr-3 text-justify 
          text-3xl font-bold text-transparent 
          dark:from-indigo-200 dark:via-green-400 dark:to-yellow-200">
            Andrei Cosma
          </span>
          a Full Stack Developer with over 8 years of experience in the field. My curiosity has led
          me to explore various domains such as Programming, Gaming, Finance, Investing, Trading,
          Philosophy, Crypto and Blockchain technologies.
          {/* My passion for technology has led me to explore various domains such as Programming, Data Science, AI, Crypto and Blockchain technologies. */}
        </p>
        <div>
          <p className="pt-5 text-justify text-gray-500 dark:text-gray-400">
            Through my extensive experience and constant curiosity, I have honed my skills in
            developing innovative solutions that help businesses achieve their goals. I am always
            eager to learn and keep up with the latest trends in the industry, and I believe that
            this is what sets me apart from others.
          </p>
          {/* <p className='pt-5 text-justify text-gray-500 dark:text-gray-400'>
          I am dedicated to delivering high-quality work that not only meets but exceeds expectations. My goal is to provide my clients with the best possible service, and I strive to achieve this through continuous improvement and learning.
          </p> */}
          {/* <p className="pt-5 text-justify text-gray-500 dark:text-gray-400">
            Thank you for visiting my website, and I look forward to the opportunity to work with you!
            Thank you for visiting my website!
          </p> */}
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
      <ScrollTopAndComment />
    </>
  )
}
