import axios from 'axios';
import { DateTime } from 'luxon';
import { Col, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import DisqusComments from '../../components/commentsPane';
import styles from '../../styles/blog/blog.module.sass';

export default function BlogPost(props) {
  return (
    <>
      <Row style={{ padding: '30px 0' }}>
        <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
          <div className={styles['preview-post']}>
            <h1 className={styles['blog-post-title']}>{props.title}</h1>
            <span className="preview-post-date">
              {DateTime.fromISO(props.published).toLocaleString(DateTime.DATE_MED)}
            </span>
            <br />
            <br />
            <ReactMarkdown>{props.content}</ReactMarkdown>
            <br />
          </div>
        </Col>
      </Row>
      <Row style={{ padding: '30px 0' }}>
        <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
          <DisqusComments post={props} />
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps({ params }) {
  const blogResult = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/posts/${params.slug}`
  );
  return {
    props: {
      ...blogResult.data.post,
    },
  };
}

export async function getStaticPaths() {
  const blogResult = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/post-excerpts`);
  return {
    paths: blogResult.data.posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
