import AuthForm from "../features/AuthForm";

import registerBg from '../assets/images/bg/register.jpg';

export default function RegisterPage() {
  return (
    <div 
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${registerBg})`}}
      className={`w-full min-h-[100vh] grid place-items-center bg-center bg-cover`}
    >
      <AuthForm mode='register' />
    </div>
  )
}