import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "./Product";

function Home2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home">
      <div className="home__container ">
        <div className="a-icon privious-icon">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            AutoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
          ><div>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/61tnBHdFSXL._SX3000_.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/61mCzH7K9lL._SX3000_.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/516bpdTAVDL.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <video
                id="desktopTallHeroVideo-c96cb506-47a6-48fc-a063-715a845183de_html5_api"
                className="vjs-tech"
                crossorigin="anonymous"
                muted="muted"
                tabindex="-1"
                role="application"
                preload="auto"
                playsinline="playsinline"
                src="https://m.media-amazon.com/images/I/A1JryB-lKoL.mp4"
                poster="https://m.media-amazon.com/images/I/71jAPKRmbnL._SR3000,600_.jpg"
              >
                <source
                  src="https://m.media-amazon.com/images/I/A1JryB-lKoL.mp4"
                  type="video/mp4"
                />
              </video>
            </Carousel.Item></div>
          </Carousel></div>
          <div className="home__row">
            <Product
              id="Imgtag"
              title="GPEESTRAC True Wireless Earbuds, Bluetooth 5.0 Headphone, in-Ear Button Control Hi-Fi Stereo Sound IPX5 Waterproof, Built-in Mic Earphones Gift for Work Sport"
              price={25.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71ZVAmu+bQL._AC_SY300_SX300_.jpg"
            />
            <Product
              id="12321341"
              title="Canon EOS 5D Mark IV Full Frame Digital SLR Camera Body
Visit the Canon Store"
              price={2499}
              rating={5}
              image="https://m.media-amazon.com/images/I/618rNsyJvyL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
            />
            <Product
              id="49538094"
              title="Stand Mixer, POWWA 7.5 QT Electric Mixer, 6+P Speed 660W Household Tilt-Head Kitchen Food Mixers with Whisk, Dough Hook, Mixing Beater & Splash Guard for Baking, Cake, Cookie, Kneading, ETL Certified (Red-with Handle)"
              price={139.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71rjeebTfeL._AC_SX679_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
              price={499.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
            />

            <Product
              id="99903850"
              title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
              price={139.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="903850"
              title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
              price={69.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
            />
            <Product
              id="8903851"
              title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
              price={999.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </div>
          <div className="home__row">
            <Product
              id="D9L64A"
              title="HP OfficeJet Pro 8210 Wireless Color Printer, HP Instant Ink or Amazon Dash replenishment ready (D9L64A)"
              price={149.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71Wdo2UcwOL._AC_SX679_.jpg"
            />

            <Product
              id="99903850"
              title="Samsung Chromebook 4 Chrome OS 11.6HD Intel Celeron Processor N4000 6GB RAM 64GB eMMC Gigabit Wi-Fi - XE310XBA-K03US"
              price={215.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/51ep5vsBCHL._AC_SX679_.jpg"
            />
            <Product
              id="3254354345"
              title="Dreo Nomad One Tower Fan with Remote, 24ft/s Velocity Quiet Cooling Fan, 90° Oscillating Fan with 4 Speeds, 4 Modes, 8H Timer, Bladeless Fan, Standing Floor Fans, Black, (DR-HTF007)"
              price={62.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/715zvhq1-kL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Sony A90J 83 Inch TV: BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR83A90J- 2021 ModelwithSony HT-A3000"
              price={5696}
              rating={4}
              image="https://m.media-amazon.com/images/I/91DM4tC5V7L._AC_SX425_.jpg"
            />
          </div>
        </div></div>
      
   
  );
}

export default Home2;
