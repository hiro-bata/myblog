import CoverImage from './cover-image'

export default function HeroPost() {
    return (
      <section>
        <div className="mb-8 md:mb-16">
          <CoverImage
            src="/images/ring.jpg"
            height={620}
            width={1240}
          />
        </div>
      </section>
    )
}