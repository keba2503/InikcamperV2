import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageMapsProps {}

const PageMaps: FC<PageMapsProps> = ({}) => {
  return (
      <div className={`nc-PageMaps overflow-hidden`}>
        <div className="mb-24 lg:mb-32">
          <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Mapa Recomendado
          </h2>
          <div className="container max-w-7xl mx-auto">
            <div className="flex-shrink-0 grid grid-cols-1 gap-12">
              <div className="w-full h-0 aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1CCn7O6uUoBbWwVTTF5EJW7-MZxV49po&hl=es&ehbc=2E312F"
                    width="640"
                    height="480"
                    className="w-full h-full"
                    allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
};

export default PageMaps;
