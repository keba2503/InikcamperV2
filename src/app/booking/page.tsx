"use client";

import React, {FC} from "react";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import BookingHead from "@/app/bookinHead/page";

export interface BookingPageProps {

}

const Booking: FC<BookingPageProps> = () => {

  return (
      <main className="nc-PageHome relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          {/* SECTION HERO */}
          <div className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative`}>
            <BookingHead/>
          </div>
          <SectionGridFeaturePlaces cardType="card2"/>
        </div>
      </main>
  );
};

export default Booking;
