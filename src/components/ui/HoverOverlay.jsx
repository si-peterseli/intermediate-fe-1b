import { Fragment } from 'react';

import { secondsToTime } from '../../utils/secondsToTime';
import { getImage } from '../../utils/getImage';

function GenreList({ genres }) {
  return (
    <div className='mt-[17px] flex items-center justify-between'>
      {genres.map((genre, i) => (
        <Fragment key={genre}>
          <span className='text-body-large-semibold text-text-light-secondary'>{genre}</span>
          {i < genres.length-1 && <span className='text-body-large-semibold text-text-light-secondary'>•</span>}
        </Fragment>
      ))}
    </div>
  );
}

export default function HoverOverlay({ filmData, mode }) {
  const progressPercent = (filmData.progress.progressSeconds / filmData.durationSeconds) * 100;

  return (
    <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[408px] overflow-hidden rounded-lg z-99 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all ease-in-out transition-300 shadow-[0_20px_40px_rgba(255,255,255,.04)] z-100 max-sm:hidden'>
      <img src={getImage(filmData.cardImage) || getImage(filmData.posterImage)} alt=""
        className='w-full aspect-video object-cover brightness-90'
      />
      <div className='p-[30px] bg-page-header-background'>
        <div className='flex items-center gap-4'>
          <button className='w-[55px] aspect-square rounded-full grid place-items-center bg-white cursor-pointer'>
            <i className="ri-play-fill text-[36px] leading-0 translate-x-0.5 text-page-header-background"></i>
          </button>
          <button className='w-[55px] aspect-square rounded-full grid place-items-center border border-outline-border cursor-pointer'>
            <i className="ri-check-line text-[30px] leading-0 text-text-light-primary"></i>
          </button>
          <button className='ml-auto w-[55px] aspect-square rounded-full grid place-items-center border border-outline-border cursor-pointer'>
            <i className="ri-arrow-down-s-line text-[30px] leading-0 text-white"></i>
          </button>
        </div>
        
        { mode === 'card' && 
          <div>
            <h5 className="mt-[17px] text-h5 text-white">"{filmData.progress.episode}"</h5>
            <div className='mt-[17px] flex items-center gap-4'>
              <div className="flex-1 h-[6px] bg-extra-background relative">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className={`h-full bg-primary`}></div>
              </div>
              <span className='text-body-large-medium text-text-light-secondary'>{secondsToTime(filmData.durationSeconds)}</span>
            </div>
          </div>
        }

        { mode === 'poster' &&
          <div className='mt-[17px] flex items-center gap-5'>
            <span className='py-1 px-3 rounded-full bg-info-background text-xl text-text-light-secondary'>{filmData.ageRating}</span>
            <span className='text-h5 text-white'>{secondsToTime(filmData.durationSeconds)}</span>
          </div>
        }

        <GenreList genres={filmData.genres} />
      </div>
    </div>
  );
}