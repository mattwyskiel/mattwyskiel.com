import styles from '../styles/home/jumbotron.module.sass'

export default function Jumbotron(props) {
    return (
        <div style={{
          backgroundImage: `url("${props.splashImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed',
          height: '500px',
          position: 'relative'
        }}>
            <div className={styles.tint}>
                <div className={styles['jumbotron-content']}>
                    <h1>{props.splashText}</h1>
                </div>
            </div>
        </div>
    )
}