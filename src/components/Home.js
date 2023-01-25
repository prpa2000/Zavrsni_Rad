import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Kviz</title>
    </Helmet>
    <div id="home">
      <section className="sectionhome">
        <div style={{ textAlign: "center" }}>
          <span className="mdi mdi-cube-outline cube "></span>
        </div>
        <h1>Osnove Programiranja</h1>

        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/home/play">
                IGRAJ
              </Link>
            </li>
          </ul>
        </div>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="instruction-button" to="/home/instructions">
                UPUTE
              </Link>
            </li>
          </ul>
        </div>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="logoff-button" to="/">
                ODJAVA
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Home;
