import custom from '../styles/footer.module.sass'

export default function Footer() {
  const date = new Date();
  return <footer className={custom['site-footer']}>
    <br />
    <div className={custom['personal-links']}>

      <a href="https://github.com/mattwyskiel">
        <svg className={custom['link-icon']} viewBox="0 0 16 16">
          <use xlinkHref="/assets/minima-social-icons.svg#github"></use>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/mattwyskiel/">
        <svg className={custom['link-icon']} viewBox="0 0 16 16">
          <use xlinkHref="/assets/minima-social-icons.svg#linkedin"></use>
        </svg>
      </a>

      <a href="https://twitter.com/mattwyskiel">
        <svg className={custom['link-icon']} viewBox="0 0 16 16">
          <use xlinkHref="/assets/minima-social-icons.svg#twitter"></use>
        </svg>
      </a>

      <a href="https://instagram.com/mattwyskiel">
        <svg className={custom['link-icon']} viewBox="0 0 16 16">
          <use xlinkHref="/assets/minima-social-icons.svg#instagram"></use>
        </svg>
      </a>
    </div>
    <div className={custom.copyright}>
      <span>Copyright &copy; {date.getFullYear()} <a href="https://github.com/mattwyskiel">Matthew Wyskiel</a></span>
    </div>
    <br />
  </footer>
}