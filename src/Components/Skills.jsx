import css from "../Style/Skills.module.css"
import Lottie from "lottie-react"
import anime from "../../public/sp5JPikmlA.json"

function Skills() {
  return (
    <div class={css.skills}>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div style={{width : "450px"}}>

        <Lottie animationData={anime} class={css.anime}/>
      {/* <img src={anime} class="img-thumbnail" alt="..."/> */}
      </div>
      <div class={`${css.about} col-lg-6`}>
        <h1 class={css.head}>About me</h1>
        <h3>Front End Developer</h3>
        <p class="lead">Hii i'm Shahrukh Khan. here's little bit about me. I started my Software Engineering journey in may 2018 as an IT Recruiter,later in 2022 i shifted my carrier to React Js developer. And the journey till now has been really awesome. I've worked with both startup and large cooperation and Along the journey i worked with React JS, Bootstrap,HTML5,CSS3,Javascript, Tailwind Css, Redux for state management, React Router, Api-integration. I compleated by Bachelor of Technology (B.Tech) in the year 2015.</p>
      </div>
    </div>
  </div>
      </div>
    
  )
}

export default Skills
