import { DiscussionEmbed } from 'disqus-react';
const DisqusComments = ({ post }) => {
  const disqusShortname = 'mattwyskielblog';
  const disqusConfig = {
    url: `https://mattwyskiel.com/posts/${post.slug}`,
    identifier: `${post.id}`, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
