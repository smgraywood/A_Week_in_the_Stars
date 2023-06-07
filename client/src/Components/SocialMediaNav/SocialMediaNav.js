import email from "../../Images/SocialMediaLinks/email.png";
import github from "../../Images/SocialMediaLinks/github.png";
import instagram from "../../Images/SocialMediaLinks/instagram.png";
import linkedin from "../../Images/SocialMediaLinks/linkedin.png";
import resume from "../../Images/SocialMediaLinks/resume.png";
import youtube from "../../Images/SocialMediaLinks/youtube.png";
import "./SocialMediaNav.css"

function SocialMediaNav() {
	return (
		<div className="OuterContainer">
			<div className="InnerContainer">
				<div className="SocMediaList">
					<ul>
						<li className="soc-media-link" id="LinkedIn">
							<a href="https://www.linkedin.com/company/nasa/" target="_blank" rel="noreferrer">
								<img src={linkedin} alt="linkedin logo representing nasa linkedin link"></img>
							</a>
						</li>
						<li className="soc-media-link" id="Instagram">
							<a href="https://www.instagram.com/nasa/" target="blank" rel="noreferrer">
								<img src={instagram} alt="instagram logo representing nasa instagram link"></img>
							</a>
						</li>
						<li className="soc-media-link" id ="Email">
							<a href="mailto:s.l.smith@nasa.gov" target="blank" rel="noreferrer">
								<img src={email} alt="envelope logo representing nasa email link"></img>
							</a>
						</li>
						<li className="soc-media-link" id ="Resume">
							<a href="https://www.nasa.gov/content/official-nasa-social-media-accounts" target="blank" rel="noreferrer">
								<img src={resume} alt="logo representing nasa social media page link"></img>
							</a>
						</li>
						<li className="soc-media-link" id ="Github">
							<a href="https://github.com/nasa" target="_blank" rel="noreferrer">
								<img src={github} alt="github logo representing nasa github link"></img>
							</a>
						</li>
                        <li className="soc-media-link" id ="Youtube">
							<a href="https://www.youtube.com/NASA" target="_blank" rel="noreferrer">
								<img src={youtube} alt="youtube logo representing nasa youtube link"></img>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaNav;