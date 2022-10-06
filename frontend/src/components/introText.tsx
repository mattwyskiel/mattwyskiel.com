import { ArrowRight } from 'react-bootstrap-icons';

export default function IntroText(props) {
  return (
    <Row className={styles.introduction}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={`${styles.wrapper} ${styles['home-center']}`}>
          <h1>{props.topHeader}</h1>
          <p>{props.topDescription}</p>
          <br />
          <div className={`${styles['about-me-links']}`}>
            <Button variant="dark" className={styles.button} href="/about">
              More About Me <ArrowRight />
            </Button>
            <Button variant="dark" className={styles.button} href="/portfolio">
              View Portfolio <ArrowRight />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
