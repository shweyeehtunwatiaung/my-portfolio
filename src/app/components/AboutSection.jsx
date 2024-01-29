"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React / Next js</li>
        <li>Redux, React Query, SWR</li>
        <li>Node.js, Express</li>
        <li>Styled components, MUI, Ant designs, Tailwind UI , Radix UI</li>
        <li>MongoDB</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> National Management Degree College</li>
        <li> Bachelor of Technology (B-Tech)</li>
        <li> Bachelor of IT Engineering University - B.E ( IT )</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   )
  // }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend developer with a passion for creating interactive
            and responsive web applications.
          </p>
          <p className="text-base lg:text-lg">
            I have strong background in ReactJs, Redux, SSR, NextJs, NodeJs,
            AJAX, Redux, RESTful services/API , Tailwind, MUI, Styled-
            components, etc. Now I have experience in remote job.
          </p>
          <p className="text-base lg:text-lg">
            And then I am familiar with React Native and flutter.
          </p>
          <p className="text-base lg:text-lg">
            I am a quick learner and I am always looking to expand my knowledge
            and skill set.
          </p>
          <p className="text-base lg:text-lg">
            I am a team player and I am excited to work with others to create
            amazing applications.
          </p>
          <p className="text-base lg:text-lg">
            I can develop individual or with team Expertly applied API in coding
            development.
          </p>
          <p className="text-base lg:text-lg">
            Expert communication, interpersonal, and organizational skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
