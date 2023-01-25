import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberofQuestions: 0,
      numberofAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    this.setState({
      score: (state.score / state.numberofQuestions) * 100,
      numberofQuestions: state.numberofQuestions,
      numberofAnsweredQuestions: state.numberofAnsweredQuestions,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      usedHints: state.hintsUsed,
    });
  }
  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;
    if (userScore <= 30) {
      remark = "Trebate još vježbanja";
    } else if (userScore > 30 && userScore <= 50) {
      remark = "Više sreće drugi put";
    } else if (userScore > 50 && userScore <= 70) {
      remark = "Možes ti još bolje!";
    } else if (userScore > 70 && userScore <= 89) {
      remark = "Vrlo dobro!";
    } else {
      remark = "Genijalac!!!";
    }
    if (state !== undefined) {
      stats = (
        <Fragment>
          <h1 className="h1summary">Kviz je gotov!</h1>
          <h4 className="h4summary">{remark}</h4>
          <h2 className="h2summary">
            Vaš rezultat: {this.state.score.toFixed(0)}&#37;
          </h2>
          <div className="container">
            <span className="stat left">Ukupan broj pitanja: </span>
            <span className="statt right">{this.state.numberofQuestions}</span>
            <br></br>

            <span className="stat left">Broj odgovorenih: </span>
            <span className="statt right">
              {this.state.numberofAnsweredQuestions}
            </span>
            <br></br>

            <span className="stat left">Točni odgovori: </span>
            <span className="statt right">{this.state.correctAnswers}</span>
            <br></br>

            <span className="stat left">Pogrešni odgovori: </span>
            <span className="statt right">{this.state.wrongAnswers}</span>
            <br></br>

            <span className="stat left">Korištenje pomoći: </span>
            <span className="statt right">{this.state.usedHints}</span>
            <br></br>
          </div>
          <div className="sectionsummary">
            <ul>
              <li>
                <Link className="lisummary" to="/home">
                  Početna stranica
                </Link>
              </li>
            </ul>
          </div>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">Nema sažetka</h1>

          <ul>
            <li>
              <Link to="/home">Početna stranica</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Sažetak</title>
        </Helmet>
        {stats}
      </Fragment>
    );
  }
}

export default QuizSummary;
