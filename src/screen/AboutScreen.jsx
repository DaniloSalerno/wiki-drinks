import React from "react";
import Hero from "../components/Hero";
import { valueCards, teamCards } from "../utils/info";
import image from '../assets/image/about-hero.jpg'
import teamImg from '../assets/image/team-img.jpg'
import Card from "../components/Card";
import useTitle from "../useTitle";

const AboutScreen = () => {

  useTitle('Chi Siamo')

  return <>
    <Hero img={image}>
      <section className="about-hero">
        <div className="about-text">
          <div className="topline"></div>
          <h3>
            <q>
              Grande è la fortuna di colui che possiede una buona bottiglia,un buon libro e un buon amico
            </q>
          </h3>
          <div className="underline"></div>
        </div>
      </section>
    </Hero>

    <section className="about-value">
      <div className="container about-value-content">

        <h3 className="text-uppercase brand-secondary-color">
          il nostro progetto
        </h3>

        <div className="card-section">
          {
            valueCards.map(card => {
              return <Card key={card.title} {...card} className={"value-card"} />
            })
          }
        </div>

      </div>
    </section>

    <section className="about-team">
      <div className="team-img"
        style={{
          background: `url(${teamImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>

      </div>

      <div className="container about-team-content">
        <h3 className="brand-secondary-color text-uppercase"> Il nostro team </h3>

        <div className="card-section">
          {
            teamCards.map(card => {
              return <Card key={card.title} {...card} />
            })
          }
        </div>

      </div>
    </section>

  </>;
};

export default AboutScreen;
