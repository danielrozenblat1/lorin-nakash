import React from 'react';
import { Check, BookOpen, Heart, GraduationCap, Users, Fingerprint, Stethoscope, Scissors, FileText, PenTool, Ruler, Droplet } from 'lucide-react';
import styles from './NailCourse.module.css';
import Button from '../button/Button';

const NailCourse = () => {
  const forWhoItems = [
    { text: "מי שיש לה אהבה ותשוקה לעולם הציפורניים", icon: Heart },
    { text: "מי שאין לה ידע קודם כלל", icon: GraduationCap },
    { text: "מי שאין לה ידע מספק להתחיל ולהיכנס לתחום הלקוחות", icon: Users }
  ];

  const courseContentItems = [
    { text: "את כל הכלים הנדרשים", icon: BookOpen },
    { text: "את השיטה הייחודית שלי", icon: FileText },
    { text: "טכניקות להוצאה מושלמת ואיכותית", icon: PenTool },
    { text: "איך להגיע לתוצאות הכי נקיות והכי יפות", icon: Check }
  ];

  const courseTopics = [
    { text: "אנטומיה של הציפורן", icon: Fingerprint },
    { text: "מחלות והופעות בציפורן וכמובן דרכי התמודדות", icon: Stethoscope },
    { text: "חיטוי ועיקור כלי העבודה ונהלי ניקיון", icon: Stethoscope }
  ];

  const nailPreparation = [
    { text: "הסרה והחלקה של הציפורן", icon: Scissors },
    { text: "מניקור ידני ומכשיר", icon: PenTool },
    { text: "שיוף צורה בדרך הנכונה", icon: Ruler },
    { text: "חיתוך העור באמצעות מספריים", icon: Scissors }
  ];

  const materialsWork = [
    { text: "הכרת חומרים מקשרים", icon: Droplet },
    { text: "הנחת בייס", icon: PenTool },
    { text: "תיקון מבנה הציפורן הטבעית (תיקון מבנה אנטומי)", icon: Fingerprint },
    { text: "מריחה קרובה וצמודה לעור", icon: PenTool }
  ];

  return (
    <div className={styles.container} id="קורס לק גל">
      <h1 className={styles.title}>קורס מתחילות לק ג'ל</h1>
      
      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>למי הקורס מיועד?</h2>
        <ul className={styles.list}>
          {forWhoItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>בקורס תקבלי:</h2>
        <ul className={styles.list}>
          {courseContentItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <p className={styles.description}>
          את עוד תכירי אותי ותביני שאני אוהבת את הכי נקי, הכי יפה, והכי טוב! וגם את תגיעי לשם יחד איתי!
        </p>
        <p className={styles.description}>
          הקורס בנוי מ4 מפגשים של 3-4 שעות לכל אחד מהם.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>מה נלמד בקורס?</h2>
        <ul className={styles.list}>
          {courseTopics.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>הכנת הציפורן בצורה נכונה:</h2>
        <ul className={styles.list}>
          {nailPreparation.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>עבודה עם חומרים:</h2>
        <ul className={styles.list}>
          {materialsWork.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <item.icon className={styles.icon} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <p className={styles.footer}>
          במהלך הקורס אלמד אותך בנוסף לצלם את העבודות שלך איתן תוכלי ליצור מיני קטלוג של העבודות
          אותן תוכלי לפרסם.
        </p>
        <p className={styles.footer}>
          כל תלמידה תקבל בנוסף חוברת לימודים אישית מסודרת עם כל החומר שלמדנו, תעודת סיום
          קורס, וערכת לק ג'ל למתחילה.
        </p>
      </div>

      <Button text="לורין אני רוצה לשמוע עוד"/>
    </div>
  );
};

export default NailCourse;