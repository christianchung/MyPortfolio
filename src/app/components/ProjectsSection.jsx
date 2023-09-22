import React from 'react'
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "AI Gait Identification",
        description: "AI application that can recognize an individual in a video " + 
                     "based on their walking gait. Developed with Python and repositories" +
                     " Detectron2 and OpenGait. Mobile Application developed with React Native and Flask",
        image: "/images/projects/opengait.gif",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Selenium Auto Apply Bot",
        description: "Bot that can automatically apply to jobs via Linkedin Easy Apply. Developed with Python and Selenium Chrome Web Driver",
        image: "/images/projects/linkedbot.gif",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Tutor Scheduling App",
        description: "Scheduling WebApp that matched availability of students with those of tutors for the UARK area. Developed with HTML/CSS and C++. Won UARK Hackathon 2nd place",
        image: "/images/projects/tutor.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Computer Vision Basketball Tracker",
        description: "Computer Vision application that tracks players and scoring. Developed with Python and repositories YOLOv5 and StrongSort (Unfinished)",
        image: "/images/projects/basketballtracker.gif",
        tag: ["All", "Web"],
    },
]

const ProjectsSection = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
        <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            />
            ))}
        </div>
    </div>
  )
}

export default ProjectsSection