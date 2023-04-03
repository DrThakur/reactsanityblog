import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Article = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const navigate = useNavigate();
  const [slugs, setSlugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[slug.current == $slug]{title,subtitle, slug, mainImage{
asset->{_id,url}},body,"name":author-> name,"authorImage":author->image}`;
      const variables = { slug };
      const data = await client.fetch(query, variables);
      setPostData(data[0]);
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchSlugs = async () => {
      const slugs = await client.fetch(`*[_type == "post"].slug.current`);
      setSlugs(slugs);
      setCurrentIndex(slugs.indexOf(slug));
    };
    fetchSlugs();
  }, [slug]);

  const handleNext = () => {
    const nextSlug = slugs[currentIndex + 1];
    if (nextSlug) {
      navigate(`/${nextSlug}`);
    }
  };
  const handlePrevious = () => {
    const previousSlug = slugs[currentIndex - 1];
    if (previousSlug) {
      navigate(`/${previousSlug}`);
    }
    setCurrentIndex(currentIndex - 1);
    navigate(`/${currentIndex - 1}`);
  };

  if (!postData) {
    return <div>Loading...</div>;
  }

  const authorImage = postData.authorImage
    ? urlFor(postData.authorImage).width(100).url()
    : null;
  const mainImage = postData.mainImage
    ? urlFor(postData.mainImage).width(200).url()
    : null;

  return (
    <Container>
      <ArticleWrapper>
        <ArticleTitle>{postData.title}</ArticleTitle>
        <ArticleSubtitle>{postData.subtitle}</ArticleSubtitle>
        <ArticleMeta>
          {authorImage && (
            <>
              {/* <img src={authorImage} alt="Author is Ankit" /> */}
              {/* <h4>{postData.name}</h4> */}
            </>
          )}
        </ArticleMeta>
        <ArticleContent>
          {postData.body && (
            <BlockContent
              blocks={postData.body}
              projectId={client.projectId}
              dataset={client.dataset}
            />
          )}
        </ArticleContent>
        <LinkContainer>
          <ArticleLink to={`/${currentIndex - 1}`} onClick={handlePrevious}>
            Previous
          </ArticleLink>
          <ArticleLink to={`/${currentIndex + 1}`} onClick={handleNext}>
            Next
          </ArticleLink>
        </LinkContainer>
      </ArticleWrapper>
      {/* {mainImage && <img src={mainImage} alt="main" />} */}
    </Container>
  );
};

export default Article;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 5px;
  width: 80vw;
  height: 100vh;
  // background-color: green;
  text-align: left;
  padding: 0 5px;

  @media only screen and (max-width: 768px) {
    margin: 0 100px;
  }
`;

const ArticleWrapper = styled.article`
  max-width: 800px;
  // margin: 0 auto;
  padding: 20px;
  text-align: left;
  // background-color: red;
  color: black;
`;

const ArticleTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ArticleSubtitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ArticleMeta = styled.div`
  // display: flex;
  // align-items: center;
  font-size: 16px;
  color: #888;
  // margin-bottom: 20px;
`;

const ArticleContent = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;

  // p {
  //   margin-bottom: 1.5em;
  // }

  // ul,
  // ol {
  //   margin-left: 1.5em;
  //   margin-bottom: 1.5em;
  // }

  // li {
  //   margin-bottom: 0.5em;
  // }

  // a {
  //   color: #0077cc;
  //   text-decoration: none;
  // }

  // img {
  //   max-width: 100%;
  //   margin-bottom: 1.5em;
  // }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArticleLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #0077cc;
  background-color: blue;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  curosor: pointer;
  &:hover {
    background-color: #0062a8;
  }
`;
