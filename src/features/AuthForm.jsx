import { NavLink } from 'react-router';

import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import logo from '../assets/images/logo.png';
import googleLogo from '../assets/icons/google-icon.png';

export default function AuthForm({ mode }) {
  const AUTH_CONTENT = {
    login: {
      title: 'Masuk',
      subtitle: 'Selamat datang kembali!',
      buttonText: 'Masuk',
    }, register: {
      title: 'Daftar',
      subtitle: 'Selamat datang!',
      buttonText: 'Daftar'
    }
  };

  return (
    <form className="p-10 max-sm:p-6 rounded-2xl w-fit max-sm:w-[90%] bg-[#181A1CD6] flex flex-col items-center">
      <img
        src={logo}
        alt="Chill logo"
        className="w-[163px] max-sm:w-[94px]"
      />
      <div className='mt-[37px] max-sm:mt-5 text-center'>
        <h1 className='text-h3 max-sm:text-body-large-bold text-white'>{AUTH_CONTENT[mode].title}</h1>
        <p className='text-body-medium-regular max-sm:text-caption-2-regular mt-2 max-sm:mt-[4.62px] text-white'>{AUTH_CONTENT[mode].subtitle}</p>
      </div>

      <FormField
        label="Username"
        id="username"
        type="text"
        placeholder="Masukkan username"
        className='mt-[37px] max-sm:mt-5'
      />
      <FormField
        label="Kata Sandi"
        id="password"
        type="password"
        passwordToggle
        placeholder="Masukkan kata sandi"
        className='mt-[37px] max-sm:mt-5'
      />
      {mode === 'register' && <FormField
        label="Konfirmasi Kata Sandi"
        id="confirm-password"
        type="password"
        passwordToggle
        placeholder="Masukkan kata sandi"
        className='mt-[37px] max-sm:mt-5'
      />}

      <div className="flex justify-between items-center w-full mt-[12px] max-sm:mt-[7px] text-body-medium-regular max-sm:text-caption-2-regular text-text-light-secondary">
        <span>{mode === 'login' ? 'Belum' : 'Sudah'} punya akun? <NavLink
          to={mode === 'login' ? '/register' : '/login'}
          className='text-white'
        >{mode === 'login' ? 'Daftar' : 'Masuk'}</NavLink></span>
        {mode === 'register' && <NavLink to="#" className='text-white'>Lupa kata sandi?</NavLink>}
      </div>

      <div className="flex flex-col gap-[8px] max-sm:gap-1 items-center w-full mt-[37px] max-sm:mt-5">
        <Button
          className="w-full border-outline-border bg-extra-background text-body-medium-semibold max-sm:text-caption-2-semibold"
        >{AUTH_CONTENT[mode].buttonText}</Button>
        <span className='text-body-small-medium max-sm:text-caption-2-medium text-text-light-disabled'>Atau</span>
        <Button
          leftIcon={<img
            src={googleLogo}
            alt="google logo"
            className='w-4.5 max-sm:w-2.5 aspect-square'
          />}
          className='w-full border-outline-border bg-transparent text-body-medium-semibold max-sm:text-caption-2-semibold'
        >Masuk dengan Google</Button>
      </div>
    </form>
  );
}