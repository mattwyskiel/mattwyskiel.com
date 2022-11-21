import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col bg-black text-white pb-5">
      <div className="self-center">
        <div className="flex flex-row">
          <a href="https://github.com/mattwyskiel">
            <svg className="fill-white w-16 h-16 px-5" viewBox="0 0 16 16">
              <use xlinkHref="/assets/minima-social-icons.svg#github"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mattwyskiel/">
            <svg className="fill-white w-16 h-16 px-5" viewBox="0 0 16 16">
              <use xlinkHref="/assets/minima-social-icons.svg#linkedin"></use>
            </svg>
          </a>
          <a href="https://twitter.com/mattwyskiel">
            <svg className="fill-white w-16 h-16 px-5" viewBox="0 0 16 16">
              <use xlinkHref="/assets/minima-social-icons.svg#twitter"></use>
            </svg>
          </a>
          <a href="https://instagram.com/mattwyskiel">
            <svg className="fill-white w-16 h-16 px-5" viewBox="0 0 16 16">
              <use xlinkHref="/assets/minima-social-icons.svg#instagram"></use>
            </svg>
          </a>
        </div>
        <div>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href="https://github.com/mattwyskiel">Matthew Wyskiel</a>
        </div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="c37c5a93-070b-4e2c-ae17-f6736c9c703a"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </footer>
  );
};
