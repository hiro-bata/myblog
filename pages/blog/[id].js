import Link from 'next/link'
import Date from '../../component/date'

export default function BlogId({ blog }) {
    return (
      <div className="post-detail">
        <h1>{blog.title}</h1>
        <Date dateString={blog.updatedAt} />
        <img src={blog.picture.url} />
        <div
          className="blog-text"
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
        <div className="mt-10">
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
      </div>
    );
  }

// パスの指定処理
export const getStaticPaths = async () => {
const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
};
const data = await fetch('https://kawakawa.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
const paths = data.contents.map(content => `/blog/${content.id}`);
return {paths, fallback: false};
};

// データ取得処理
export const getStaticProps = async context => {
    const id = context.params.id;
    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch(
      'https://kawakawa.microcms.io/api/v1/blog/' + id,
      key,
    )
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        blog: data,
      },
    };
  };