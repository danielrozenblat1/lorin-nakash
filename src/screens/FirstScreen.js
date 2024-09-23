import React from 'react';
import styles from "./FirstScreen.module.css";
import { ArrowDown} from "lucide-react";
import check from "../videos/בדיקה.mp4"
const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src={check} type="video/mp4" />
      </video>
      <div className={styles.glassContainer}>
        <h1 className={styles.englishTitle}>לורין נקש</h1>
        <h2 className={styles.hebrewTitle}>קורסים והשתלמויות ללימוד ציפורניים</h2>
        <ArrowDown className={styles.arrow} color="#fff7ec" size={32} />
      </div>
    </div>
  );
}

export default FirstScreen;