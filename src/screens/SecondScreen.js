import Box from "../components/box/Box"
import styles from "./SecondScreen.module.css"
import women from "../Icons/wired-lineal-633-female-morph-success (1).json"
import money from '../Icons/wired-lineal-298-coins-hover-jump.json'
import boss from "../Icons/wired-lineal-1129-dove-hover-pinch.json"
import ImageTextComponent from '../components/what/What';
import practice from "../images/תרגול.jpg"
import faith from "../images/אמונה.jpg"
import continues from "../images/התמדה.jpg"
const SecondScreen=()=>{
    const items = [
        {
            title: "תרגול",
            description: "תרגול תמיד עוזר! בכל שלב שאת נמצאת בו - אבל בעיקר בהתחלה! כשאת עדיין לא שולטת ב100% מבני הציפורניים ומסוגי הטכניקות וככל שתתרגלי יותר- הדברים יבואו אלייך יותר בקלות",
            image: practice
        },
        {
            title: "התמדה",
            description: "כשרון בלי התמדה לא שווה כלום! ככל שתתמידי יותר ותהי יותר עקבית גם היכולות שלך ישתפרו וגם העסק שלך ייחשף ליותר אנשים",
            image: continues
        },
        {
            title: "אמונה בעצמך",
            description: "לא תמיד הדברים ילכו חלק, חשוב שתאמיני בעצמך לאורך כל הדרך ותשדרי בטחון כלפי חוץ",
            image: faith
        },
  
    ];

    return <>
    <div className={styles.title}>אם תמיד חיפשת</div>
    <div className={styles.row}>
    <Box title="להגשים את עצמך" description="להתעורר כל בוקר וללכת לישון כל לילה בתחושה שאת עושה את הדבר שאת הכי אוהבת לעשות" icon={women}/>
    <Box title="להיות הבוסית של עצמך" description="להחליט מתי את עובדת, מתי את נחה ולקחת שליטה על סדר היום שלך" icon={boss}/>
    <Box title="לשבור את תקרת הזכוכית" description="להרוויח את הסכומים שתמיד חלמת להרוויח,אבל הפעם - לעצמך ולא לבוסים אחרים!" icon={money}/>
    </div>
    <div className={styles.title}>הגעת למקום הנכון!</div>
    <div className={styles.description}>תחום הציפורניים הוא בין התחומים הכי מבוקשים היום! תעסוקה בו יכולה להכניס לך 5 ספרות בחודש, תוך כדי שאת מנהלת את עצמך וחיה את התחום שאת הכי אוהבת</div>
    <div className={styles.title}>אבל..</div>
    <div className={styles.description}>שום דבר לא בא בקלות!</div>
    <div className={styles.title}>הצלחה בתחום תדרוש ממך</div>
    <ImageTextComponent items={items}/>
    <div className={styles.title}>לכן</div>
    <div className={styles.description}>ישבתי והבנתי מה היה חסר לי בתור תלמידה והכנתי קורס מקיף שבו גם תקבלי את הטכניקות שאת צריכה לדעת וגם את המעטפת האישית שתעזור לך לצאת לעולם העצמאות הרבה יותר מוכנה ובטוחה בעצמך</div>
    </>
}
export default SecondScreen