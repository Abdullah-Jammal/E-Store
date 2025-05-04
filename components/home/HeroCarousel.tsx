import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import db from "@/utils/db";

const HeroCarousel = async () => {
  const hero = await db.hero.findMany();
  return (
    <div className="lg:block hidden">
      <Carousel>
        <CarouselContent>
          {hero.map((info) => (
            <CarouselItem key={info.id}>
              <div className="p-2 border-gray-500 rounded-lg">
                <Image
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-[400px] rounded-md"
                  src={info.image}
                  alt="Hero Image"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
