import React from "react";

import "./Notify.scss";

const Notify = ({ t }) => (
  <section className="notify">
    <input type="checkbox" />
    <p>
      {t("notyEnc")}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/cqxg">
        {" "}
        GitHub
      </a>
      !
      <br />
      {t("notyDesc")}
    </p>
  </section>
);

export default Notify;
