import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const MyGallery = ({ data }) => {
  return (
    <div className="mt-0 mb-5">
      <Gallery>
        <div className="mt-0 container">
          <div className="mt-0 row">
            {data?.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5" key={index}>
                  <Item
                    original={item?.image?.localFile?.publicURL}
                    thumbnail={item?.image?.localFile?.publicURL}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <div
                        ref={ref}
                        onClick={open}
                        style={{
                          backgroundImage: `url(${item?.image?.localFile?.publicURL})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          width: "100%",
                          height: "250px",
                          boxSizing: "border-box",
                        }}
                      ></div>
                    )}
                  </Item>
                </div>
              );
            })}
          </div>
        </div>
      </Gallery>
    </div>
  );
};
export default MyGallery;
