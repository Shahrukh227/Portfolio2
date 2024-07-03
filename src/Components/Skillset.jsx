import React from 'react'
import reacticon from "../../public/reacticon.png"
import css from "../Style/Skillset.module.css"
import js from "../../public/Js.png"
import API from "../../public/api1.jpg"
import redux from "../../public/redux.png"
import tail from "../../public/tail.png"
import router from "../../public/router.png"
import html from "../../public/html.webp"
import css1 from "../../public/css.png"

function Skillset() {
  return (
    <section class={css.skillset}>
       <span class={`${css.skill} fs-1 fw-bolder`}>Skills :</span>
<div class={css.set}>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
     <img src={reacticon} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>React Js</h6>
        </div>
      </div>

      <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={redux} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>Redux</h6>
        </div>
      </div>
      </div>

      <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={router} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>React Router</h6>
        </div>
      </div>
      </div>

      
    </a>


    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      
      <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={API} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>API Integration</h6>
        </div>
      </div>
      </div>

      <img src={js} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>Javascript</h6>
        </div>
      </div>

      <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={tail} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>Tailwind CSS</h6>
        </div>
      </div>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={html} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>HTML</h6>
        </div>
      </div>
      </div>

      <div class="d-flex gap-2 w-100 justify-content-between">
        <img src={css1} class={css.react} />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class={css.text}>CSS</h6>
        </div>
      </div>
      </div>
    </a>
  </div>
</div>
    </section>
    
  )
}

export default Skillset
