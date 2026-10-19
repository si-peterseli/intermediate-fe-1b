import Card from "../ui/Card";
import Poster from "../ui/Poster";

export default function HeroSection({ title, mode, filmDatas }) {
  const gap = mode === 'card' ? 'gap-6' : 'gap-7'

  return (
    <div className="py-10 px-20 max-sm:p-5 max-sm:pr-0 flex flex-col gap-8 bg-page-header-background">
      <h3 className="text-h3 max-sm:text-h5 text-white">{title}</h3>

      <div className={`flex ${gap} max-sm:gap-4 relative max-sm:overflow-x-auto snap-x snap-mandatory scroll-smooth`}>
        <button className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-body-background border border-outline-border w-[44px] aspect-square rounded-full grid place-items-center cursor-pointer z-99 text-2xl text-white max-sm:hidden">
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-body-background border border-outline-border w-[44px] aspect-square rounded-full grid place-items-center cursor-pointer z-99 text-2xl text-white max-sm:hidden">
          <i className="ri-arrow-right-line"></i>
        </button>

        {
          mode === 'card' ? 
          filmDatas.map(data => <Card key={data.title} filmData={data} />) :
          filmDatas.map(data => <Poster key={data.title} filmData={data} />)
        }
      </div>
    </div>
  );
}