import css from "../Style/Contact.module.css"


const Contact = () => {
  return (
    <section class={css.contact} id="contact">
  <form class={css.form}>
    <h1 class={css.head}>ContactMe</h1>
<p>Please fill out the form below to discuss any work opportunities</p>
    <div class={css.input}>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
    </div>
    <div class={css.input}>
      <input type="text" class="form-control" id="floatingPassword" placeholder="Your Name"/>
    </div>

    <div class={css.input}>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
</div>
    <button class={css.button} type="submit">Sign in</button>
  </form>
</section>
  )
}

export default Contact
