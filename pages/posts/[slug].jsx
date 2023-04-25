import React from "react";
const { client, getContentData } = require('../../contentful');

const Post = (props) => {
console.log(props);

  return <div>List of all blog posts?</div>;
};

export default Post;

export async function getStaticProps({ params }) {
  const {
    items: [articleEntry = {}],
  } = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug[in]": params.post,
    limit: 1,
    include: 10,
  });

  return {
    props: {
      articleData: getContentData(articleEntry),
    },
  };
};

export async function getStaticPaths() {
    const { items: articleItems = [] } = await client.getEntries({
        content_type: 'pageBlogPost',
        limit: 100,
        include: 10,
    });

    const paths = articleItems.map(({ fields: { slug = '' } = {} }) => (
      {params: {post: slug}}
    ));

    return {
        paths,
        fallback: false,
    };
};
