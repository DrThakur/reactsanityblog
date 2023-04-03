import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import styled from "styled-components";

const Sidebar = () => {
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "post"]{title,subtitle,slug,mainImage{asset->{_id,url}}, order}`
      );
      // Group posts by title
      const groupedData = data.reduce((accumulator, currentValue) => {
        const title = currentValue.title;

        if (accumulator[title]) {
          //Add to existing array
          accumulator[title].push(currentValue);
        } else {
          //Create new array
          accumulator[title] = [currentValue];
        }
        return accumulator;
      }, {});
      //sort the subtopics array based on the order field
      Object.keys(groupedData).forEach((title) => {
        groupedData[title].sort((a, b) => a.order - b.order);
      });

      setAllPosts(groupedData);
      // console.log(data);
    };
    fetchData();
  }, []);

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <SidebarContainer>
      <Sidebars>
        {Object.entries(allPostsData).map(([title, subtopics], index) => (
          <Accordion key={title}>
            <AccordionTitle
              className={activeAccordion === index ? "active" : ""}
              onClick={() => handleAccordionClick(index)}
            >
              <span> {title}</span>
              {/* {activeAccordion ? "-" : "+"} */}
            </AccordionTitle>

            {/* <h2>{post.title}</h2> */}
            <AccordionContent
              className={activeAccordion === index ? "active" : ""}
            >
              {subtopics.map((subtopic, subIndex) => (
                <AccordionLink
                  to={`/verilog/${subtopic.slug.current}`}
                  key={subIndex}
                >
                  <span key={subIndex}>
                    {/* <img src={post.mainImage.asset.url} alt="mainImage" /> */}
                    <span>
                      <AccordionSubtitle>{subtopic.subtitle}</AccordionSubtitle>
                    </span>
                  </span>
                </AccordionLink>
              ))}
            </AccordionContent>
          </Accordion>
        ))}
      </Sidebars>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  // background-color: rgb(2, 0, 36);
  background-image: linear-gradient(
    to right top,
    #020024,
    #00093a,
    #000e50,
    #000e66,
    #0e087c
  );
  padding: 10px;
  border-radius: 10px;
  color: black;
  margin: 20px;
  // overflow-y: auto;
`;

const Sidebars = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: #f8f8f8;
  // background-image: linear-gradient(
  //   to right top,
  //   #020024,
  //   #00093a,
  //   #000e50,
  //   #000e66,
  //   #0e087c
  // );
  // border-right: 1px solid #e8e8e8;
  width: 80%;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    // display: ;
  }
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const AccordionTitle = styled.h2`
  margin: 0;
  padding: 10px;
  // background-color: #fff;
  background-image: linear-gradient(
    to right top,
    #020024,
    #00093a,
    #000e50,
    #000e66,
    #0e087c
  );
  border: 1px solid #e8e8e8;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;

  span {
    flex: 1;
    margin-right: 30px;
  }

  &:hover {
    // background-color: #f5f5f5;
    background-color: #fff;
  }

  &.active {
    // background-color: #f5f5f5;
    background-color: #fff;
    transition: all 0.5s ease-out;
  }
`;

const AccordionContent = styled.div`
  display: none;
  // border: 1px solid #e8e8e8;
  padding: 10px;

  &.active {
    display: block;
  }
`;

const AccordionSubtitle = styled.h3`
  // background: #fff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin: 5px;

  &:hover {
    color: black;
    background: white;
    border-radius: 5px;
    padding: 10px;
  }
`;

const AccordionLink = styled(Link)`
  text-decoration: none;
`;
