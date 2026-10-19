import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            ...['large', 'medium', 'small'].flatMap(s => 
              ['bold', 'semibold', 'medium', 'regular'].map(w => `body-${s}-${w}`)
            ),
            ...['1', '2'].flatMap(n => 
              ['bold', 'semibold', 'medium', 'regular'].map(w => `caption-${n}-${w}`)
            )
          ]
        }
      ]
    }
  }
});

export const cn = (...inputs) => twMerge(clsx(inputs));