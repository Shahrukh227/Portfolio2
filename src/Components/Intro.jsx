import React from 'react'
import css from "../Style/Intro.module.css"
import { IoBag } from "react-icons/io5";
import front from "../../public/front.jpg"

function Intro() {
  return (
    <>
    <section class={css.into}>
    <div class={css.intro}>
    <h4>Hello,</h4>
    <h1>I'm <span class={css.name}>Shahrukh Khan</span></h1>
    <p>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly Website</p>
    <button class={css.button} type="button"><span class={css.bag}><IoBag /></span>Hire me</button>
  </div>
  <div class={css.imgContainer}>
<img src={front} class={css.img}/>
  </div>
    </section>
   
    </>
    
  )
}

export default Intro
