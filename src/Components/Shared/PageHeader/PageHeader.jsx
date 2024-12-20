import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({heading, page}) => {
  return (
    <div className="container pt-120 pb-120">
      <div className="row g-4 justify-content-center">
        {/*<div className="col-lg-8">*/}
        <div>
          <div className="breadcrumnd__wrap text-center">
            <h3 className="text-black">{heading}</h3>
            <ul className="breakcrumnd__cont justify-content-center">
              <li className="base">{page}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
