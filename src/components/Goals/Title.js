// Example {PrismicAuthor.url}.js file

import React from "react";
export const GoalsTitle = (props) => {
  const { title } = props;

  return (
    <div class="container mt-2">
      <div class="row justify-content-center">
        <div class="col-xl-9 col-sm-12 col-12">
          <div class="section-title desktop-center margin-bottom-35">
            <h2 class="title">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsTitle;
