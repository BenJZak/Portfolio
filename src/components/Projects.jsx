import React from "react";
import ProjectItem from "./ProjectItem";
import ImgOne from "../assets/websiteImage.jpg";
import ImgTwo from "../assets/GameDevProjBackground.jpg"



function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Technical Projects</h1>
      <p className="text-center py-8">
        A collection of some of the projects I am proud of. I hope to start on more complex and innovative projects soon. I am currently involved in a competitive Hackathon and applying for internship positions (not displayed but will be soon).
      </p>
      <div className="grid sm:grid-cols-1 gap-12">
        <ProjectItem img={ImgTwo} title='Game Development' />
        <ProjectItem img={ImgOne} title='First Website' />
      </div>
      <img class="object-scale-down w-35 h-35" src="https://png.pngtree.com/png-clipart/20221223/original/pngtree-flat-under-construction-sign-background-design-png-image_8801136.png" alt="Italian Trulli"></img>
    </div>
  );
}

export default Projects;
