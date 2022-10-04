import React from "react";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from "../../assets/kZo_logo-no-background.png"

const AboutMe = () => {
    return (
        <div className="gsa__aboutMe section__padding">
            <div className="gsa__aboutMe-container">
                <div className="gsa__aboutMe-container_bio">
                    <img src={logo} alt="Kostis profile" width="175px" height="50px"></img>
                    <h2 id="aboutMe">I'm Kostis Gkriziotis</h2>
                    <h3>A web developer who loves beekeeping and gardening</h3>
                    <p>At this point of my life I mainly enjoy the huge "code" journey, trying to get better and better and acquire
                        new skills through new "code" tracks.
                    </p>
                </div>
                <div className="gsa__aboutMe-container_social">
                    <div className="gsa__aboutMe-container_social_border"></div>
                    <a id="firstSocial" href="mailto:kgkriz.bsn@gmail.com">
                        <MdOutlineAlternateEmail size="32" />
                    </a>
                    <a href="https://www.linkedin.com/in/kostis-gkriziotis-9b6729250/">
                        <RiLinkedinLine size="32" />
                    </a>
                    <a id="lastSocial" href="https://github.com/kZo-7">
                        <RiGithubLine size="32" />
                    </a>
                    <div className="gsa__aboutMe-container_social_border"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;