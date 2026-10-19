import Button from '../ui/Button';
import heroBg from '../../assets/images/bg/hero.png';

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `linear-gradient(to top, rgba(24, 26, 28, 1), rgba(16, 18, 19, 0.86), rgba(0, 0, 0, 0)), url(${heroBg})` }}
      className="w-full h-[587px] max-sm:h-[225px] p-20 max-sm:py-10 max-sm:px-5 flex items-end bg-cover bg-center"
    >
      <div className='flex flex-col'>
        <div className='w-1/2 max-sm:w-full'>
          <h1 className='text-h1 max-sm:text-h4 text-white'>Duty After School</h1>
          <p className='mt-5 max-sm:mt-3 text-body-large-medium max-sm:text-caption-1-medium max-sm:line-clamp-2 text-white'>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
        </div>
        <div className='mt-10 max-sm:mt-3 flex items-center justify-between'>
          <div className="flex items-center gap-[10px]">
            <Button variant="shadow">Mulai</Button>
            <Button
              color="secondary"
              leftIcon={<i className='ri-information-line text-2xl max-sm:text-xs text-white absolute left-[26px] max-sm:left-[12px]'></i>}
              className="gap-2 pl-15 max-sm:pl-8 text-body-medium-medium relative"
            >Selengkapnya</Button>
            <div className='p-2.5 max-sm:p-1 border border-text-light-secondary rounded-full text-body-large-regular max-sm:text-caption-1-bold text-text-light-secondary'>18+</div>
          </div>

          <button className='w-11 max-sm:w-6 aspect-square grid place-items-center border border-text-light-secondary rounded-full cursor-pointer'>
            <i className="ri-volume-mute-line text-2xl max-sm:text-xs text-text-light-secondary"></i>
          </button>
        </div>
      </div>
    </section>
  );
}