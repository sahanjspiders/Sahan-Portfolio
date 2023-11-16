import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";


import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				
				<meta
					name="keywords"
					
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Welcome to my project page! As a fresher in the world of web development,
						As a fresher, I embrace every challenge and opportunity for learning.
						</div>

						<div className="subtitle projects-subtitle">
					 From simple web applications to dynamic, interactive platforms,
					  each project represents a journey of learning, experimentation, and growth. 
					  The technologies I've employed in each project reflect my eagerness to embrace new tools 
					  and frameworks,demonstrating my adaptability and enthusiasm to learn.
					  As you explore each project card, you'll discover not only the end product but also the story behind it—the challenges faced,
					   the skills demonstrated, and the goals achieved. Additionally, I've provided code snippets,
					    project goals, and future enhancements, offering a comprehensive view of each project's development process.
						 
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
