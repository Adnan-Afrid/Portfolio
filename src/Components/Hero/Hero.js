import style from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={style.hero_wrap}>
      <img
        src={"/images/topbar.png"}
        className={style.topbar_image}
        alt="Loading"
      />
      <div className={style.group}>
        <div className={style.circle}>
          <img src={"/images/circle.png"} alt="Loading" />
          <div className={style.hero_content}>
            <p>HELLO, I am</p>
            <h1>
              Mark <br />
              Reccardo
            </h1>
            <h2>
              A young <strong>UI/UX</strong> desginer with crazy for mobile and
              web design.
            </h2>
            <h3>FIND ME on</h3>
            <div className={style.social_icons}>
            <span><i className="fab fa-behance"></i></span>
            <span><i className="fab fa-dribbble"></i></span>
            <span><i className="fab fa-instagram"></i></span>
            <span><i className="fab fa-linkedin-in"></i></span>
            <span><i className="fab fa-pinterest-p"></i></span>
            </div>
            <div className={style.button_wrap}>
            <button type="button">Hire Me</button>
            <button type="button">Portfolio</button>
            </div>
          </div>
        </div>
        <div className={style.man}>
          <img src={"/images/man.png"} alt="Loading" />
        </div>
      </div>
      <div className={style.sidebar}>
        <img src={"/images/sidebar.png"} alt="Loading" />
      </div>
    </div>
  );
};

export default Hero;
