import axios from 'axios';
import { ArrowRight } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { DateTime } from 'luxon';
import styles from '../styles/home/blog-preview.module.sass';

export default function BlogPage(props) {
  return (
    <Row style={{ padding: '30px 0' }}>
      <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
        <br />
        <h1 style={{ textAlign: 'center', fontSize: '3em' }}>My Blog.</h1>
        <br />
        <ul className={styles['preview-post-list']}>
          {props.posts.map(post => {
            const postLink = `/posts/${post.slug}`;
            return (
              <div key={post.id}>
                <li>
                  <div className={styles['preview-post']}>
                    <h3>
                      <Link href={postLink}>
                        <a className={styles['preview-post-link']}>{post.title}</a>
                      </Link>
                    </h3>
                    <span className="preview-post-date">
                      {DateTime.fromISO(post.published).toLocaleString(DateTime.DATE_MED)}
                    </span>
                    <br />
                    <br />
                    <p>{post.excerpt}</p>
                    <br />
                    <Button variant="dark" className={styles.button} href={postLink}>
                      Read More <ArrowRight />
                    </Button>
                  </div>
                </li>
                <br />
                <br />
              </div>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
}

export async function getStaticProps() {
  const blogResult = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/post-excerpts`);
  return {
    props: {
      posts: blogResult.data.posts,
    },
  };
}
