import React from "react";
import { Typography } from "@mui/material";

export default function Experience() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles">&lt;Experience/&gt; 🧑🏽‍💻</h2>
      <div className="main-card-root-right-pane-main-text">
        <p className="text">
          My first and only internship I landed was last summer at The Davey
          Tree Expert Company, as a <b>Software Engineer Intern</b>. This was a
          remote opportunity, during my time there that is from June 2022 -
          September 2022.
        </p>

        <p className="text">
          As the name suggests they provide residential and commercial tree and
          landscape services. They are the largest employee-owned company in
          Ohio.
        </p>

        <p className="text">
          I co-led the development of an internal app called Davey pro, which is
          being used to update and add Davey’s clients. We used
          <b> SAPUI5</b> - a JavaScript front-end framework to build the app.
        </p>

        <p className="text">
          I worked on creating an API that fetched a business partners
          information from the OData backend and set the client-side model. This
          API was used in different pages across the app.
        </p>

        <p className="text">
          The app was deployed on the SAP Fiori Launchpad and is being used by
          500 people across USA and Canada.
        </p>
      </div>
    </div>
  );
}
