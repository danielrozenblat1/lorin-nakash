import React from 'react';
import { Scissors, PenTool, Camera, MessageCircle } from 'lucide-react';
import styles from './NailHishtalmut.module.css';
import Button from '../button/Button';

const NailHishtalmut = () => {
  const courseTopics = [
    { text: "חשיפה לחומרים שונים והתאמה של החומר הנכון לכל סוג ציפורן", icon: PenTool },
    { text: "דיוק של המניקור, מהסרה מדוייקת בלי לפגוע בציפורן ועד ניקיון מוחלט של כל איזור העור", icon: Scissors },
    { text: "גזירה מקצועית עם מספרי מניקור", icon: Scissors },
    { text: "חידוד המבנה האנטומי בטכניקה חדשה וסופר מיוחדת", icon: PenTool },
    { text: "מריחה צמודה ומדוייקת לקוטיקולה", icon: PenTool },
    { text: "סגירת עבודה עם טופ למראה מבריק במיוחד + פינישים לתוצאה ברמה גבוהה לעבודות קטלוג", icon: PenTool },
  ];

  const bonuses = [
    { text: "למידת זוויות צילום, טיפים לצילום מקצועי של הציפורניים, עבודה עם עדשות תאורה רקעים וכו׳", icon: Camera },
    { text: "ליווי מלא שלי לכל שאלה שעולה גם אחרי הקורס", icon: MessageCircle },
  ];

  return <>
  <p className={styles.more}>עברת קורס בתחום בעבר אבל את מרגישה שאת צריכה עוד כמה חיזוקים? עוסקת בתחום ואת מרגישה שאת רק צריכה לחזק כמה דברים קטנים?</p>
    <div className={styles.container} id="השתלמות העלאת רמה">
      <h1 className={styles.title}>השתלמות העלאת רמה</h1>
      
      <div className={styles.card}>
        <p className={styles.description}>
          מפגש אחד של 4-6 שעות שבו אנחנו מחזקות ומדייקות את העבודה של התלמידה לרמה הכי גבוהה שאפשר
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>מה נלמד?</h2>
        <ul className={styles.list}>
          {courseTopics.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>ו-2 בונוסים מיוחדים</h2>
        <ul className={styles.list}>
          {bonuses.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button text="לורין אני רוצה לשמוע עוד" message="היי לורין, מעניין אותי לשמוע עוד לגבי ההשתלמויות שאת מעבירה"/>
    </div>
    </>
};

export default NailHishtalmut;