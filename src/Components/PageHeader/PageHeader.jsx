import React from "react";
import bg from "../../image/footer-bg.jpg";

import "./PageHeader.scss";

const PageHeader = (props) => {
  return (
    <div className="page_header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
