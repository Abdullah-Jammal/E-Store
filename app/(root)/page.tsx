import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
import {LoaderContainer} from "@/components/global/LoaderContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoaderContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
