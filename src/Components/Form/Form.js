import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.form_wrap}>
      <h2>Let's Make Something <br/>Great Together</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt <br/> ut labore et t enim ad minim veniam, quis nostrud
        exercitation.
      </p>
      <div className={style.form_contents}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </div>
      <div className={style.form_contents}>
        <input type="number" placeholder="#Phone" />
        <select>
          <option value="">Budget</option>
          <option value="Hey There">Budget</option>
        </select>
      </div>
      <textarea type="text" placeholder="Message" />
      <div className={style.hirebtn}>
        <button>Hire Me</button>
      </div>
    </div>
  );
};

export default Form;
