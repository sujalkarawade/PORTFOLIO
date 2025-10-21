import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiArrowDown, HiDownload } from "react-icons/hi";

//import GradientText from './React-Bits/GradientText.tsx'
import SplitText from "./React-Bits/SplitText";
import PixelBlast from "./React-Bits/PixelBlast"


type Props = {

    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Greeting = ({ handleDownloadAndView }: Props) => {
    return (
        <div className="greeting">

            <PixelBlast
                variant="diamond"
                pixelSize={4}
                color="#B19EEF"
                patternScale={5}
                patternDensity={1.0}
                pixelSizeJitter={0.2}
                liquidRadius={0}
                liquidWobbleSpeed={2}
                speed={0.4}
                edgeFade={0.10}
            />

            <div className="greeting-container">
                <span className="greeting-title" id="fade-in">
                    <SplitText
                        text=" Hey, I'm Sujal Karawade"
                        className="greeting-title-text"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        textAlign="center"
                        
                    />

                    <div id="fade-in4">
                        <TypeAnimation
                            className="greeting-subtitle"
                            sequence={[
                                ' Full Stack Developer',
                                3000,
                                ' AI/ML Engineer',
                                3000,
                                ' Tech Enthusiast',
                                3000,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                            style={{ textAlign: 'center' }}
                        />
                    </div>
                </span>

                <div className="socials" id="fade-in3">
                    <span className="resume" onClick={handleDownloadAndView}>
                        <div className="social-item">
                            <HiDownload style={{
                                fontSize: '20px',
                                marginRight: '10px',
                                verticalAlign: 'center',
                                color: 'white',
                            }}
                            />
                            <span>Resume</span>
                        </div>

                    </span>

                    <div className="social-item">
                        <span className="social-icon">
                            <a href="https://www.linkedin.com/in/sujal-karawade/" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin id="socialHover" style={{
                                    fontSize: '30px',
                                    margin: '10px',
                                    verticalAlign: 'center',
                                }}
                                />
                            </a>
                        </span>
                    </div>
                    <div className="social-item">
                        <span className="social-icon">
                            <a href="https://github.com/sujalkarawade" target="_blank" rel="noopener noreferrer">
                                <LuGithub id="socialHover" style={{
                                    fontSize: '30px',
                                    margin: '10px',
                                    verticalAlign: 'center',

                                }}
                                />
                            </a>
                        </span>
                    </div>
                </div>

                <div className="scroll-down-container">
                    <a className="scroll-down" href="#about">
                        <span>Scroll or click to enter</span>
                        <HiArrowDown style={{ display: 'flex', fontSize: "30px", margin: '10px', justifyContent: 'center', verticalAlign: 'center' }} />
                    </a>
                </div>
            </div>
        </div>

    )

}

export default Greeting;

