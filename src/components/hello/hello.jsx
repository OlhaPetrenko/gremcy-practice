import React from "react";
import s from "./hello.module.scss";

export default function ({ name }) {
  console.log(s);
  return (
    <div>
      <h2 className={s.title}>Hello, {name}</h2>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
        neque.
      </p>
    </div>
  );
}
