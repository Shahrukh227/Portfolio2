import React from 'react'
import css from "../Style/Navbar.module.css"
import { FiMessageSquare } from "react-icons/fi";
import srk from "../../public/srk1.jpg"

const Navbar = () => {
  return (
    <div class={`${css.navbar} container`}>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={srk}alt="" />
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/home" class={css.bar}>Home</a></li>
        <li><a href="/About" class={css.bar}>About</a></li>
        <li><a href="/Experience" class={css.bar}>Experience</a></li>
        <li><a href="/Education" class={css.bar}>Education</a></li>
      </ul>

      <div class="col-md-3 text-end">
      <button type="button" class={css.button}><FiMessageSquare /> Contact me</button>
       
      </div>
    </header>
  </div>
  )
}

export default Navbar
