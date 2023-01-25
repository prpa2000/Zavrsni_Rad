import { useState, useRef, useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtNlVhYd7g5WoHEqzyKwGMOg1_F3cAVFM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtNlVhYd7g5WoHEqzyKwGMOg1_F3cAVFM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Email ili lozinka nisu točni!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div id="loginsignup">
      <section className="auth">
        <h1>{isLogin ? "Prijava" : "Registracija"}</h1>
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor="email">Vaš Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor="password">Vaša lozinka</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="actions">
            {!isLoading && (
              <button>{isLogin ? "Prijava" : "Napravite račun"}</button>
            )}
            {isLoading && <p>Učitavanje...</p>}
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin
                ? "Napravite novi račun"
                : "Prijava putem postojećeg računa"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
