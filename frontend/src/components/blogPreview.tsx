import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { FC } from 'react';

export interface BlogPreviewProps {
  posts: {
    slug: string;
    id: string;
    title: string;
    published: string;
    excerpt: string;
  }[];
}

export const BlogPreview: FC<BlogPreviewProps> = props => {
  return (
    <div className="flex flex-col p-5 items-center">
      <h1 className="text-4xl font-medium text-center pb-5">Recent Blog Posts</h1>
      <ul className="max-w-3xl">
        {props.posts.map(post => {
          const postLink = `/posts/${post.slug}`;
          return (
            <li key={post.id}>
              <div className="flex flex-col items-center text-center py-5">
                <h3 className="text-3xl">
                  <Link href={postLink}>{post.title}</Link>
                </h3>
                <span>{DateTime.fromISO(post.published).toLocaleString(DateTime.DATE_MED)}</span>
                <p>{post.excerpt}</p>
                <div>
                  <Link
                    href={postLink}
                    className="w-fit flex items-center flex-row m-5 p-3 bg-black rounded-md text-white"
                  >
                    Read More
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
