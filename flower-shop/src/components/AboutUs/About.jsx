//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import "./About.css";

function About() {
  return (
    <div className="home">
      <div className="about">
        <h2> Flower Shop</h2>
        <div className="prompt">
          <p>
            Lorem ipsum dolor sit amet. Et nihil totam in officia eius et
            excepturi dolores. Aut necessitatibus dolorem est asperiores nisi
            non sint minima aut distinctio quis et quia delectus.
          </p>
          {/*<LinkedInIcon />
          <EmailIcon />
  <GithubIcon />*/}
        </div>
      </div>
      <div className="skills">
        <h1> Why choose us?</h1>
        <ol className="list">
          <li className="item">
            <h2>Fresh</h2>
            <span>
              Lorem ipsum dolor sit amet. Et nihil totam in officia eius et
              excepturi dolores. Aut necessitatibus dolorem est asperiores nisi
              non sint minima aut distinctio quis et quia delectus.
            </span>
          </li>
          <li className="item">
            <h2>Fast</h2>
            <span>
              Lorem ipsum dolor sit amet. Et nihil totam in officia eius et
              excepturi dolores. Aut necessitatibus dolorem est asperiores nisi
              non sint minima aut distinctio quis et quia delectus.
            </span>
          </li>
          <li className="item">
            <h2>Unique</h2>
            <span>
              Lorem ipsum dolor sit amet. Et nihil totam in officia eius et
              excepturi dolores. Aut necessitatibus dolorem est asperiores nisi
              non sint minima aut distinctio quis et quia delectus.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
