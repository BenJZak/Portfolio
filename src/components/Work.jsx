import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2019,
        title: "Freddys Frozen Custard & SteakBurgers",
        duration: "2 Years",
        details:
            "I was a trainer, which essentially means that I was in charge of introducing new hires to the job they were to perform. I was initially hired as a line cook, though I quickly moved up the ranks to a position of higher responsibility and pay.",
    },
    {
        year: 2022,
        title: "Tutor",
        duration: "1 Year",
        details:
            "Provided unpaid acadcemic assistance for classmates and relatives in subjects like math, science, and computer science.",
    },
];
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="pb-10 text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
