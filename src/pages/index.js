// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import Navbar from "../views/Navbar";
import Goals from "../components/Goals/Index";
import GoalsHeader from "../components/Goals/Title";
import Carousel from "../components/Carousel";
import "../style/main.scss";
import SEO from "../components/SEO"
export const AuthorTemplate = (props) => {
  const { data } = props;
  console.log({ hero: data.allPrismicHerosection });
  let heroSection = data.allPrismicHerosection.nodes[0].data;

  console.log({ heroSection });

  const {
    section_title,
    description_1,
    title_1,
    image_1,
    btn_text_1,
    btn_url_1,
  } = data.prismicGoals.data;
  const {
    description_2,
    title_2,
    image_2,
    btn_text_2,
    btn_url_2,
  } = data.prismicGoals.data;
  const { description_3, title_3, image_3 } = data.prismicGoals.data;
const {description,title} =data.prismicHomeseo.data;
  return (
    <div>
      <SEO title={title.text} description={description.text} />
      <Navbar
        anchors={["Stay Connected", "Volunteer", "Facebook", "Make a Donation"]}
        frontmatter={{
          brand: "William Harris",
          title: "For Mayor of Fuquay-Varina",
          menuText: "Menu",
        }}
      />

      <Carousel data={heroSection} />
      <GoalsHeader title={section_title.text} />

      <Goals
        description={description_1?.text}
        title={title_1?.text}
        image={image_1}
        btn_text={btn_text_1.text}
        btn_url={btn_url_1.text}
      />
      <Goals
        description={description_2?.text}
        title={title_2?.text}
        image={image_2}
        index={1}
        btn_text={btn_text_2.text}
        btn_url={btn_url_2.text}
      />
      <Goals
        description={description_3?.text}
        title={title_3?.text}
        image={image_3}
      />
    </div>
  );
};

export const query = graphql`

  query HeroSection {
     prismicHomeseo {
        data {
          title {
            text
          }
          description {
            text
          }
        }
      }
    
    allPrismicHerosection {
      nodes {
        data {
          title {
            text
          }
          heroimage {
            localFile {
              publicURL
            }
            fluid {
              src
            }
          }
        }
      }
    }
    prismicGoals {
      data {
        btn_text_1 {
          text
        }
        btn_text_2 {
          text
        }
        btn_url_1 {
          text
        }
        btn_url_2 {
          text
        }
        description_1 {
          text
        }
        description_2 {
          text
        }
        description_3 {
          text
        }
        image_1 {
          localFile {
            publicURL
          }
        }
        image_2 {
          localFile {
            publicURL
          }
        }
        image_3 {
          localFile {
            publicURL
          }
        }
        section_title {
          text
        }
        title_1 {
          text
        }
        title_2 {
          text
        }
        title_3 {
          text
        }
      }
    }
  }
`;

export default AuthorTemplate;
