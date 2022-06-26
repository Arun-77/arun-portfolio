import React from 'react';
import './About.css';
import AboutMe from './images/undraw_profile.png';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-content">
					<h2>About ME</h2>
					<p>
						Hello! I am Arun Kumar.M. I specialise in creating creative, usable
						professional websites &#38; As a person with high interest in Web
						development. I love spending time on fixing little details and
						optimizing web apps.
					</p>
					<p>
						I am enthusiastic Dev who is able to work in a busy environment and
						very willing to learn and develop new skills. I have a creative mind
						and am always up for new challenges. I am well organized and always
						plan ahead to make sure I manage my time well.
					</p>
				</div>
				<img src={AboutMe} alt="about_me" />
			</div>
		</section>
	);
};

export default About;
