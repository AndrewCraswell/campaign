import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Goals from "../components/Goals/Index";
import GoalsHeader from "../components/Goals/Title";
import Carousel from "../components/Carousel";
import Vision from "../components/Vision";
import VisionMessage from "../components/VisionMessage";
import Footer from "../components/Footer";
import "../style/main.scss";
import SEO from "../components/SEO";
export const Home = (props) => {
  const { data } = props;
  let heroSection = data.allPrismicHerosection.nodes[0].data;
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
  const { description, title } = data.prismicHomeseo.data;
  return (
    <div>
      <SEO title={title.text} description={description.text} />
      <Navbar
        anchors={[
          { title: "Stay Connected", link: "/stay-connected" },
          { title: "Volunteer", link: "" },
          { title: "Blogs", link: "/blogs" },

          {
            title: "Facebook",
            link: "https://www.facebook.com/williambillharriformayor",
          },
          { title: "Make a Donation", link: "/make-a-donation" },
        ]}
        frontmatter={{
          brand: "William Harris",
          title: "For Mayor of Fuquay-Varina",
          menuText: "Menu",
        }}
      />

      <Carousel data={heroSection} />
      <Vision data={data?.prismicVision?.data} />
      {/* goals section */}
      <VisionMessage data={data?.prismicVisionmessage?.data} />

      <GoalsHeader title={section_title.text} 
      
      data1={{description:description_1?.text,
      title:title_1?.text,
      image:image_1,
      btn_text:btn_text_1.text,
      btn_url:btn_url_1.text}}
      data2={{ description:description_2?.text,
        title:title_2?.text,
        image:image_1,
        btn_text:btn_text_1.text,
        btn_url:btn_url_1.text}}
        data3={{description:description_3?.text,
        title:title_3?.text}}
      />

     
      {/* Experience section */}

      <Footer />
    </div>
  );
};

export const query = graphql`
  query HeroSection {
    allPrismicHerosection {
      nodes {
        data {
          heroimages {
            image {
              localFile {
                publicURL
              }
            }
          }
          title {
            text
          }
        }
      }
    }
    prismicVisionmessage {
      data {
        image {
          localFile {
            publicURL
          }
        }
        message {
          text
        }
      }
    }
    prismicExperience {
      data {
        title {
          text
        }
        description {
          text
        }
        experiences {
          description1 {
            html
          }
          title {
            text
          }
        }
      }
    }
    prismicVision {
      data {
        btn_text {
          text
        }
        btn_url {
          text
        }
        description {
          text
        }
        image {
          localFile {
            publicURL
          }
        }
        subtitle {
          text
        }
        title {
          text
        }
      }
    }
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

    prismicGallery {
      data {
        images {
          image {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default Home;
