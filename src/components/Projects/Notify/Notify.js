import React from "react";

import "./Notify.scss";

const Notify = ({ t }) => (
  <div className="notify">
    <input type="checkbox" />
    <p>
      {t("notyEnc")}
      <a
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

export default Notify;
