import Image from "next/image"
import styles from "./about.module.css"
import { FaCar } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa6";



const About = () => {
  return (
    <div className={styles.main_about}>
        <div className={styles.img_about}>
         <Image 
         src="/back-about.png"
         width={1900}
    height={290}
    priority
    
         alt="back"
         style={{width: "100%",
      height: "auto",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "10px"}}


         />
        </div>
        <div className={styles.all_content_wrapper}>
        <div className={`${styles.top_banner} ${styles.about_box}`}>
            <h1>WELCOME TO A CARS</h1>
            <h3>Welcome to A Cars, your exclusive source for detailed insights into the world’s most luxurious and high-performance automobiles</h3>
            <h3>From the timeless elegance of Rolls-Royce to the breathtaking speed of McLaren, we bring you everything that defines automotive excellence.</h3>
        </div>
        <div className={`${styles.intro_section} ${styles.about_box}`}>
            <div className={styles.intro_section_head}>
                <h1>WHAT WE OFFER</h1>
            </div>
            <div className={styles.mini_box_wrapper}>
                <div className={styles.mini_box}>
                    <div className={styles.icons_box}>
                         <span><FaCar /></span>
                    <h2>Detailed Car Profiles </h2>
                   
                    </div>
                    <h4>We provide comprehensive information about every luxury car — from engine specs and performance to design, price, and production details. Each profile is carefully written to give you a full picture of the car’s power.</h4>
                </div>
                <div className={styles.mini_box}>
                    <div className={styles.icons_box}>
                        <span><BsFillCameraReelsFill /></span>
                    <h2>High-Quality Visuals</h2>
                    
                    </div>
                    <h4>Our platform showcases stunning HD images of the world’s finest automobiles — letting you admire every curve, interior detail, and design line of brands like Rolls-Royce, BMW, McLaren, Ferrari, and Lamborghini.</h4>
                </div>
                <div className={styles.mini_box}>
                    <div className={styles.icons_box}>
                        <span><FaLightbulb /></span>
                    <h2>Comparisons & Insights</h2>
                    
                    </div>
                    <h4>We help you understand what sets each brand apart. You’ll find side-by-side comparisons, unique features, and insights that highlight the craftsmanship, innovation, and identity of each luxury car.</h4>
                </div>
            </div>
</div>
<div className={styles.our_mission}>
    <h1>OUR MISSION</h1>
    <h3>Our mission is to inspire automotive enthusiasts by presenting the beauty, power, and craftsmanship behind every luxury car.</h3>
    <h3>We aim to be the go-to platform for those who appreciate not just speed, but the art of engineering perfection.</h3>
</div>
    </div>
    </div>
  )
}

export default About