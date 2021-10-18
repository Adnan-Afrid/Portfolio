import style from "./Portfolio.module.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const arr = [
    {
      id: 0,
      image: "/images/abad.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
    {
      id: 1,
      image: "/images/ban.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
    {
      id: 2,
      image: "/images/apri.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
    {
      id: 3,
      image: "/images/ban.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
    {
      id: 4,
      image: "/images/nalie.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
    {
      id: 5,
      image: "/images/v1.png",
      title: "Sed ut ",
      title2: "Perspiciatis",
      content: "Branding, Web Design",
    },
  ];
  return (
    <div className={style.portfolio_wrap}>
      <div className={style.head_wrap}>
        <div>
          <span>Portfolio</span>
        </div>
        <div className={style.arrow_button}>
          <button>a</button>
          <button>b</button>
        </div>
      </div>
      <div>
        <ul>
          <Link to="/">
            <li>All</li>
          </Link>
          <Link to="/">
            <li>Logo</li>
          </Link>
          <Link to="/">
            <li>Websites</li>
          </Link>
          <Link to="/">
            <li>Mobile Apps</li>
          </Link>
        </ul>
      </div>

      <div className={style.wrapper}>
        {arr.map((item, index) => {
          return (
            <div className={style.portfolio_images} key={index}>
              <img src={item.image} alt="Loading" />
              <div className={style.overlay}>
                <div className={style.overlay_contents}>
                  <h2>{item.title}</h2>
                  <h3>{item.title2}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
