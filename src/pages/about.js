import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import "../style/main.scss";
export const About = (props) => {
  const { data } = props;

  return (
    <div>
      <Navbar />
      <div
        className="breadcrumb-area"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "90px",
          backgroundPosition: "top",
          backgroundImage:`url(../img/william.jpg)`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h2 className="page-title">About</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Experiences data={data?.prismicExperience?.data} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query AboutSection {
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
  }
`;

export default About;
