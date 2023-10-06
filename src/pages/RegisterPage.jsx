import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import './styles/styleRegister.css'

const RegisterPage = () => {

    const {reset, handleSubmit, register} = useForm()
    const { registerUser } = useAuth()

    const submit = data => {
        registerUser(data);
        reset({
            name: '',
            email: '',
            posswords: '',
        });
    }

  return (
    <div className="register_countainer">
      <img className="register_image" src="/images/img-register.png" alt="" />
      <article className="register_countainer_form">
        <form className="register_form" onSubmit={handleSubmit(submit)}>
          <div className="register_email">
            <label htmlFor="email">Email</label>
            <input className="register_input" {...register('email')} type="email" id="email" placeholder="email"/>
          </div>
          <div className="register_name">
            <label htmlFor="name">name</label>
            <input className="register_input" {...register('name')} type="text" id="name" placeholder="first name"/>
          </div>
          <div className="register_password">
            <label htmlFor="password">Password</label>
            <input className="register_input" {...register('password')} type="password" id="password" placeholder="password..."/>
          </div>
          <button className="register_btn"> Submit</button>
        </form>
        <p className="register_parrafo">Are you register? <Link to='/auth/login'> Go to login </Link></p>
      </article>
    </div>
  )
}

export default RegisterPage
