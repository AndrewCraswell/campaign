import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const BlogDetails = (props) => {
  const { data } = props;
  console.log(props);
  return (
    <div>
      <Navbar
        anchors={[
          { title: "Stay Connected", link: "/stay-connected" },
          { title: "Volunteer", link: "" },
          { title: "Blogs", link: "/blogs" },
          { title: "Facebook", link: "" },
          { title: "Make a Donation", link: "" },
        ]}
        frontmatter={{
          brand: "William Harris",
          title: "For Mayor of Fuquay-Varina",
          menuText: "Menu",
        }}
      />
      <div className="row " style={{ justifyContent: "center", marginTop: "120px",padding:"0px 20px" }}>
          <div className="col-12">
            <div className="blog-details-item">
              <div className="thumb margin-bottom-20 d-flex justify-content-center">
                <img src={data?.prismicBlogs?.data?.image?.localFile?.publicURL} alt="blog" />
              </div>
              <div className="blog-details-item-header">
                <ul className="post-meta">
                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i> {data?.prismicBlogs?.data?.created_by.text}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-clock"></i> {data?.prismicBlogs?.data?.created_at}
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="title">{data?.prismicBlogs?.data?.title?.text}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: data?.prismicBlogs?.data?.description?.html }}
              ></p>
            </div>
          </div>
        </div>
        <Footer />
      
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    prismicBlogs(id: { eq: $id }) {
      id
      data {
        title {
          text
        }
        description {
          html
        }
        created_by {
          text
        }
        created_at(formatString: "DD-MMM-YYYY")
        short_description {
          text
        }
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

export default BlogDetails;
