import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <img src={"/images/Portfolio.png"} alt="Loading" />
      <div className={style.contents}>
        <span className={style.after_line}>About</span>
        <span className={style.after_line}>Portfolio</span>
        <span>Contact</span>
      </div>
      <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
      <div className={style.social_icons}>
        <span>
          <i className="fab fa-behance"></i>
        </span>
        <span>
          <i className="fab fa-dribbble"></i>
        </span>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
        <span>
          <i className="fab fa-linkedin-in"></i>
        </span>
        <span>
          <i className="fab fa-pinterest-p"></i>
        </span>
      </div>
      <hr/>
      <p className={style.copyright}>Copyright © 2019 Graphics Studio | All rights reserved</p>
    </footer>
  );
};

export default Footer;
