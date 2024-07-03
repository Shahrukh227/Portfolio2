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
        <li><a href="#home" class={css.bar}>Home</a></li>
        <li><a href="#about" class={css.bar}>About</a></li>
        <li><a href="#experience" class={css.bar}>Experience</a></li>
        <li><a href="#skills" class={css.bar}>Skills</a></li>
        <li><a href="#education" class={css.bar}>Education</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <a href='#contact'>
        <button type="button" class={css.button}><FiMessageSquare /> Contact me</button>
        </a>
      
       
      </div>
    </header>
  </div>
  )
}

export default Navbar
