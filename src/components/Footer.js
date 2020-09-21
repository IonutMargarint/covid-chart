import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import styles from "./Footer.scss";

const Footer = () => {
  return (
    <div className={styles.footerWraper}>
      <footer>
        <div>
          <p>
            <GitHubIcon
              onClick={() =>
                window.open(
                  "https://github.com/IonutMargarint/covid-chart",
                  "_blank"
                )
              }
            />
          </p>
          <p>
            API by{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://covid19.mathdro.id/api/"
            >
              Mathdro
            </a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
