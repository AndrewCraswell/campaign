import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const AuthorTemplate = (props) => {
  const { data } = props;

  return (
    <div>
      <Navbar />
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
                <h2 className="page-title">Blogs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: "120px" }}>
        {data.allPrismicBlogs.nodes &&
          data.allPrismicBlogs.nodes.map((item) => {
            console.log(item);
            return (
              <div
                className="col-lg-4 col-md-6 p-4 "
                style={{
                  height: 550,
                  width: 325,
                }}
              >
                <div className="single-help-fulfill-item margin-bottom-30">
                  <div className="single-fulfill-img">
                    <div
                      style={{
                        backgroundImage: `url(${item?.data?.image?.localFile?.publicURL})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "250px",
                        backgroundSize: "cover",
                      }}
                    />
                  </div>

                  <Link to={`/blog-details/${item?.id}`}>
                    <div className="content">
                      <h4 className="title text-truncate">{item.data.title.text}</h4>
                      <p className="multine-ellipsis">{item?.data?.short_description?.text}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Blogs {
    allPrismicBlogs {
      nodes {
        id
        data {
          image {
            localFile {
              publicURL
            }
          }
          title {
            text
          }
          short_description {
            text
          }
          description {
            html
          }
          created_by {
            text
          }
        }
      }
    }
  }
`;

export default AuthorTemplate;
