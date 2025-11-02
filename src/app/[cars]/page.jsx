"use client"; // Required for Swiper in Next.js (App Router)
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./info.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Car data
const carData = {
  bmw: {
    name: "BMW M5",
    imgs: ["/bmw-m51.jpg", "/bmw-m52.jpg", "/bmw-m53.jpeg"],
    full_name: "BMW M5 (by BMW M GmbH)",
    manufacturer: "Bayerische Motoren Werke AG (BMW)",
    price: "USD $119,500",
    engine: " 4.4-liter twin-turbocharged V8",
    details: "The BMW M5 is a high-performance luxury sedan manufactured by BMW M GmbH (Germany). It has been in production since 1985, with the latest model powered by a 4.4 L twin-turbocharged V8 engine producing around 617 hp. The car accelerates from 0–100 km/h in just 3.2 seconds and reaches a top speed of about 305 km/h"
  },
  "ferrari": {
    name: "Ferrari 296 GTB",
    imgs: ["/ferrari1.jpg", "/ferrari2.jpeg", "/ferrari3.jpg"],
    full_name: "Ferrari 296 GTB (GTB stands for Gran Turismo Berlinetta)",
    manufacturer: "Ferrari (Italy)",
    price: "USD $346,950",
    engine: "2992cc 120° V6 hybrid engine",
    details:"The Ferrari 296 GTB (Gran Turismo Berlinetta) is a hybrid supercar manufactured by Ferrari S.p.A., Italy. It has been in production since 2021 and features a 3.0 L twin-turbo V6 engine paired with an electric motor, delivering 819 hp. The car accelerates from 0–100 km/h in about 2.9 seconds and has a top speed of 330 km/h."
  },
  "mclaren": {
    name: "McLaren Artura",
    imgs: ["/mclaren-artura1.jpg", "/mclaren-artura2.jpg", "/mclaren-artura3.jpg"],
    full_name: "McLaren Artura",
    manufacturer: "McLaren Automotive (UK)",
    price: "USD $254,100 (2025 model)",
    engine: "twin-turbocharged \(3.0\)-liter V6 engine",
    details:"The McLaren Artura is a high-performance hybrid supercar manufactured by McLaren Automotive (UK). It has been in production since 2022 and combines a 3.0 L twin-turbo V6 engine with an electric motor, producing around 671 hp. The car accelerates from 0-100 km/h in just 3.0 seconds and has a top speed of 330 km/h."
  },
  "toyota supra": {
    name: "Toyota Supra Mk5",
    imgs: ["/supra1.jpg", "/supra2.jpg", "/supra3.jpg"],
    full_name: "Toyota GR Supra (MkV, fifth generation)",
    manufacturer: "Toyota (Japan)",
    price: "USD $49,990",
    engine: " turbocharged 3.0-liter inline-six (BMW B58)",
    details: "The Toyota GR Supra (Mk5) is a sports car manufactured by Toyota Motor Corporation, Japan, in collaboration with BMW. It has been in production since 2019 and is powered by a 3.0 L turbocharged inline-6 or 2.0 L turbocharged inline-4 engine. The Supra accelerates from 0–100 km/h in about 3.9 seconds and has a top speed of 250 km/h."

  },
  "lamborghini": {
    name:"Lamborghini Revuelto",
    imgs:["/lamborghini1.jpg","/lamborghini2.jpg","/lamborghini3.jpg"],
    full_name:"Lamborghini Revuelto",
    manufacturer:"Automobili Lamborghini S.p.A. (Italy)",
    price:"USD $608,000",
    engine:"6.5-liter naturally aspirated V12 hybrid (L545)",
    details:"The Lamborghini Revuelto is the first V12 plug-in hybrid supercar by Lamborghini, introduced in 2023. It combines a new 6.5-liter V12 engine with three electric motors and an 8-speed dual-clutch transmission. Delivering a total output of 1,001 horsepower, it accelerates from 0–100 km/h in just 2.5 seconds and reaches a top speed of over 350 km/h."
  },
  "rolls royce": {
    name:"Rolls Royce Phantom",
    imgs:["/rollsroyce1.jpg","/rollsroyce2.jpg","/rollsroyce3.jpg"],
    full_name:"Rolls-Royce Phantom Series II",
    manufacturer:"Rolls-Royce Motor Cars (United Kingdom)",
    price:"USD $505,000",
    engine:"6.75-liter twin-turbocharged V12 engine",
    details:"The Rolls-Royce Phantom is the flagship luxury sedan of Rolls-Royce, symbolizing ultimate craftsmanship and prestige. It features a powerful 6.75-liter twin-turbo V12 producing 563 hp and delivers an exceptionally smooth, quiet ride. The Phantom combines hand-crafted luxury interiors, advanced technology, and unmatched refinement, offering one of the most exclusive driving experiences in the world."
  },
  "aston martin":{
     name:"Aston Martin DB12",
    imgs:["/aston-martin1.jpg","/aston-martin2.jpg","/aston-martin3.jpg"],
    full_name:"Aston Martin DB12 Coupe",
    manufacturer:"Aston Martin Lagonda Global Holdings plc (UK)",
    price:"USD $295,200",
    engine:"4.0-liter Twin-Turbocharged V8",
    details:"The Aston Martin DB12 is the next evolution of grand touring, blending luxury, technology, and raw power. Its hand-crafted interior features fine leather, cutting-edge infotainment, and a driver-focused design. Powered by a 4.0-liter twin-turbo V8, it delivers thrilling acceleration while maintaining Aston Martin’s signature elegance and refinement."
  },
  "bentley":{
     name:"Bentley Continental GT",
    imgs:["/bentley-c2.jpg","/bentley-c3.jpg","/bentley-c4.jpg"],
    full_name:"Bentley Continental GT",
    manufacturer:"Bentley Motors (UK)",
    price:"USD $284,750",
    engine:"Twin-turbocharged 4.0 L V8 + electric motor (Hybrid system)",
    details:"The Continental GT is Bentley’s flagship grand tourer that blends ultra-luxury craftsmanship with high performance. With its hybrid V8 powertrain, it not only delivers blistering speed and torque, but also luxury features such as hand-stitched leather, bespoke finishes and advanced driving tech."
  },
  "mercedes":{
    name:"Mercedes Maybach S-Class",
    imgs:["/mercedes-s1.jpeg","/mercedes-s3.jpeg","/mercedes-s4.jpg"],
    full_name:"Mercedes Maybach S-Class",
    manufacturer:"Mercedes‑Benz (Germany)",
    price:"USD $250,000",
    engine:"6.0-litre twin-turbocharged V12",
    details:"The Maybach S-Class takes the already luxurious S-Class platform and elevates it into ultimate executive-class comfort. With lavish rear-seat features such as reclining massage seats, premium materials, and bespoke finishes, it’s designed as a rolling office or lounge."
  },
  "porsche":{
    name:"Porsche 911 Turbo S",
    imgs:["/porsche-911-2.jpg","/porsche-911-3.jpg","/porsche-911-4.jpeg"],
    full_name:"Porsche 911 Turbo S",
    manufacturer:"Porsche AG (Germany)",
    price:"US $270,300",
    engine:"Twin-Turbo flat-6 engine combined with T-Hybrid technology",
    details:"The 911 Turbo S stands at the pinnacle of the 911 lineup, combining blistering performance with everyday usability and luxury. With its advanced hybrid-assisted twin-turbo powertrain, it delivers astonishing acceleration and top‐speed while still offering the refinement and build quality expected from Porsche."
  },
  "bugatti":{
    name:"Bugatti Chiron",
    imgs:["/bugatti-chiron2.jpeg","/bugatti-chiron1.jpeg","/bugatti-chiron4.jpg"],
    full_name:"Bugatti Chiron",
    manufacturer:"Bugatti Automobiles S.A.S (France)",
    price:"$3 million USD",
    engine:"8.0L Quad-Turbocharged W16",
    details:"The Chiron is Bugatti’s flagship hypercar, blending ultimate luxury with extreme performance. Built for both comfort and speed, it features a carbon fiber monocoque and handcrafted interior with exceptional engineering precision."
  },
  "ford":{
    name:"Ford Mustang GT",
    imgs:["/mustang-gt5.jpg","/mustang-gt6.jpg","/mustang-gt4.jpg"],
    full_name:"Ford Mustang GT",
    manufacturer:"Ford Motor Company",
    price:"$47,380 USD",
    engine:"5.0 L naturally-aspirated “Coyote” V8",
    details:"The Ford Mustang GT is a legendary American muscle car powered by a 5.0-liter V8 engine producing around 480 horsepower and reaching a top speed of 155 mph (249 km/h). Built by Ford Motor Company, it blends raw power with modern technology, offering thrilling performance and an unmistakable exhaust note. Priced around $47,000 USD"
  },
  "audi":{
     name:"Audi A6 ABT",
    imgs:["/audi-a6-abt1.jpeg","/audi-a6-abt2.jpg","/audi-a6-abt3.jpg"],
    full_name:"Audi A6 ABT",
    manufacturer:"Audi (base vehicle) & ABT Sportsline (after-market tuner)",
    price:"$17000 USD",
    engine:"3.0L TFSI V6 (Petrol)",
    details:"The Audi A6 ABT is a high-performance version of the A6, tuned by ABT Sportsline for enhanced power and sportier design. Equipped with a 3.0-liter TFSI V6 engine, it produces up to 408 horsepower and delivers exceptional acceleration with refined handling. ABT upgrades include aerodynamic body kits, custom wheels, and a sport-tuned suspension for improved driving dynamics."

  },
  "dodge":{
      name:"Dodge Challenger",
    imgs:["/dodge2.jpg","/dodge3.jpg","/dodge4.jpg"],
    full_name:"Dodge Challenger",
    manufacturer:"Dodge (Stellantis North America)",
    price:"$34,395 USD",
    engine:"6.2-L supercharged V8",
    details:"The Challenger blends retro-muscle styling with modern performance and tech — it offers a wide range of trims from V6 economy options to full-blown V8 supercharged beasts. It’s rear-wheel-drive, two-door, seats five, and is one of the last true large American coupes carrying on the traditional muscle-car formula. With the 6.2-L supercharged V8 version you’re getting serious straight-line performance, while the base models maintain more everyday usability."
  },
  "nissan":{
      name:"Nissan GT-R",
    imgs:["/nissan-gtr1.jpg","/nissan-gtr2.jpg","/nissan-gtr3.jpg"],
    full_name:"Nissan GT-R",
    manufacturer:"Nissan",
    price:"$122,985 USD",
    engine:"3.8-litre twin-turbocharged V6.",
    details:"The Nissan GT-R combines Japanese precision with supercar-level performance, utilising its all-wheel-drive system and hand-built twin-turbo V6 to deliver thrilling acceleration and handling. With a polished interior and advanced drivetrain tech, it manages daily usability while still being track-ready. Originally introduced as an affordable performance benchmark, it remains a benchmark in its class for drivers seeking power, control and engineering excellence."
  }
};


