import React, { useRef, useEffect } from 'react';
import styles from "./FirstScreen.module.css";
import { ArrowDown } from "lucide-react";
import check from "../videos/לורין נקש.mp4"

const FirstScreen = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <video 
        ref={videoRef}
        className={styles.videoBackground} 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={check} type="video/mp4" />
      </video>
      <div className={styles.glassContainer}>
        <h1 className={styles.englishTitle}>לורין הודיה נקש</h1>
        <h2 className={styles.hebrewTitle}>קורסים והשתלמויות ללימוד ציפורניים</h2>
        <ArrowDown className={styles.arrow} color="#fff7ec" size={32} />
      </div>
    </div>
  );
}

export default FirstScreen;