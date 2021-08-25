// Example {PrismicAuthor.url}.js file

import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../style/main.scss";
import SEO from "../components/SEO"
export const StayConnected = (props) => {
  const { data } = props;

const {description,title} =data.prismicHomeseo.data;
  return (
    <div>
      <SEO title={title.text} description={description.text} />
      <Navbar
        anchors={[{title:"Stay Connected",link:"/stay-connected"},
        {title: "Volunteer",link:""},
        { title: "Blogs", link: "/blogs" },

        {title:"Facebook",link:""},
        {title:"Make a Donation",link:"/make-a-donation"}
        ]}
        frontmatter={{
          brand: "William Harris",
          title: "For Mayor of Fuquay-Varina",
          menuText: "Menu",
        }}
      />
<ContactForm data={data?.prismicContact?.data}/>
      <Footer data={data?.prismicExperience?.data}/>

    </div>
  );
};

export const query = graphql`

  query stayConnected {
  
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
