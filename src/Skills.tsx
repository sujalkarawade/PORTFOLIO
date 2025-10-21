import { useState } from 'react';
import { SiCplusplus, SiExpress, SiGraphql, SiJavascript, SiNodedotjs, SiVite } from "react-icons/si";
import { LuPalette } from "react-icons/lu";
import { FaReact, FaServer } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion, TbBrandGraphql, TbClick } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

import SplitText from './React-Bits/SplitText';

function Skills() {

    const [active, setActive] = useState(0);
    //diff pages
    const SkillSection = ["Frontend", "Backend", "Other"];
    const icons = [<LuPalette style={{ verticalAlign: 'center' }} />, <FaServer style={{ verticalAlign: 'center' }} />, < TbBrandGraphql style={{ verticalAlign: 'center' }} />]

    return (

        <motion.div
            className="skills"
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

            <div className="skills">
                <span className="section-heading">
                    <SplitText
                        text="My Skills"
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
                    A list of all the skills and tech I'm familliar with. I'm especially capable at front-end development and can create visually-stunning websites. </span>
                <div className="click-prompt-container">

                    <div className="click-prompt">
                        <TbClick style={{ fontSize: '23px', marginRight: '5px' }} />
                    </div>

                    <span> Click on the below tabs to view my skills </span>
                </div>

                {/* map the tabs to create a button for each item in array. 
            once pressed, setActive(index) updates the tab to the corrosponding section.*/}
                <div className="skills-tabs">
                    {SkillSection.map((section, index) => (

                        <button
                            key={section}
                            className={active === index ? "active" : ""}
                            onClick={() => setActive(index)}
                        >
                            {icons[index]}
                            <span className="skills-tabs-text">
                            {section}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="skills-container">

                    {active === 0 &&
                        <div className="Frontend-skills" id="fade-in">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaHtml5 className="skill-icon" />
                                    <SiCsswizardry className="skill-icon" />
                                    <span className="skills-title"> HTML/CSS </span>
                                </div>

                                <div className="skill-description">
                                    Markup and styling for web pages.
                                </div>
                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiJavascript className="skill-icon" />
                                    <span className="skills-title"> JavaScript </span>
                                </div>

                                <div className="skill-description">
                                    The core programming language of the web, used for building interactive websites and applications.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiTypescript className="skill-icon" />
                                    <span className="skills-title"> TypeScript </span>
                                </div>

                                <div className="skill-description">
                                    A superset of JavaScript that adds static typing to catch errors early and improve code quality.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaReact className="skill-icon" />
                                    <span className="skills-title"> React </span>
                                </div>

                                <div className="skill-description">
                                    A JavaScript library for building user interfaces with reusable components and a virtual DOM.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaFigma className="skill-icon" />
                                    <span className="skills-title"> Figma </span>

                                </div>

                                <div className="skill-description">
                                    A design tool used to create user interfaces, prototypes, and design systems in the browser.
                                </div>
                            </div>

                        </div>
                    }

                    {active === 1 &&
                        <div className="Backend-skills" id="fade-in">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiMongodb className="skill-icon" />
                                    <span className="skills-title"> MongoDB </span>
                                </div>

                                <div className="skill-description">
                                    A flexible NoSQL database that stores data in JSON-like documents.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiNodedotjs className="skill-icon" />
                                    <span className="skills-title"> NodeJs </span>
                                </div>

                                <div className="skill-description">
                                    A JavaScript runtime environment that allows running JS code on the server side.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">

                                    <SiExpress className="skill-icon" />
                                    <span className="skills-title"> Express </span>
                                </div>

                                <div className="skill-description">
                                    A minimal and flexible Node.js framework for building web servers and APIs.
                                </div>
                            </div>
                        </div>
                    }

                    {active === 2 &&
                        <div className="Other" id="fade-in">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiCplusplus className="skill-icon" />
                                    <span className="skills-title"> C++ </span>
                                </div>

                                <div className="skill-description">
                                    A high-performance programming language used for system/software development and game engines.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <TbApi className="skill-icon" />
                                    <span className="skills-title"> REST API </span>
                                </div>

                                <div className="skill-description">
                                    A common web API style that uses HTTP methods to interact with resources.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiGraphql className="skill-icon" />
                                    <span className="skills-title"> GraphQL </span>
                                </div>

                                <div className="skill-description">
                                    A query language for APIs that lets clients request exactly the data they need — no more, no less.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <TbBrandFramerMotion className="skill-icon" />
                                    <span className="skills-title"> Framer Motion </span>
                                </div>

                                <div className="skill-description">
                                    A React animation library for creating smooth, modern motion and interactions with ease.
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiVite className="skill-icon" />
                                    <span className="skills-title"> Vite </span>
                                </div>

                                <div className="skill-description">
                                    A fast, modern build tool and development server for frontend projects, optimized for speed and simplicity.
                                </div>

                            </div>

                        </div>
                    }

                </div>

            </div >
        </motion.div >
    )
}

export default Skills;