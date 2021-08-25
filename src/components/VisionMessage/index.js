import React from "react";
export const VisionMessage = (props) => {
console.log(props?.data)
  return (
    <div className="charity-area padding-bottom-105 padding-top-110 bg-image"
     style={{backgroundImage: `url(${props?.data?.image?.localFile?.publicURL})`,
     marginTop:"0px",
     backgroundPosition:"center",marginTop:"20px"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="charity-content desktop-center">
                        <a href="#">
                            <h3 className="title">{props?.data?.message?.text}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VisionMessage;
