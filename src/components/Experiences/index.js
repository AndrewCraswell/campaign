import React from "react";
export const Experiences = (props) => {
  return (
    <div class="helpfulfill-area padding-bottom-90 padding-top-115">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-sm-12 col-12">
            <div class="section-title desktop-center margin-bottom-60">
              <span>{props?.data?.title?.text} </span>
              <h2
                class="title"
                style={{ fontSize: "20px", lineHeight: "2rem" }}
              >
                {props?.data?.description?.text}
              </h2>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-help-fulfill-item margin-bottom-30">
              <div class="single-fulfill-img">
                <img src="../img/help-fulfill/01.png" alt="" />
              </div>
              <div class="icon">
                <i class="flaticon-volunteer"></i>
              </div>
              <div class="content">
                <h4 class="title">Be A Volunteer</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim Nullam in justo mattis libero pharetra aliquet
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-help-fulfill-item margin-bottom-30">
              <div class="single-fulfill-img">
                <img src="../img/help-fulfill/02.png" alt="" />
              </div>
              <div class="icon style-01">
                <i class="flaticon-charity-1"></i>
              </div>
              <div class="content style-01">
                <h4 class="title">Contribute Now</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim Nullam in justo mattis libero pharetra aliquet
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-help-fulfill-item margin-bottom-30">
              <div class="single-fulfill-img">
                <img src="../img/help-fulfill/03.png" alt="" />
              </div>
              <div class="icon style-02">
                <i class="flaticon-donation-1"></i>
              </div>
              <div class="content style-02">
                <h4 class="title">Donate Now</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim Nullam in justo mattis libero pharetra aliquet
                </p>
              </div>
            </div>
          </div>
        </div>*/}

        <div class="row">
          {props?.data?.experiences.map((item, index) => {
            return (
              <div class="col-lg-4 col-md-6 mt-5">
                <div class="single-help-fulfill-item margin-bottom-30">
                  <div class="single-fulfill-img">
                    {/* <img src="../img/help-fulfill/01.png" alt="" /> */}
                  </div>
                  <div
                    className={`icon ${
                      index % 3 === 0
                        ? "style-02"
                        : index % 2 === 0
                        ? ""
                        : "style-01"
                    }`}
                  >
                    <i class="flaticon-volunteer"></i>
                    <img
                      src={"../img/love.svg"}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div
                    className={`content ${
                      index % 3 === 0
                        ? "style-02"
                        : index % 2 === 0
                        ? ""
                        : "style-01"
                    }`}
                    style={{ minHeight: "480px" }}
                  >
                    <h4 class="title">{item?.title?.text}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item?.description1?.html,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
