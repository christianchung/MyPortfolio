"use client";
import React, {useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "WebDev",
    id: "WebDev",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue.js</li>
        <li>PostgreSQL</li>
        <li>Node.js</li>
        <li>and More!</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
      <ul className='list-disc pl-2'>
        <li>B.S. in Computer Science, University of Arkansas</li>
      </ul>
      </div>
    )
  },
  {
    title: "AI/Data",
    id: "AI/Data",
    content: (
      <ul className='list-disc pl-2'>
        <li>Python</li>
        <li>SQL/NoSQL</li>
        <li>Apahce Spark</li>
        <li>Java</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() =>{
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image className="rounded-lg" alt="about me" src="/images/selfie_zoome.jpg" width={500} height={500} />
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>
            Hi, I'm Christian. I recently graduated with a degree in Computer Science.
            I hope to hone my skills further and expand my career in this exciting and ever-changing field!
            </p>
            <div className='flex flex-row mt-6'>
              <TabButton selectTab={() => handleTabChange("education")} active ={tab === "education"}
              > Education </TabButton>
              <TabButton selectTab={() => handleTabChange("WebDev")} active ={tab === "WebDev"}
              > WebDev </TabButton>
              <TabButton selectTab={() => handleTabChange("AI/Data")} active ={tab === "AI/Data"}
              > AI/Data </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection