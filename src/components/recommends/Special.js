import styles from "./Recommends.module.css"
import result1 from "../../images/לורין הודיה נקש עבודות 1.png"
import result2 from "../../images/לורין הודיה נקש עבודות 2.png"
import result3 from "../../images/לורין הודיה נקש עבודות 3.png"
import result4 from "../../images/לורין הודיה נקש עבודות 4.png"
import result5 from "../../images/לורין הודיה נקש עבודות 5.png"
import result6 from "../../images/לורין הודיה נקש עבודות 6.png"
import result7 from "../../images/לורין הודיה נקש עבודות 7.png"



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Special=()=>{
    const sliderSettings = {
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth <= 1050 ? 2 : window.innerWidth <= 1250 ? 3: 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result4,
        },
        {
          type: 'image',
          src: result2,
        },
    
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result5,
        },
        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },

        ];  
return <>

<div className={styles.title}>קצת עבודות אישיות שלי</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`לורין הודיה נקש עבודה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

</>


}
export default Special