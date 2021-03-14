import React from "react";
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 3/32GB | 48MP Camera | Silver"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71S1Cyt9QhL._AC_UY218_.jpg"

/>

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={999.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81W9Dgr22TL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Lenovo IdeaPad 3 Intel i5-1035G1 Quad Core 12GB RAM 256GB SSD 15.6-inch Touch Screen Laptop
"
            price={555.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81l6xdQOHyL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Canon PowerShot SX540 Digital Camera w/ 50x Optical Zoom - Wi-Fi & NFC Enabled (Black), 1 - 1067C001"
            price={279.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61DrCbSkM4L._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPad 9.7in with WiFi, 32GB-Silver (2017 Newest Model) (Renewed)"

            price={259.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61W4+LFPoqL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 65-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in (UN65TU8300FXZA, 2020 Model)"
            price={797.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/9138UedBC+L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
