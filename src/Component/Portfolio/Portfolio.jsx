import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/IMG-Delivery.png";

const data = [
  {
    id:1,
    image: IMG7,
    title: "Portfolio item 1",
    github: "https://github.com/Arifeta/food-delivery",
    demo: "https://food-delivery16.vercel.app"
  },
  {
    id:2,
    image: IMG2,
    title: "Portfolio item 2",
    github: "https://github.com/Arifeta/food-delivery",
    demo: "https://food-delivery16.vercel.app"
  },
  {
    id:3,
    image: IMG3,
    title: "Portfolio item 3",
    github: "https://github.com/Arifeta/food-delivery",
    demo: "https://food-delivery16.vercel.app"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="portfolio1" />
          </div>
            <h3>{title}</h3>
          <div className="portfolio__item-cta">
              <a href={github} className="btn">Github</a>
              <a href={demo}  className="btn btn-primary"target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
