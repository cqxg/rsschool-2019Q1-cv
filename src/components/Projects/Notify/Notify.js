import React, { useEffect } from "react";

import "./Notify.scss";

const Notify = ({ t }) => {
  return (
    <div className="notify">
      <input type="checkbox" />
      <p>
        {t("notyEnc")}
        <a
          className="education_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cqxg"
        >
          {" "}
          github
        </a>
        !
        <br />
        {t("notyDesc")}
      </p>
    </div>
  );
};

export default Notify;
