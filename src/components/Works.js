import React from 'react';
import './Works.css';
import work1 from './images/work1.png';
// import work2 from './images/work2.png';
import react1 from './images/react1.png';
import react2 from './images/react2.png';
import react3 from './images/react3.png';

const Works = () => {
	return (
		<section className="pt-5 works" id="works">
			<h2 className="text-center">Some of my Works</h2>
			<div className="gridIt">
				<div className="box">
					<img src={work1} className="imgs" alt="html|css" />

					<h5 className="px-3 pt-2">HTML | CSS</h5>
					<p className="text px-3">
						This Basic Project is built using HTML5, CSS3 and JavaScript
					</p>
					<a
						href="https://cerulean-peony-051d90.netlify.app"
						className="btn btn-primary mx-3 mb-3"
						target="_blank"
					>
						Go to the Site
					</a>
				</div>
				<div className="box">
					<img src={react1} className="imgs" alt="react-api" />

					<h5 className="px-3 pt-2">React.Js Images Search</h5>
					<p className="text px-3">
						This Project is built using HTML5, CSS3 and JavaScript
					</p>
					<a
						className="btn btn-primary mx-3 mb-3"
						href="https://62b7a3066d2aa156320cb3e2--inspiring-wisp-8ae223.netlify.app"
						target="_blank"
					>
						Go to the Site
					</a>
				</div>
				<div className="box">
					<img src={react2} className="imgs" alt="react-posts" />

					<h5 className="px-3 pt-2">React.Js Posts</h5>
					<p className="text px-3">
						This Project is built using HTML5, CSS3 and JavaScript
					</p>
					<a
						className="btn btn-primary mx-3 mb-3"
						href="https://elegant-pastelito-3b3977.netlify.app"
						target="_blank"
					>
						Go to the Site
					</a>
				</div>
				<div className="box">
					<img src={react3} className="imgs" alt="react-mini-projects" />

					<h5 className="px-3 pt-2">React.Js Mini Projects</h5>
					<p className="text px-3">
						This Project is built using HTML5, CSS3 and JavaScript
					</p>
					<a
						className="btn btn-primary mx-3 mb-3"
						href="https://capable-melba-080f98.netlify.app"
						target="_blank"
					>
						Go to the Site
					</a>
				</div>
			</div>
		</section>
	);
};

export default Works;
