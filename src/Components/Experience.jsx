import css from "../Style/Experience.module.css"
import react from "../../public/program1.jpg"
import react2 from "../../public/program2.png"


const Experience = () => {
  return (

    <section class={css.experience} id="experience">
    <span class={`${css.text} fs-1 fw-bolder`}>Experience :</span>
   <div class={`row row-cols-1 row-cols-sm-2 g-2`}>
    <div class={css.box1}>
      <div class="card shadow-sm">
        <img src={react}/>
        <div class="card-body">
         <h2>Job Title</h2>
         <p>React Js Developer</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>


   <div class={css.box1}>
      <div class="card shadow-sm">
        <img src={react2}/>
        <div class="card-body">
         <h2>Job Title</h2>
         <p>Front End Developer</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
   
    </section>
   
  )
}

export default Experience
