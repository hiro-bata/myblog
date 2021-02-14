import Link from 'next/link';
import Layout from '../component/layout'
import Intro from '../component/intro'
import HeroPost from '../component/hero-post'
import Date from '../component/date'
import Footer from '../component/footer'

export default function Home({ blog }) {
  return (
    <>
      <Layout home>
        <Intro />
        <HeroPost />
        <h2 className="mb-9 text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
          My Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {blog.map(blog => (
              <li key={blog.id}>
                <div className="home-blog-title md:text-2xl mb-5">
                  <Link href={`blog/${blog.id}`}>
                    <a>Title：{blog.title}</a>
                  </Link>
                </div>
                <Date dateString={blog.updatedAt} />
                <div>
                  <Link href={`blog/${blog.id}`}>
                    <a><img src={blog.picture.url} /></a>
                  </Link>
                </div>
              </li>
          ))}
        </div>
      </Layout>
      <Footer />
    </>
  );
}

// データ取得処理
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kawakawa.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};