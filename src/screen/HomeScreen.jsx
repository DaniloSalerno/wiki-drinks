import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import animationData from '../assets/animation/drink-animation.json'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useGlobalContext } from "../context";
import ErrorMessage from "../components/ErrorMessage";
import Cocktails from "../components/Cocktails";
import Loading from "../components/Loading";

const HomeScreen = () => {

  const { query, isLoading, data, isError, count, searchCocktail } = useGlobalContext()
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault()
    searchCocktail(input)
  }

  return <>
    <Hero>
      <div className="home-hero">

        <div className="home-hero-text">

          <div className="home-hero-title">

            <h2 className="brand-color text-uppercase">
              wiki drinks
            </h2>

            <h4>
              Tutti i cocktail del mondo a portata di click
            </h4>

          </div>
          {/* /.home-hero-title */}

          <p>
            Wiki Drink è un database internazionale che mette a tua disposizione, in maniera <span className="brand-color">Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo.
          </p>

          <Link to='/about' className="btn btn-primary"> Scopri di più </Link>

        </div>
        {/* /.home-hero-text */}

        <div className="home-hero-img">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              reverse: true,
              animationData,
              renderSetting: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={350}
          />
        </div>

      </div>
      {/* /.home-hero */}

    </Hero>

    <section className="container home-screen">

      <div className="search-bar">

        <div className="form-container">

          <form action="##" onSubmit={handleSubmit}>

            <label htmlFor="drink">
              <h4>Cerca il tuo Drink</h4>
            </label>

            <div className="input-search">

              <input type="text" id="drink" className="input" placeholder={query} value={input} onChange={(e) => setInput(e.target.value)} />

              <button type="submit" className="btn icon-btn">
                <FaSearch className="icon" />
              </button>

            </div>
            {/* /.input-search */}

          </form>

        </div>
        {/* /.form-container */}

        <p className="result">
          {count} risultati
        </p>

      </div>
      {/* /.search-bar */}

      {
        !isLoading && isError ? (
          <ErrorMessage>Nessun cocktail trovato</ErrorMessage>
        ) : (
          !isLoading && !isError ? <Cocktails data={data.drinks} /> : <Loading />
        )
      }

    </section >
  </>;
};

export default HomeScreen;
