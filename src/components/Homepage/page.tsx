
import { getData } from "@/app/api/Homepage";
import Hero from "./Hero/page";
import Most from "./MostPopular/page";
import Inspiration from "./Inspiration/page";
import Series from "../series/Series";
import Box from "./Box/page";
import RenovationSection from "./Renovation/page";
import Opinion from "./Opinion/page";
import Featured from "./Featured/page";
import { useEffect, useState } from "react";


export default async function  HomeLayout() {



    const data = await getData();

    let prop = 1;
    const { acf } = data;

  return (
    <>
        <Hero data={acf.hero} />
        <Most data={acf.most} />
        <Series prop={prop} />
        <Inspiration data={acf.inspirations} />
      <Box data={acf.box} />
      <RenovationSection data={acf.image_with_text} />
      <Opinion data={acf.opinion} />
      <Featured data={acf.last_block_homepage} />
    </>
  );
};
