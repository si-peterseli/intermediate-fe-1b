import AuthForm from "../features/AuthForm";

import loginBg from '../assets/images/bg/login.jpg';

export default function LoginPage() {
  return (
    <div 
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${loginBg})`}}
      className={`w-full min-h-[100vh] grid place-items-center bg-center bg-cover`}
    >
      <AuthForm mode='login' />
    </div>
  )
}