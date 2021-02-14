import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="intro-h1 text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        This is my Blog.
      </h1>
      <Link href="/profile"><a className="font-bold text-xl">My PROFILE</a></Link>
    </section>
  )
}