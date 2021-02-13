export default function BlogId({ blog }) {
    return (
      <main>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
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