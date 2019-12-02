import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const res = await fetch(`http://192.168.1.17:8000/api/login/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;