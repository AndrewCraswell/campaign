import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../style/main.scss";
export const Events = (props) => {
  const { data } = props;

  return (
    <div>
      {/* <SEO title={title.text} description={description.text} /> */}
      <Navbar
        anchors={[
          { title: "Stay Connected", link: "/stay-connected" },
          { title: "Volunteer", link: "" },
          { title: "Blogs", link: "/blogs" },
          { title: "Events", link: "/events" },

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
      <div
        className="breadcrumb-area"
        style={{
          marginTop: "90px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h2 className="page-title">Our Latest Events</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery data={data?.prismicGallery?.data?.images} />

      <Footer />
    </div>
  );
};

export const query = graphql`
  query GalleryQuery {
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

export default Events;
