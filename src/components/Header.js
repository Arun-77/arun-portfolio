import React, { useState } from 'react';
import './Header.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
	const [show, setShow] = useState(false);
	const toggleHandler = () => {
		setShow((prev) => !prev);
	};

	return (
		<nav className="bg-white">
			<h2>AK</h2>
			<span className="togglebar" onClick={toggleHandler}>
				{!show ? <FaBars /> : <IoMdClose />}
			</span>
			<div className={show ? 'menu slide' : 'menu'}>
				<ul onClick={() => setShow((prev) => !prev)}>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#works">My Works</a>
					</li>
				</ul>
				<div>
					<button className="btn btn-info mx-3">
						<a
							href="https://www.linkedin.com/in/arun-m-790007228"
							target="_blank"
							rel="noreferrer"
						>
							<BsLinkedin style={{ margin: '0 4px 4px 0' }} />
							LinkedIn
						</a>
					</button>

					<button className="btn btn-info second">
						<a
							href="https://github.com/Arun-77"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub style={{ margin: '0 4px 4px 0' }} />
							Github
						</a>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
