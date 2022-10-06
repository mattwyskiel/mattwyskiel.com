import { ArrowRight } from 'react-bootstrap-icons';
import { DateTime } from 'luxon';
import Link from 'next/link';

export default function BlogPreview(props) {
  return (
    <Row>
      <Col lg={{ span: 10, offset: 1 }}>
        <br />
        <h1 style={{ textAlign: 'center' }}>Recent Blog Posts</h1>
        <br />
        <ul className={styles['preview-post-list']}>
          {props.posts.map(post => {
            const postLink = `/posts/${post.slug}`;
            return (
              <li key={post.id}>
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
                  <Button variant="dark" className={styles.button} href="/">
                    Read More <ArrowRight />
                  </Button>
                </div>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
}
