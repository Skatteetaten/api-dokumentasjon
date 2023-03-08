import React from "react";
import styles from "./Summary.module.scss";

export function Summary({ children }): JSX.Element {
  return <div className={styles.summary}>{children}</div>;
}
