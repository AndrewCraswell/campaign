// Example {PrismicAuthor.url}.js file

import React from "react";
export const GoalsTitle = (props) => {
  const { title ,data1,data2,data3} = props;

  return (
    <section class="misson-vision-area padding-bottom-120 padding-top-120 bg-image" 
    style={{backgroundImage: `url(../img/bg/04.png);`,backgroundColor:"#BCBCBC"}}>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="misson-vision-content-02">
                    <div class="content">
                        <div class="section-title">
                            <span>Goals </span>
                            <h3>{title} </h3>
                        </div>
                        <div class="btn-wrapper margin-top-30">
                            <a href="#" class="boxed-btn">Donate</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="misson-vision-img bg-image-02" 
                style={{backgroundImage: `url(${data2?.image});`,}}
                >
                    <div class="vision-single-item">
                        <div class="content">
                            <h3 class="title">{data1?.title}
                            </h3>
                            <p style={{maxWidth:"unset"}}>{data1?.description}</p>
                        </div>
                    </div>
                    <div class="vision-single-item style-01">
                        <div class="content style-01">
                            <h3 class="title">{data2?.title}
                            </h3>
                            <p style={{maxWidth:"unset"}}>{data2?.description}</p>
                        </div>
                    </div>
                    <div class="vision-single-item">
                        <div class="content style-02">
                        <h3 class="title">{data3?.title}
                            </h3>
                            <p style={{maxWidth:"unset"}}>{data3?.description}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default GoalsTitle;
