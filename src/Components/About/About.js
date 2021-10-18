import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about_wrap}>
      <div className={style.about_contents}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <button type="button" className={style.downloadbtn}>Download CV</button>
      </div>
      <div className={style.about_image}>
          <img src={"/images/about.png"} alt="Loading"/>
      </div>
    </div>
  );
};

export default About;