export default function CarPage() {
 
  const params = useParams();


  const carKey = params.car || params.cars;


  const carName = decodeURIComponent(carKey || "")
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .trim();

  const car = carData[carName];

  if (!car) {
    return (
      <div className={styles.main_info_container}>
        <h1>Car Not Found</h1>
      </div>
    );
  }

  return (
    <div className={styles.main_info_container}>
      <div className={styles.info_rott}>
        <h1>{car.name}</h1>

        <div className={styles.info_imgs}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className={styles.swiper_container}
          >
            {car.imgs.map((src, index) => (
              <SwiperSlide key={index} className={styles.swiper_slide}>
                <Image
  src={src}
  width={600} // still needed for Next.js Image optimization
  height={350}
  style={{ width: "100%", height: "350px", objectFit: "cover", objectPosition: "center" }}
  alt={`${car.name} image ${index + 1}`}
/>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3>Full Name: {car.full_name}</h3>
        <h3>Manufacturer: {car.manufacturer}</h3>
        <h3>Price: {car.price}</h3>
        <h3>Engine: {car.engine}</h3>
        
      </div>
      <div className={styles.details_p}>
        <h4>Details : {car.details}</h4>
        </div>
        <Link href="/" className={styles.back_btn}>Go Back</Link>
    </div>
  );
}
