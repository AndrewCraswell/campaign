import React from "react";
export const Vision = (props) => {
  return (
    <>
      <section className="misson-vision-area m-bottom mt-5">
        <div className="container">
          <div className="vision-area bg-white">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="misson-vision-img bg-image"
                  style={{
                    backgroundImage: `url(${props?.data?.image?.localFile?.publicURL})`,
                  }}
                ></div>
              </div>
              <div className="col-lg-7">
                <div className="misson-vision-content">
                  <div className="content">
                    <div className="section-title">
                      <span>Vision & Mission </span>
                      <h4
                        className="title"
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.5rem",
                          padding: "2px 5px",
                        }}
                      >
                        {props?.data?.title?.text}
                      </h4>
                    </div>
                    <p style={{ padding: "2px 5px" }}>
                      {props?.data?.description?.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="counterup-area bg-blue bg-image padding-bottom-105 padding-top-390">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="single-counterup-01">
                <div class="content">
                  <h2
                    className="title"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5rem",
                      padding: "5px",
                    }}
                  >
                    {props?.data?.subtitle?.text}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
