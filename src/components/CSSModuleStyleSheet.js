import React from "react";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function CSSModuleStyleSheet() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>successccc</h1>
    </div>
  );
}

export default CSSModuleStyleSheet;
