// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VolunteerForm from "../components/VolunteerForm";
import "../style/main.scss";
import SEO from "../components/SEO";
export const StayConnected = (props) => {
  const { data } = props;

  const { description, title } = data.prismicHomeseo.data;
  return (
    <div>
      <SEO title={title.text} description={description.text} />
      <Navbar
      
      />
      <VolunteerForm data={data?.prismicContact?.data} />
      <Footer data={data?.prismicExperience?.data} />
    </div>
  );
};

export const query = graphql`
  query volunteer {
    prismicContact {
      data {
        image {
          localFile {
            publicURL
          }
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
  }
`;

export default StayConnected;
