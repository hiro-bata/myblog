import Link from 'next/link';
import Layout from '../component/layout'
import Image from 'next/image'

export default function Home({ blog }) {
  return (
    <Layout>
      <Image
        src="/images/summer.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            タイトル：
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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