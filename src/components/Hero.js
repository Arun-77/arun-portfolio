import React, { useEffect } from 'react';
import './Hero.css';
import heroImg from './images/heroImg.png';

const checkViewPort = () => {};

const Hero = () => {
	useEffect(() => {
		checkViewPort();
	}, []);

	return (
		<section className="hero" id="home">
			<div className="hero-box">
				<article className="hero-content">
					<h1 className="title my-2">HI!</h1>
					<h2 className="name my-1">I'm Arun Kumar</h2>
					<h3 className="title-info my-1">Front-End Web Developer</h3>
				</article>
				<img src={heroImg} alt="heroImg" />
			</div>

			<div className="custom-shape-divider-bottom">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default Hero;
