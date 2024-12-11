import React, { useEffect, useState } from "react";
import "./MainPage.css";
import "swiper/swiper-bundle.css";
import headerImg from "./assets/header.jpg"; // Import image
import serviceImg from "./assets/service-1.jpg";
import Banner from "./assets/banner.jpg";
import client1Img from "./assets/client-1.jpg";
import contact from "./assets/contact.jpg";
import service3Img from "./assets/service-3.jpg";
import service2Img from "./assets/service-2.png";
import exp from "./assets/experience.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollReveal from "scrollreveal";

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize ScrollReveal
    const scrollreveal = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__content h1", { ...scrollreveal });
    ScrollReveal().reveal(".header__btn", { ...scrollreveal, delay: 500 });
    ScrollReveal().reveal(".service__card", { ...scrollreveal, interval: 500 });
    ScrollReveal().reveal(".price__card", { ...scrollreveal, interval: 500 });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo nav__logo">
              <a href="#">
                <img src={headerImg} alt="logo" />
              </a>
            </div>
            <div
              className="nav__menu__btn"
              id="nav-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"}
              ></i>
            </div>
          </div>
          <ul
            className={`nav__links ${isMenuOpen ? "open" : ""}`}
            id="nav-links"
          >
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#service">SERVICE</a>
            </li>
            <button className="btn">CONTACT US</button>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1>We are Qualified And Professionals</h1>
            <div className="header__btn">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </header>

      <section className="banner__container">
        <div className="banner__card">
          <h4>Satisfaction Guaranteed Goofy Aahes</h4>
        </div>
        <div className="banner__card">
          <h4>Trucks ki Ven Ki</h4>
        </div>
        <div className="banner__image">
          <img src={Banner} alt="banner" />
        </div>
      </section>

      <section className="section__container experience__container" id="about">
        <div className="experience__image">
          <img src={exp} alt="experience" />
        </div>
        <div className="experience__content">
          <p className="section__subheader">WHO WE ARE</p>
          <h2 className="section__header">We have Ohio Experience</h2>
          <p className="section__description">
            Woopdi Aah Some yapping skibidi gyatt level 10 Adityo black Swastik
            Simp Woopdi and some more woopdis. WTF IS WOOPDI??
          </p>
          <button className="btn">Read More</button>
        </div>
      </section>

      <section className="service" id="service">
        <div className="section__container service__container">
          <p className="section__subheader">WHY YO GOOFY AAH CHOSE US?</p>
          <h2 className="section__header">WORST TRUCK SERVICES</h2>
          <p className="section__description">
            Dont trust us with your Trucks our aah aint reliable
          </p>
          <div className="service__grid">
            <div className="service__card">
              <img src={serviceImg} alt="service" />
              <h4>Predictive Maintenance</h4>
              <p>Worse experience guaranteed and TRUCK BUDDDDYYYYYYYY!!!!!!</p>
            </div>
            <div className="service__card">
              <img src={service2Img} alt="service" />
              <h4>24/7 Support</h4>
              <p>Worse experience guaranteed and TRUCK BUDDDDYYYYYYYY!!!!!!</p>
            </div>
            <div className="service__card">
              <img src={service3Img} alt="service" />
              <h4>Learn for Yourself Goofy heads</h4>
              <p>Worse experience guaranteed and TRUCK BUDDDDYYYYYYYY!!!!!!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="customisation">
        <div className="section__container customisation__container">
          <p className="section__subheader">OUR WOOPDINESS</p>
          <h2 className="section__header">
            Truck Serving Matched With Great Worksmanship
          </h2>
          <p className="section__description">
            Our tools will give you the goofiest experience of this world NVM
          </p>
          <div className="customisation__grid">
            <div className="customisation__card">
              <h4>1</h4>
              <p>Total Project</p>
            </div>
            <div className="customisation__card">
              <h4>165</h4>
              <p>Trucks Destroyed</p>
            </div>
            <div className="customisation__card">
              <h4>450</h4>
              <p>Truck Drivers unemployed now</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container price__container">
        <p className="section__subheader">BEST PRICES TO ROB YO AAH</p>
        <h2 className="section__header">Our Greedy Price Plans</h2>
        <p className="section__description">
          We offer a range of pricing options to rob you cuz our services is ass
        </p>
        <div className="price__grid">
          <div className="price__card">
            <h4>FREE TRIAL</h4>
            <h3>₹0</h3>
            <p>Predictive Maintenance</p>
            <p>AI Chatbot</p>
            <p>Scheduled Maintenance</p>
            <p>Personalised Attention</p>
            <button className="btn">Try For Yourself</button>
          </div>
          <div className="price__card">
            <h4>SILVER PACKAGE</h4>
            <h3>₹1,00,000</h3>
            <p>Predictive Maintenance</p>
            <p>AI Chatbot</p>
            <p>Scheduled Maintenance</p>
            <button className="btn">GO BASIC</button>
          </div>
          <div className="price__card">
            <div className="price__card__ribbon">BESTSELLER</div>
            <h4>GOLD PACKAGE</h4>
            <h3>₹10,00,00,000</h3>
            <p>Predictive Maintenance</p>
            <p>AI Chatbot</p>
            <p>Scheduled Maintenance</p>
            <p>Personalised Attention</p>
            <button className="btn">GO PREMIUM</button>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="section__container contact__container">
          <div className="contact__content">
            <p className="section__subheader">CONTACT US(DARE TO)</p>
            <h2 className="section__header">
              Imagine you get freaky with your Truck.
            </h2>
            <p className="section__description">
              Experience peak Truckophilic when we make you go 𝓯𝓻𝓮𝓪𝓴𝔂 with your
              trucks. Spend nights and days with your Trucks.
            </p>
            <div className="contact__btns">
              <button className="btn">Our Services</button>
              <button className="btn">Dont Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container testimonial__container">
        <p className="section__subheader">CLIENT TESTIMONIALS</p>
        <h2 className="section__header">100% Disapproved by Customers</h2>
        <Swiper loop pagination={{ el: ".swiper-pagination" }}>
          <SwiperSlide>
            <div className="testimonial__card">
              <img src={contact} alt="testimonial" />
              <p>
                I couldnt believe my eyes when i got my truck back from
                maintenance. Shid was fine and this fake website told me that it
                my truck needs maintenance. I divorced my wife sold my 2 kids
                kidneys to service the truck and buy their gold package all for
                nothing but shid. I am broke please help.
              </p>
              <h4>-Ramesh Truckwala</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__card">
              <img src={client1Img} alt="testimonial" />
              <p>
                Truck
                BUDDDDYYYYYYYY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </p>
              <h4>-Adityo</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__card">
              <img src={contact} alt="testimonial" />
              <p>
                I couldnt believe my eyes when i got my truck back from
                maintenance. Shid was fine and this fake website told me that it
                my truck needs maintenance. I divorced my wife sold my 2 kids
                kidneys to service the truck and buy their gold package all for
                nothing but shid. I am broke please help.
              </p>
              <h4>-Ramesh Truckwala</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <footer className="footer">
        <div className="section__container footer__container">
          <div className="subscribe__content">
            <p className="section__subheader">Our Developers</p>
            <h2 className="section__header">Follow our Skilled Developers</h2>
            <p className="section__description">
              Follow our skilled developers to get more shady and goofy apps
              whose only aim is to loot you to core.
            </p>
          </div>
          <div className="subscribe__form">
            <form action="/">
              <input type="text" placeholder="Your Email" />
              <button className="btn">Send</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
