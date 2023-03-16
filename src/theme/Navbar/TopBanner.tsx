import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./TopBanner.module.scss";
import Link from "@docusaurus/Link";

import cls from "classnames";

interface Props {
  topStripe: React.ReactNode;
  title: string;
  logoLink?: string;
  homeText?: string;
  homeUrl?: string;
}

const ExternalHeaderContent = ({ ...props }) => {
  const context = useDocusaurusContext();

  const isLinkAcive = (linkPath: string) => {
    const pathWithoutBaseUrl = globalThis.location.pathname.replace(
      context.siteConfig.baseUrl,
      ""
    );

    if (pathWithoutBaseUrl === "" || pathWithoutBaseUrl === "/") {
      return linkPath === "/";
    }

    return linkPath.includes(pathWithoutBaseUrl);
  };

  if (props.children) {
    return props.children;
  }
  return (
    <BrowserOnly>
      {() => {
        const ActionButton =
          require("@skatteetaten/frontend-components/ActionButton").ActionButton;
        return (
          <>
            <ActionButton
              href={props.homeUrl}
              onClick={props.onClick}
              icon="ArrowBack"
              role="link"
            >
              {props.homeText}
            </ActionButton>
            <h1>{props.title}</h1>
            <nav className={styles.nav}>
              <Link
                to="/"
                className={cls({
                  [styles["active-nav"]]: isLinkAcive("/"),
                })}
              >
                Dokumentasjon
              </Link>
              <Link
                to="/nyheter-og-driftsvarsler"
                className={cls({
                  [styles["active-nav"]]: isLinkAcive(
                    "/nyheter-og-driftsvarsler"
                  ),
                })}
              >
                Nyheter og driftsvarsler
              </Link>
            </nav>
          </>
        );
      }}
    </BrowserOnly>
  );
};

export function TopBanner(props: Props): JSX.Element {
  const { topStripe, title, logoLink, homeText } = props;
  return (
    <header>
      {topStripe}
      <div className={styles.bannerContent}>
        <div className={styles.bannerImgContainer}>
          <div className={styles.bannerImg}>
            {logoLink ? (
              <a href={logoLink}>
                <img src={useBaseUrl("/img/logoSKE.svg")} />
              </a>
            ) : (
              <img src={useBaseUrl("/img/logoSKE.svg")} />
            )}
          </div>
        </div>
        <div className={styles.bannerHeader}>
          <ExternalHeaderContent {...props} />
        </div>
      </div>
    </header>
  );
}
