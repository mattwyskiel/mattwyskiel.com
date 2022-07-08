import axios from 'axios';
import BlogPreview from '../components/blog-preview';
import IntroText from '../components/introText';
import Jumbotron from '../components/jumbotron';

export default function HomePage(props) {
  return (
    <main>
      <Jumbotron splashText={props.splashText} splashImage={props.splashImage} />
      <IntroText topHeader={props.topHeader} topDescription={props.topDescription} />
      <BlogPreview posts={props.posts} />
    </main>
  );
}

export async function getStaticProps() {
  const wcmResult = await axios.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/wcm/page-content?page=home'
  );
  const blogResult = await axios.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/blog/post-excerpts?count=2'
  );
  return {
    props: {
      ...wcmResult.data,
      ...blogResult.data,
    },
  };
}
