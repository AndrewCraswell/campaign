import React from "react";
import { Button } from "react-bootstrap";
export const Donation = (props) => {
  console.log("desc", props);
  return (
    <section className="misson-vision-area " style={{ marginTop: "120px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="misson-vision-content-02">
              <div className="content">
                <div className="section-title">
                  <h2>{props?.data?.title?.text} </h2>
                  <p dangerouslySetInnerHTML={{ __html: props?.data?.description?.html }}></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex  justify-content-center my-2">
            <a href={"https://donorbox.org/bill-harris-for-mayor"} target="_blank">
              <Button variant="primary" className="px-4 py-2">{"Donate"}</Button>
            </a>
          </div>
          <div className="col-12">
            <div className="misson-vision-img">
              {props?.data?.sections.map((item, index) => {
                return (
                  <>
                    <div className="row d-flex justify-content-center my-2">
                      <h4 className="title">{item?.heading?.text}</h4>
                    </div>
                    <div className={`vision-single-item ${index % 2 === 0 ? "" : "style-01"}`}>
                      <div className={`content ${index % 2 === 0 ? "" : "style-01"}`}>
                        <p
                          className="mission-list"
                          dangerouslySetInnerHTML={{ __html: item?.description1?.html }}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
