import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/about/about.module.sass';
import axios from 'axios';

export default function AboutPage(props) {
  return (
    <>
      <Container>
        <br />
        <br />
        <Row>
          <div className={styles.title}>About Me.</div>
        </Row>
        <br />
        <br />
        <Row className="justify-content-lg-center">
          <Col lg={4} className={styles.center}>
            <Image src={props.headshot} width={326} height={456} alt="Picture of me :)" />
          </Col>
          <Col lg={4}>
            <div dangerouslySetInnerHTML={{ __html: props.bio }} />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="justify-content-lg-center">
          <Col lg={8} className={styles.center}>
            <h2>My Music Taste</h2>
            <iframe
              src={props.playlistEmbedURL}
              allowFullScreen
              className={styles.playlistEmbed}
            ></iframe>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const result = await axios.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/wcm/page-content?page=about'
  );
  return {
    props: {
      ...result.data,
    },
  };
}
