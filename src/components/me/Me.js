import React from 'react';
import styles from './Me.module.css';
import may from "../../images/לורין נקש.png"
const WhoAmI = () => {
  return <>
<div className={styles.title} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={may} alt="לורין נקש" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>לורין הודיה נקש</h2>
        <p className={styles.description}>מגיל קטן חיה ונושמת את תחום הציפורניים ומתפרנסת מהתחום כבר מעל ל-3 שנים ובכל יום ב-3 שנים האחרונות אני קמה והולכת לישון בהרגשה טובה ,בתחושה של הגשמה עצמית ושמחה על עצם העובדה שאני הבוסית של עצמי! </p>
        <p className={styles.description}>יצא לי להחשף למניקוריסטיות מתחילות ונזכרתי בתקופה שאני הייתי שם . <br/>הבנתי שהידע שצברתי יכול להביא להצלחה אמיתית של בחורה שמאוהבת בתחום ובהרבה פחות זמן ממני :) <br/> והיום כל כולי עוסקת בלהפוך בחורה כמוך למניקוריסטית ברמה הגבוהה ביותר</p>
      </div>
    </div>
    </>
};

export default WhoAmI;