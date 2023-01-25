import { Link } from "react-router-dom";

const DifficultyLevels = () => {
  return (
    <div id="homelevels">
      <section className="sectionhome">
        <h1>Razina težine</h1>

        <div className="play-button-container">
          <ul>
            <li>
              <Link className="leveloption" to="/home/play/low">
                LAGANA
              </Link>
            </li>
          </ul>
        </div>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="leveloption" to="/home/play/med">
                NORMALNA
              </Link>
            </li>
          </ul>
        </div>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="leveloption" to="/home/play/high">
                TEŠKA
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DifficultyLevels;
