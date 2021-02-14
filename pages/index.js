import Link from 'next/link';
import Layout from '../component/layout'
import Intro from '../component/intro'
import HeroPost from '../component/hero-post'

export default function Home({ blog }) {
  return (
    <Layout>
      <Intro />
      
      <HeroPost />
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            Title：
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {blog.map(blog => (
          <li key={blog.id}>
            Title：
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </div>
    </Layout>
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