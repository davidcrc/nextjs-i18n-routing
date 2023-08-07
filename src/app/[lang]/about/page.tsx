import React from "react";
import { getDictionary } from "@/getDictionary";

type AboutProps = {
  params: { lang: string };
};

const About = async ({ params }: AboutProps) => {
  const lang = await getDictionary(params.lang);

  return <div className="text-white"> {lang.about.title}</div>;
};

export default About;
