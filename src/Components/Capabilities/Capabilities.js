import React from "react";
import style from "./Capabilities.module.css";
let arr = [
  {
    id: 0,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
  {
    id: 1,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
  {
    id: 2,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
  {
    id: 3,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
  {
    id: 4,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
  {
    id: 5,
    image: "/images/gradSign.png",
    title: "Web Design",
    content: " Get awesome design services from inkyy.com",
  },
];
const Capabilities = () => {
  return (
    <div className={style.capab_wrap}>
      <div className={style.capab_contents}>
        <h2>My Capabilities</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et t enim ad minim<br/> veniam, quis
          nostrud exercitation.
        </p>
      </div>
      <div className={style.cards}>
        {arr.map((item, index) => {
          return (
            <div className={style.map_content} key={index}>
              <img src={item.image} alt="Loading" key={index}/>
              <h3>{item.title}</h3>
              <h4>{item.content}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Capabilities;
