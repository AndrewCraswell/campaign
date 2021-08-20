// Example {PrismicAuthor.url}.js file

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";
export const GoalsCard = (props) => {
  const { description, title, image, btn_text, btn_url, index } = props;

  console.log({ title, description, image }, "===========");
  return (
    <div className="container mt-2">
      <div className="vision-area bg-white">
        <div className="row">
          <div className={index===1?"col-lg-5 d-xl-none d-lg-none d-sm-block d-md-none ":"col-lg-5"}>
            <div
              className="misson-vision-img bg-image"
              style={{ backgroundImage: `url(${image.localFile.publicURL})` }}
            ></div>
          </div>
          <div className="col-lg-7">
            <div className="misson-vision-content p-0">
              <div className="content">
                <div className="section-title">
                  <h2 className="title">{title}</h2>
                </div>
                <p>{description}</p>
                {btn_text && (
                  <Link to={btn_url}>
                    <Button variant="primary">{btn_text}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
         {index===1&& <div className={index===1?"col-lg-5 d-none d-sm-none d-md-block ":"col-lg-5"}>
          <div
              className="misson-vision-img bg-image"
              style={{ backgroundImage: `url(${image.localFile.publicURL})` }}
            ></div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default GoalsCard;
