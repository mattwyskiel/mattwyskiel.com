import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/portfolio/portfolio.module.sass';
import { useAPI } from '../utils/API';

export default function PortfolioPage() {
  const { data, isError, isLoading } = useAPI('/projects');

  if (isError)
    return (
      <Container style={{ padding: '30px 0' }}>
        <Row>
          <h1 className={styles.title}>My Portfolio.</h1>
        </Row>
        <Row>
          <p>Failed to load...</p>
        </Row>
      </Container>
    );
  if (isLoading)
    return (
      <Container style={{ padding: '30px 0' }}>
        <Row>
          <h1 className={styles.title}>My Portfolio.</h1>
        </Row>
        <Row>
          <p>Loading...</p>
        </Row>
      </Container>
    );

  return (
    <Container style={{ padding: '30px 0' }}>
      <Row>
        <h1 className={styles.title}>My Portfolio.</h1>
      </Row>
      <br />
      <br />
      {data.items.map((item, idx) => {
        return (
          <div key={item.projectId}>
            <Row className="align-items-center">
              <Col lg={{ order: idx % 2 == 0 ? 'first' : 'last' }}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <ul>
                  {item.features.map(feat => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <p>
                  <span className={styles.italics}>Implementation: </span>
                  {item.implementation.join(', ')}
                </p>
              </Col>
              <Col
                lg={{ order: idx % 2 == 1 ? 'first' : 'last' }}
                className={styles['app-preview']}
              >
                <video src={item.media.video} controls autoPlay loop muted></video>
              </Col>
            </Row>
            <br />
            <br />
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
