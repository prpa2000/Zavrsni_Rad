import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Low from "./components/quiz/Low";
import QuizInstructions from "./components/quiz/QuizInstructions";
import AuthForm from "./components/AuthForm";
import QuizSummary from "./components/quiz/QuizSummary";
import DifficultyLevels from "./components/DifficultyLevels";
import Med from "./components/quiz/Med";
import High from "./components/quiz/High";
function App() {
  return (
    <Router>
      <Route path="/" exact component={AuthForm}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/home/play" exact component={DifficultyLevels}></Route>
      <Route
        path="/home/instructions"
        exact
        component={QuizInstructions}
      ></Route>
      <Route path="/home/play/low" exact component={Low}></Route>
      <Route path="/home/play/med" exact component={Med}></Route>
      <Route path="/home/play/high" exact component={High}></Route>
      <Route path="/home/play/summary" exact component={QuizSummary}></Route>
    </Router>
  );
}

export default App;
