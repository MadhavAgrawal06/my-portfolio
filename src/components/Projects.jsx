import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "NewsNinja App",
      description: "A real-time news aggregation app using React.js and NewsAPI. Features infinite scroll, category filtering.",
      tech: ["React.js", "Bootstrap", "REST API"],
      image: "/images/newsninja.png", 
      liveLink: "https://github.com/MadhavAgrawal06/NewsNinja-React", 
      codeLink: "https://github.com/MadhavAgrawal06/NewsNinja-React"  
    },
    {
      id: 2,
      title: "NotesStack",
      description: "Collaborative notes-sharing platform. Features categorized navigation and Google Drive integration.",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
      image: "/images/notesstack.png",
      liveLink: "https://notesstacks.netlify.app/",
      codeLink: "https://github.com/MadhavAgrawal06/NotesStack"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dynamic weather app. Fetches real-time data from public APIs with dynamic background changes.",
      tech: ["React.js", "API Integration", "CSS3"],
      image: "/images/weather.png",
      liveLink: "https://weather-now-jamie.netlify.app/",
      codeLink: "https://github.com/MadhavAgrawal06/Weather-Now"
    },
    {
      id: 4,
      title: "Java To-Do List",
      description: "A simple Java console-based To-Do List app that lets users add, view, complete, and delete tasks — built using Object-Oriented Programming and ArrayList.",
      tech: ["Java", "OOP", "Collections"],
      image: "/images/todo.png",
      liveLink: null, // <--- CHANGED TO NULL (No Live Demo)
      codeLink: "https://github.com/MadhavAgrawal06/ToDoListApp"
    },
    {
      id: 5,
      title: "TextUtils",
      description: "TextUtils is a fast and responsive web app that allows users to analyze and manipulate text in multiple useful ways — right from their browser.",
      tech: ["React.js", "Bootstrap", "CSS","React Router"],
      image: "/images/textutils.png",
      liveLink: "https://textutils-tool-react.netlify.app/",
      codeLink: "https://github.com/MadhavAgrawal06/TextUtils-React"
    },
    {
      id: 6,
      title: "Currency Converter",
      description: "A clean and minimal Currency Converter Web App using live exchange rates. Features dropdowns with flags, real-time conversion, and input validation.",
      tech: ["HTML","CSS","Javascript","API"],
      image: "/images/currency.png",
      liveLink: "https://currency-exchange-tool.netlify.app/",
      codeLink: "https://github.com/MadhavAgrawal06/Currency-Converter"
    }
  ];

  return (
    <section id="projects" className="py-3" style={{ backgroundColor: '#0a192f' }}> 
      
      <div className="container">
        
        <div className="row mb-3">
           <div className="col-12 text-center text-md-start">
             <h2 className="display-4 fw-bold text-white text-center mb-2">
               <span style={{color:'#64ffda'}}></span> Projects
             </h2>
             <p className="lead text-center text-secondary">
                Some things I’ve built
             </p>
           </div>
        </div>

        <div className="row g-5 justify-content-center">
          {projectList.map((project) => (
            <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={project.id}>
              
              <div className="card h-100 overflow-hidden" style={{ 
                  backgroundColor: '#112240',
                  border: 'none', 
                  width: "370px",
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)' 
              }}>
                
                <div className="p-3" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-100 h-100"
                      style={{ 
                        objectFit: 'cover', 
                        borderRadius: '10px', 
                        transition: 'transform 0.3s',
                        opacity: '0.9',
                        margin: 0 
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.opacity = '1';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.opacity = '0.9';
                      }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x250/233554/64ffda?text=Project+Image" 
                      }}
                    />
                </div>

                <div className="card-body px-4 pb-4 pt-0 d-flex flex-column">
                    
                    <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#ccd6f6' }}>
                        {project.title}
                    </h4>

                    <p className="small mb-4 flex-grow-1" style={{ lineHeight: '1.6', color: '#8892b0' }}>
                      {project.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                       {project.tech.map((tech, index) => (
                         <span key={index} style={{ 
                             color: '#64ffda', 
                             backgroundColor: 'rgba(100, 255, 218, 0.05)', 
                             fontSize: '0.75rem', 
                             fontFamily: 'Fira Code, monospace',
                             padding: '4px 10px',
                             borderRadius: '15px', 
                             fontWeight: '500'
                         }}>
                           {tech}
                         </span>
                       ))}
                    </div>

                    <div className="d-flex gap-3 mt-auto">

                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noreferrer" 
                             className="btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                             style={{ 
                                 color: '#64ffda', 
                                 border: '1px solid #64ffda', 
                                 borderRadius: '8px',
                                 backgroundColor: 'transparent',
                                 transition: 'all 0.3s'
                             }}
                             onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
                             onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                          >
                             Live Demo
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                               <line x1="5" y1="12" x2="19" y2="12"></line>
                               <polyline points="12 5 19 12 12 19"></polyline>
                             </svg>
                          </a>
                        )}

                        {/* Code - Always Visible */}
                        <a href={project.codeLink} target="_blank" rel="noreferrer" 
                           className="btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                           style={{ 
                               color: '#ccd6f6', 
                               border: '1px solid #ccd6f6',
                               borderRadius: '8px',
                               backgroundColor: 'transparent',
                               transition: 'all 0.3s'
                           }}
                           onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(204, 214, 246, 0.1)'}
                           onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                           </svg>
                           Code
                        </a>
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;