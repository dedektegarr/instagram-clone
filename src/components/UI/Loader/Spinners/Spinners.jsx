import React from "react";
import styles from "./Spinners.module.css";

const Spinners = ({ className }) => {
  return <span className={`${styles.loader} ${className}`}></span>;
};

export default Spinners;
