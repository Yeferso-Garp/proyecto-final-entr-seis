import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const LoginPage = () => {

    const {register, reset, handleSubmit} = useForm();

    const { loginUser } = useAuth();

    const submit = data => {
        loginUser(data);
        reset({
            email: '',
            password: '',	
        })
    }

  return (
    <div className="login_counter">
      <img className="login_image" src="/images/img-login.png" alt="" />
      <article className="login_counter_article">
        <h2 className="login_title_2"> Log in </h2>
        <form className="login_form" onSubmit={handleSubmit(submit)}>
          <div className="login_form_email">
            <label htmlFor="email">Email</label>
            <input className="login_input" {...register('email')} type="email" id="email" placeholder="email"/>
          </div>
          <div className="login_form_password">
            <label htmlFor="password">Password</label>
            <input className="login_input"  {...register('password')} type="password" id="password" placeholder="password" />
          </div>
          <button className="login_btn">Submit</button>
        </form>
        <p className="login_parrafo">Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
      </article>
    </div>
  )
}

export default LoginPage
