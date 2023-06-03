import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

// Import project images
import turtlebotImage from './images/turtlebot2i_proj.png';
import swologDashboardImage from './images/swolog-dashboard.png';
import rbmImage from './images/rbm.png';
import githubLogo from './images/github-mark/github-mark-white.png'

const App = () => {
  const aboutMeHeaders = [
                            'Passionate and Diverse Background',
                            'Exploring Cryptocurrency and Blockchain',
                            'Transitioning to Full-Stack Web Development',
                          ]

  const aboutMeDescription = [
                                'I am a passionate individual with a diverse background in computer science, mathematics, and blockchain technology. During my studies, which I pursued up to the graduate level, I developed a keen interest in artificial intelligence and machine learning, exploring their applications in various domains.',
                                'Driven by my curiosity and desire to explore emerging technologies, I ventured into the world of cryptocurrency trading. As a cryptocurrency trader, I delved into blockchain technology, gaining valuable insights into decentralized systems, smart contracts, and cryptocurrencies.',
                                'Inspired by my experiences in the cryptocurrency space and the potential of blockchain technology, I am now transitioning my skills and knowledge towards becoming a full-stack web developer.  I am enthusiastic about building user-friendly and efficient web solutions that not only meet the needs of clients but also contribute to the advancement of technology.',
                                /*'I am constantly striving for growth and staying up to date with the latest industry trends. I am committed to expanding my skill set as a full-stack web developer. I am eager to collaborate with like-minded professionals, tackle new challenges, and make a positive impact through my work.'*/
                              ]
  // Array of projects
  const projects = [
    {
      title: 'Turtlebot 2i Autonomous Navigation And Manipulation',
      description: 'Our project was to develop the autonomous navigation and manipulation features\
                     on the TurtleBot 2i. The task of this project can be divided into two parts. \
                     First part includes map construction, self-location and path planning of the \
                     TurtleBot 2i. Second part includes object identification and color sorting in \
                     computer vision, and object manipulation and fetching by robotic arms. This \
                     development can make the TurtleBot 2i be generalized to warehousing management\
                      robots in the future.',
      projectLink: 'https://turtlebot2i.weebly.com/',
      demoLink: 'https://turtlebot2i.weebly.com/results--demo.html',
      sourceCodeLink: 'https://github.com/junzengx14/turtlebot2iapp',
      image: turtlebotImage
    },
    {
      title: 'Swolog: Fitness Tracker and Workout Log',
      description: 'Swolog is a web application that serves as a fitness tracker and workout log.\
       Users can create an account and log their workouts, view their previous workout history, and\
        track their progress for different exercises using interactive charts.',
      projectLink: 'https://swolog.fly.dev/',
      demoLink: 'https://youtu.be/h45__GEFry0',
      sourceCodeLink: 'https://github.com/jasonramirez0/Swolog',
      image: swologDashboardImage
    },
    {
      title: 'Online Restricted Boltzmann Machines: Sequential learning for compact representations and prediction',
      description: 'In this project, we investigated the use of Restricted Boltzmann Machines (RBMs) trained using\
       Online Contrastive Divergence with Generative Replay (OCDGR) as a compact way to represent\
      and track arbitrary distributions of potentially large and complex observation spaces.',
      projectLink: 'https://github.com/jasonramirez0/online-contrastive-divergence-with-generative-replay/blob/master/EE290s_project_report.pdf',
      demoLink: 'https://github.com/jasonramirez0/online-contrastive-divergence-with-generative-replay/blob/master/EE290s_project_report.pdf',
      sourceCodeLink: 'https://github.com/jasonramirez0/online-contrastive-divergence-with-generative-replay/blob/master/EE290s_project_report.pdf',
      image: rbmImage
    }
  ]
  const AboutSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)
  
    const handleNextClick = () => {
      setActiveIndex((prevIndex) => prevIndex + 1)
    }
    
    const handlePrevClick = () => {
      setActiveIndex((prevIndex) => prevIndex - 1)
    }
  
    return (
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            {activeIndex > 0 && (
              <button onClick={handlePrevClick}>
                <AiOutlineArrowLeft className="arrow"/>
              </button>
            )}
            <div className="about-paragraph">
              <h3>{aboutMeHeaders[activeIndex]}</h3>
              <p>{aboutMeDescription[activeIndex]}</p>
            </div>
            {activeIndex < aboutMeDescription.length - 1 && (
              <button onClick={handleNextClick}>
                <AiOutlineArrowRight className="arrow" />
              </button>
            )}
          </div>
        </div>
      </section>
    );
  };

  

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="email">
            <a href="mailto:jasonramirez538@gmail.com">
              <AiOutlineMail className="email-icon" />
              jasonramirez538@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

  return (
    <div className="app">
      <Header />
      <AboutSection />
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-container">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                </div>
                <div className="project-links">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Project Website</a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <div className='source-code-link'>
                    <a href={project.sourceCodeLink}>
                      <img src={githubLogo} alt="GitHub Logo" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
      <footer>
        <p>&copy; {new Date().getFullYear()} Jason Ramirez</p>
      </footer>
    </div>
  );
};

export default App;
