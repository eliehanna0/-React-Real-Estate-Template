import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title, description = "", meta = [] }) => {
  return (
    <Helmet
      title={"React Real Estate | " + title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  );
};

export default Head;
