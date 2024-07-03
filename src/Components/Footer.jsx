import css from "../Style/Footer.module.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div class={css.footer}>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <ul class={`${css.icons} nav col-md-4 justify-content-end list-unstyled d-flex`}>
        <li class={css.social}><a href="#"><FaLinkedin class={css.link} style={{color:" rgb(83, 9, 219)"}}/></a></li>
        <li class={css.social}><a class="text-body-secondary" href="#"><FaInstagram class={css.link} style={{color:" rgb(219, 35, 164)"}}/></a></li>
        <li class={css.social}><a class="text-body-secondary" href="#"><FaFacebookSquare  class={css.link} style={{color:" rgb(34, 5, 89)"}}/></a></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footer
