import React from 'react'

const Post = () => {
  return (
    <div>
        List of all blog posts?
    </div>
  )
}

export default Post;

export const getStaticProps = async () => {
    return {
      props: {
      },
    };
  };
  
  export const getStaticPaths = async () => {
    const response = await fetch(
      ``
    ).then((res) => res.json());
  
    return {
      paths: [],
      fallback: false,
    };
  };