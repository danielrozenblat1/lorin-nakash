import React from 'react';
import { Scissors, PenTool, Camera, MessageCircle } from 'lucide-react';
import styles from './NailHishtalmut.module.css';
import Button from '../button/Button';

const NailHishtalmut = () => {
  const courseTopics = [
    { text: "נחשפות לחומרים שונים ולומדות להתאים את החומר הנכון לכל סוג ציפורן", icon: PenTool },
    { text: "לומדות ומדייקות את המניקור, מהסרה מדוייקת בלי לפגוע בציפורן ועד ניקיון מוחלט של כל איזור העור", icon: Scissors },
    { text: "לומדות לגזור מקצועי עם מספרי מניקור", icon: Scissors },
    { text: "לומדות ומחדדות את המבנה האנטומי בטכניקה הכי קלה ומהירה שאפשר", icon: PenTool },
    { text: "לומדות למרוח צמוד ומדוייק לקוטיקולה", icon: PenTool },
    { text: "לומדות לסגור עבודה עם טופ למראה מבריק במיוחד ועוברות על פינישים לתוצאה ברמה גבוהה לעבודות קטלוג", icon: PenTool },
  ];

  const bonuses = [
    { text: "לומדות זוויות צילום, טיפים לצילום מקצועי של הציפורניים, עבודה עם עדשות תאורה רקעים וכו׳", icon: Camera },
    { text: "מקבלות ליווי מלא שלי לכל שאלה שעולה גם אחרי הקורס", icon: MessageCircle },
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
        <h2 className={styles.sectionTitle}>בהשתלמות אתן</h2>
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
        <h2 className={styles.sectionTitle}>2 בונוסים:</h2>
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