import React, { JSX } from 'react';
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SiCplusplus, SiCreatereactapp, SiMongodb, SiOpengl, SiReactrouter, SiTypescript, SiVite } from 'react-icons/si';
import { GoLinkExternal } from "react-icons/go";

import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

import SplitText from './React-Bits/SplitText';

// added this interface so that now instead of each tag just being an SVG we can now make each other have it's own name,
// and then we can display each tag with it's own name this way.
interface Tag {
    icon: JSX.Element;
    name: string;
}

import { motion } from "motion/react"

interface ProjectCardProps {

    title: string;
    mediaType?: 'image' | 'youtube'; // either image, or youtube link.
    youtubeId?: string; // only required if mediaType is 'youtube'
    src: string;
    tags: Tag[];
    description: string;
    link: string;
    github: string;
}

const Project_card: React.FC<ProjectCardProps> = ({ mediaType = 'image', youtubeId, title, src, tags, description, link, github }) => {

    const renderMedia = () => {
        switch (mediaType) {
            case 'youtube':
                return (
                    <iframe
                        className="project-video"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={title}
                        frameBorder="0"
                        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                );
            case 'image':
            default:
                return typeof src === 'string' ? (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={title} loading="lazy" />
                    </a>
                ) : (
                    src
                );
        }
    };
    return (
        <motion.div
            className="projects"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="project-card">
                <div className={`project-image ${mediaType}`}>
                    {renderMedia()}
                </div>

                <div className="project-information">
                    <span className="project-title">
                        <div className="gradient">{title}</div>
                    </span>

                    {/* mapping the tags, and the tag tooltips that include each tag's name */}

                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="tag"
                                data-tooltip-id={`tags-tooltip-${index}`}
                                data-tooltip-content={tag.name}
                            >
                                {tag.icon}
                            </span>
                        ))}
                        {tags.map((_tag, index) => (
                            <ReactTooltip
                                key={index}
                                id={`tags-tooltip-${index}`}
                                place="bottom"
                                style={{
                                    backgroundColor: '#0f152f',
                                    color: '#d06cff',
                                    fontFamily: 'figtree, sans-serif'
                                }}
                            />
                        ))}
                    </div>

                    <div className="project-text">{description}</div>

                    <div className="project-buttons">
                        <div className="project-button">
                            <a className="live-button" href={link} target="_blank" rel="noopener noreferrer">
                                <GoLinkExternal style={{ fontSize: "20px" }} />
                                <span className="button-text">Live Project</span>
                            </a>
                        </div>

                        <div className="project-button">
                            <a className="github-button" href={github} target="_blank" rel="noopener noreferrer">
                                <LuGithub style={{ fontSize: "23px" }} />
                                <span className="button-text">Github</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

function Projects() {
    return (
        <>
            <div className="projects" id="projects">

                <span className="section-heading">

                    <SplitText
                        text="Featured Projects"
                        className="gradient"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        textAlign="center"
                    />
                </span>
                <span className="section-sub-heading">
                    My best and most impressive projects that i've been working on for the last year.
                    <br></br>
                    You can check them out via the links provided below.
                </span>

                <div className="project-container">

                    <Project_card
                        title="Orbit - Productivity Tracker"
                        description="A Notes/productivity application, a blend of Trello and Google Keep. 
                        Features include the abillity to add/delete boards, and drag & drop to re-order tasks. Users can switch between two layouts.
                        Uses React-router for multi-board support, localStorage for persistance & react-toast for user feedback on operations."
                        src="Orbit_Kanban_App.png"
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <SiTypescript />, name: "TypeScript" },
                            { icon: <SiReactrouter />, name: "React-Router" },
                            { icon: <SiVite />, name: "Vite" },

                        ]}
                        link="https://trello-style-kanban-board-applicati-orcin.vercel.app"
                        github="https://github.com/DanielSteele1/Trello-Clone"
                    >

                    </Project_card>

                    <Project_card
                        title="FocusDev"
                        description="FocusDev is a utility app designed for developers.
                            It features a Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats, just to name a few.
                            Coded in JavaScript, React, Node.js & MongoDB. It also uses Bcrypt to securely store user data."
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <FaJs />, name: "JavaScript" },
                            { icon: <FaNodeJs />, name: "NodeJs" },
                            { icon: <SiMongodb />, name: "MongoDB" },
                            { icon: <SiCreatereactapp />, name: "Create-React-App" }

                        ]}
                        src="FocusDev.png"
                        link="https://focusdev.vercel.app"
                        github="https://github.com/DanielSteele1/FocusDev"
                    >

                    </Project_card>

                    <Project_card
                        title="Portfolio V1"
                        description="The first iteration of my portfolio website. (this website). 
                        It uses mainly Html/CSS & JS with some basic React work. 
                        In the first month alone it was visited by over 1k people,
                        and I've hosted it on Vercel in case you'd like to take a look."
                        src="PortfolioV1.png"
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <FaJs />, name: "JavaScript" },
                            { icon: <SiCreatereactapp />, name: "Create-React-App" },

                        ]}
                        link="https://danielsteeleportfoliov1.vercel.app"
                        github="https://github.com/DanielSteele1/DanielSteele1.github.io"

                    >

                    </Project_card>

                    <Project_card title="SkyCompass"
                        description=" Skycompass is a web-based application that allows users to monitor up-to-date weather patterns across the globe. 
                        It utilises multiple APIs to create a dashboard displaying weather maps, as well a forecast page that predicts weather for up to 7 days. 
                        Using MongoDB & Bcrypt hashing for security, users can favourite locations for a more personalised experience."
                        src="SkyCompass.png"
                        tags={[

                            { icon: <FaReact />, name: "React" },
                            { icon: <FaJs />, name: "JavaScript" },
                            { icon: <FaNodeJs />, name: "NodeJs" },
                            { icon: <SiMongodb />, name: "MongoDB" },
                            { icon: <SiCreatereactapp />, name: "Create-React-App" },

                        ]}
                        link="https://github.com/DanielSteele1/SkyCompass"
                        github="https://github.com/DanielSteele1/SkyCompass"

                    >

                    </Project_card>

                    <Project_card title="EarthSim"
                        description="EarthSim is a project that I built in C++, using OpenGL and various libraries to create a 3D environment, with the goal of simulating our local system of planets, exposing me to core game development principles and GLSL. I have a web-based version planned."
                        src="EarthSim.png"
                        tags={[
                            { icon: <SiCplusplus />, name: "C++" },
                            { icon: <SiOpengl />, name: "OpenGL" }
                        ]}
                        link="https://github.com/DanielSteele1/EarthSim"
                        github="https://github.com/DanielSteele1/EarthSim"

                    >

                    </Project_card>

                </div>
            </div >
        </>
    )
}

export default Projects;