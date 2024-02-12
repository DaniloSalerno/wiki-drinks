import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../assets/animation/not-found.json'
import useTitle from "../useTitle";

const ErrorScreen = () => {

  useTitle('Pagina Non Trovata')
  return <Wrapper>
    <h3>Pagina non trovata</h3>
    <Lottie options={
      {
        loop: true,
        autoplay: true,
        reverse: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYmid slice'
        }
      }
    }
      width={500}
      height={500} />
    <Link to='/' className="btn btn-primary"> Torna in Home </Link>
  </Wrapper >
};

const Wrapper = styled.section`
  min-height: 85vh;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  display: -webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }

  .btn {
    border-radius: 1.5rem;
  }
`

export default ErrorScreen;
