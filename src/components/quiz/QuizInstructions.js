import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Uputsva</title>
      </Helmet>
      <div className="instructions container">
        <h1 className="h1inst"> PRAVILA</h1>

        <ul className="browser-default" id="main-list">
          <li>1) Različit je broj pitanja ovisno o težini</li>
          <li>2) Različito je trajanje kviza ovisno o težini</li>
          <li>
            3) Kviz se završava automatski nakon isteka vremena ili kada se
            odgovore sva pitanja
          </li>
          <li>4) Nije se moguće vraćati na prethodna pitanja</li>
          <li>
            5) Korisnik ima pravo na 5 pomoći koji mu pomažu u kvizu tako što
            eliminiraju jedan netočan odgovor
          </li>
          <li>
            6) Oznaka pomoći :{" "}
            <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
          </li>
          <li>7) U svakom pitanju je točan samo jedan odgovor</li>
          <li>
            8) U odgovorima na nadopunjavanje koristiti jednostruke navodnike
          </li>
          <li>9) Na kraju kviza, moći ćete vidjeti svoj rezultat</li>
        </ul>

        <div>
          <span>
            <Link className="tohomefrominstr" to="/home">
              Natrag
            </Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default QuizInstructions;
