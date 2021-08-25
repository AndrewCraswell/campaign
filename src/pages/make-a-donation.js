// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donation from "../components/Donation";
import "../style/main.scss";
import SEO from "../components/SEO";
export const StayConnected = (props) => {
  const { data } = props;

  const { description, title } = data.prismicHomeseo.data;
  return (
    <div>
      <SEO title={title.text} description={description.text} />
      <Navbar/>
      <Donation data={data?.prismicDonation?.data} />

      <Footer />
    </div>
  );
};

export const query = graphql`
  query donation {
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
    prismicDonation {
      data {
        title {
          text
        }
        sections {
          heading {
            text
          }
          description1 {
            html
          }
        }
        description {
          html
        }
      }
    }
  }
`;

export default StayConnected;
