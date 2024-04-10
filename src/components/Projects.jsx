import React from "react";
import ProjectItem from "./ProjectItem";
import ImgOne from "../assets/websiteImage.jpg";
import ImgTwo from "../assets/GameDevProjBackground.jpg"
import ImgThree from "../assets/machineLearningProjBack.jpg"
import ImgFour from "../assets/hackathonBack.jpg"



function Projects() {
  return (
    <div id="projects" className="max-w-[1280px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Technical Projects</h1>
      <p className="text-center py-8 font-semibold">
        A collection of some of the projects I am involved in and am proud of...
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ImgTwo} title='Game Development' />
        <ProjectItem img={ImgOne} title='First Website' />
        <ProjectItem img={ImgThree} title='OpenCV ~ Machine Learning' />
        <ProjectItem img={ImgFour} title='Hackathons'/>
      </div>
    </div>
  );
}

export default Projects;
