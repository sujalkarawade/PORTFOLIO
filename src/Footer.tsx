import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <div className="footer">

            <div className="footer-item">
                <span className="gradient">Sujal Karawade ©{currentYear} </span>
            </div>

            <div className="footer-item">

            </div>

            <div className="footer-item">
                <div className="footer-socials">
                    <span className="footer-icon"> <a href="https://www.linkedin.com/in/sujal-karawade/"><IoLogoLinkedin style={{ fontSize: '30px', paddingLeft: '10px' }} /></a> </span>
                    <span className="footer-icon">  <a href="https://github.com/sujalkarawade"> <LuGithub style={{ fontSize: '30px', paddingLeft: '10px' }} /> </a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;