import axios from 'axios';
import type { NextPage } from 'next';
import { BlogPreview } from '../components/blogPreview';
import { IntroText } from '../components/introText';
import { Jumbotron } from '../components/jumbotron';

interface HomePageProps {
  splashText: string;
  splashImage: string;
  topHeader: string;
  topDescription: string;
  posts: any[];
}

const Home: NextPage<HomePageProps> = props => {
  return (
    <div className="divide-y-4 divide-solid">
      <Jumbotron splashText={props.splashText} splashImage={props.splashImage} />
      <IntroText topHeader={props.topHeader} topDescription={props.topDescription} />
      <BlogPreview posts={props.posts} />
    </div>
  );
};

export default Home;

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
