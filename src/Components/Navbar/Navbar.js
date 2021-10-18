import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.logo}>
          <img src={"/images/Portfolio.png"} alt="Loading"/>
        </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <button type="button" className={style.startedbtn}>Get Started</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
