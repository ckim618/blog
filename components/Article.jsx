import React from "react";
import Hero from "./Hero";
import Title from "./Title";
import Header from "./Header";
import Paragraph from "./Paragraph";
import SubTitle from "./SubTitle";

const Article = ({title, paragraph, subTitle}) => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Title text={title}/>
        <Paragraph text={paragraph.p1}/>
        <SubTitle text={subTitle.st1}/>
        <Paragraph text={paragraph.p2}/>
        <SubTitle text={subTitle.st2}/>
        <Paragraph text={paragraph.p3}/>
      </main>
    </>
  );
};

export default Article;
