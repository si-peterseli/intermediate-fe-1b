import { NavLink } from 'react-router';

import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="mt-20 max-sm:mt-7 border border-t-outline-border py-15 px-20 max-sm:p-5 flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start">
      <div className="flex flex-col gap-6.5 max-sm:gap-4">
        <img
          src={logo} alt="Chill Logo"
          className='w-[163px] max-sm:w-22'
        />
        <p className='text-base max-sm:text-caption-1-regular text-text-light-secondary'>&copy;2023 Chill All Rights Reserved.</p>
      </div>

      <div className='flex flex-col gap-[15px] max-sm:mt-10 max-sm:w-full'>
        <div className='flex justify-between items-center'>
          <h6 className="text-body-medium-bold max-sm:text-body-medium-medium text-white">Genre</h6>
          <button>
            <i className="ri-arrow-right-s-line hidden max-sm:block text-white text-2xl cursor-pointer"></i>
          </button>
        </div>

        <div className='flex gap-7 max-sm:hidden'>
          <div className='flex flex-col gap-2'>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Aksi</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Anak-anak</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Anime</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Britania</NavLink>
          </div>
          <div className='flex flex-col gap-2'>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Drama</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Fantasi Ilmiah &amp; Fantasi</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Kejahatan</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >KDrama</NavLink>
          </div>
          <div className='flex flex-col gap-2'>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Komedi</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Petualangan</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Perang</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Romantis</NavLink>
          </div>
          <div className='flex flex-col gap-2'>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Sains &amp; Alam</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Thriller</NavLink>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[15px] max-sm:mt-2 max-sm:w-full'>
        <div className='flex justify-between items-center'>
          <h6 className="text-body-medium-bold max-sm:text-body-medium-medium text-white">Bantuan</h6>
          <button>
            <i className="ri-arrow-right-s-line hidden max-sm:block text-white text-2xl cursor-pointer"></i>
          </button>
        </div>

        <div className='flex gap-7 max-sm:hidden'>
          <div className='flex flex-col gap-2'>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >FAQ</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Kontak Kami</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Privasi</NavLink>
            <NavLink
              to="#"
              className='text-body-medium-medium text-text-light-secondary'
            >Syarat &amp; Ketentuan</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}