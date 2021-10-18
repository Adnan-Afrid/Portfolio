import style from "./Client.module.css";

const Client = () => {
  return (
    <div className={style.client_wrap}>
      <h2>What My Client Says</h2>
      <p className={style.para}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et t enim ad minim
        <br /> veniam, quis nostrud exercitation.
      </p>
      <div className={style.client_contents}>
        <div className={style.avatar_wrapper}>
          <div className={style.image_one}>
            <img src={"/images/3@2x.png"} alt="Loading" />
          </div>

          <div className={style.image_two}>
            <img src={"/images/22@2x.png"} alt="Loading" />
          </div>

          <div className={style.image_three}>
            <img src={"/images/1@2x.png"} alt="Loading" />
          </div>

          <div className={style.image_four}>
            <img src={"/images/1@2x.png"} alt="Loading" />
          </div>

          <div className={style.image_five}>
            <img src={"/images/22@2x.png"} alt="Loading" />
          </div>

          <div className={style.image_six}>
            <img src={"/images/3@2x.png"} alt="Loading" />
          </div>
        </div>

        <div className={style.client_avatar}>
          <img src={"/images/map.png"} alt="Loading" />
        </div>
        <div className={style.client_details}>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt is the most explicabo.
          </p>

          <h5>- Sara Smith</h5>

          <h6>CEO ABC Company</h6>
        </div>
      </div>
    </div>
  );
};

export default Client;
