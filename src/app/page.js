"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";


export default function Home() {
  const [search, setSearch] = useState("");

  const cars = [
    { name: "BMW", iimage: "/bmw-5.avif", model: "BMW M5", power: "727 HP", max_speed: "305 km/h" },
    { name: "McLaren", iimage: "/mclaren-1.avif", model: "McLaren Artura", power: "671 HP", max_speed: "330 km/h" },
    { name: "Ferrari", iimage: "/ferrari-4.avif", model: "Ferrari 296 GTB", power: "819 HP", max_speed: "330 km/h" },
    { name: "Toyota Supra", iimage: "/supra-1.jpg", model: "Supra Mk5", power: "382 HP", max_speed: "250 km/h" },
    { name: "Lamborghini", iimage: "/lamborghini-1.jpg", model: "Lamborghini Revuelto", power: "1000 HP", max_speed: "350 km/h" },
    { name: "Rolls Royce", iimage: "/rollsroyce-1.jpg", model: "Rolls Royce Phantom", power: "563 HP", max_speed: "250 km/h" },
    { name: "Aston Martin", iimage: "/aston-martin4.jpg", model: "Aston Martin DB12", power: "671 HP", max_speed: "325 km/h" },
    { name: "Bentley", iimage: "/bentley-c1.jpg", model: "Bentley Continental GT", power: "771 HP", max_speed: "335 km/h" },
    { name: "Mercedes", iimage: "/mercedes-s2.jpg", model: "Mercedes Maybach S-Class", power: "503 HP", max_speed: "250 km/h" },
    { name: "Porsche", iimage: "/porsche-911-1.jpg", model: "Porsche 911 Turbo S", power: "701 HP", max_speed: "322 km/h" },
    { name: "Bugatti", iimage: "/bugatti-chiron3.jpg", model: "Bugatti Chiron", power: "1479 HP", max_speed: "420 km/h" },
    { name: "Ford", iimage: "/mustang-gt1.jpg", model: "Ford Mustang GT", power: "480 HP", max_speed: "249 km/h" },
    { name: "Audi", iimage: "/audi-a6-abt3.jpg", model: "Audi A6 ABT", power: "408 HP", max_speed: "250 km/h" },
    { name: "Dodge", iimage: "/dodge1.jpg", model: "Dodge Challenger", power: "717 HP", max_speed: "327 km/h" },
    { name: "Nissan", iimage: "/nissan-gtr1.jpg", model: "Nissan GT-R", power: "565 HP", max_speed: "327 km/h" },
  ];

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1 className={styles.welcome_text}>
          <span className={styles.typewriter}>Welcome to the World of Legendary Cars!</span>
        </h1>
      </div>

    
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Search your dream car..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search_input}
        />
        <span className={styles.search_icon}><IoMdSearch /></span>
        
      </div>

    
      <div className={styles.cards_div}>
        {filteredCars.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiper_container}
          >
            {filteredCars.map((car, index) => (
              <SwiperSlide key={index} className={styles.swiper_slide}>
                <div className={styles.div_card}>
                  <Card
                    name={car.name}
                    iimage={car.iimage}
                    model={car.model}
                    power={car.power}
                    max_speed={car.max_speed}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className={styles.no_results}>No cars found 😢</p>
        )}
      </div>
    </div>
  );
}
