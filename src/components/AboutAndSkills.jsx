import React from 'react';

const AboutAndSkills = () => {
  const tagStyle = {
    color: '#ccd6f6', 
    border: '1px solid #64ffda', 
    padding: '7px 16px', 
    borderRadius: '20px', 
    fontSize: '0.85rem',
    display: 'inline-block'
  };

  const cardStyle = {
    backgroundColor: '#112240', 
    borderRadius: '8px', 
    border: '1px solid #233554',
    height: '100%'
  };

  return (
    <section id="about" className="py-5">
      <div className="row align-items-center justify-content-between">
        
        <div className="col-lg-5 mb-5 mb-lg-0">
          <h3 className="mb-4 text-highlight text-center">
            <span style={{color:'#64ffda'}}></span> About Me
          </h3>
          <p className="text-secondary" style={{ lineHeight: '1.7' }}>
            I am a Full Stack Developer specializing in enterprise-grade applications using Java, Spring Boot, and React.js.
          </p>
          <p className="text-secondary  " style={{ lineHeight: '1.7' }}>
            I bridge the gap between robust backend logic and intuitive frontends. With expertise in MySQL, JDBC, and REST APIs, I focus on building secure, scalable systems and writing clean, maintainable code rooted in OOP principles. I am dedicated to solving complex architectural challenges through the full development lifecycle.
          </p>
          <p className="text-secondary" style={{ lineHeight: '1.7' }}>
            As a fresher, I’m eager to learn from experienced developers, contribute to team-driven projects, and grow into a well-rounded software engineer in a professional environment.
          </p>
        </div>


        <div className="col-lg-6" id="skills">
           <h3 className="mb-4 text-highlight text-center ">My Skills</h3>
           
           <div className="row g-3">
              
              <div className="col-md-6">
                <div className="p-4" style={cardStyle}>
                   <h5 className="text-white mb-3" style={{ fontSize: '1rem', borderBottom:'1px solid #233554', paddingBottom:'10px' }}>
                     <span className="me-2">💻</span> Languages
                   </h5>
                   <div className="d-flex flex-wrap gap-2">
                      <span style={tagStyle}>Java <i class="devicon-java-plain-wordmark colored"></i></span>
                      <span style={tagStyle}>JavaScript <i class="devicon-javascript-plain colored"></i></span>
                      <span style={tagStyle}>SQL <i class="devicon-azuresqldatabase-plain colored"></i></span>
                   </div>
                </div>
              </div>

              <div className="col-md-6">
                 <div className="p-4" style={cardStyle}>
                   <h5 className="text-white mb-3" style={{ fontSize: '1rem', borderBottom:'1px solid #233554', paddingBottom:'10px' }}>
                     <span className="me-2"><img height="20px" width="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2LFKSbBWcIjUl4aOQa9BC2Bslw5XugwUVw&s" alt="" /></span> Frontend
                   </h5>
                   <div className="d-flex flex-wrap gap-2">
                      <span style={tagStyle}>React.js <i class="devicon-react-original colored"></i></span>
                      <span style={tagStyle}>HTML5 <i class="devicon-html5-plain colored"></i></span>
                      <span style={tagStyle}>CSS3 <i class="devicon-css3-plain colored"></i></span>
                      <span style={tagStyle}>Bootstrap <i class=" devicon-bootstrap-plain colored"></i></span>
                   </div>
                </div>
              </div>

              <div className="col-md-6">
                 <div className="p-4" style={cardStyle}>
                   <h5 className="text-white mb-3" style={{ fontSize: '1rem', borderBottom:'1px solid #233554', paddingBottom:'10px' }}>
                     <span className="me-2"><img width="20px" height="20px" src="https://img.icons8.com/color/48/code.png" alt="code"/></span> Backend
                   </h5>
                   <div className="d-flex flex-wrap gap-2">
                      <span style={tagStyle}>Spring Boot  <img width="17px" height="17px" src="https://img.icons8.com/officel/80/spring-logo.png" alt="spring-logo"/></span>
                      <span style={tagStyle}>JDBC <img width="17px" height="17px" src="https://img.icons8.com/officel/80/data-configuration.png" alt="data-configuration"/></span>
                      <span style={tagStyle}>REST APIs 🌐</span>
                      <span style={tagStyle}>MySQL  <i class="devicon-mysql-original colored"></i> </span>
                   </div>
                </div>
              </div>

              <div className="col-md-6">
                 <div className="p-4" style={cardStyle}>
                   <h5 className="text-white mb-3" style={{ fontSize: '1rem', borderBottom:'1px solid #233554', paddingBottom:'10px' }}>
                     <span className="me-2">🛠️</span> Tools
                   </h5>
                   <div className="d-flex flex-wrap gap-2">
                      <span style={tagStyle}>Git & GitHub <i class="devicon-git-plain colored"></i></span>
                      <span style={tagStyle}>IntelliJ <i class="devicon-intellij-plain colored"></i></span>
                      <span style={tagStyle}>Netlify <i class="devicon-netlify-plain colored"></i></span>
                      <span style={tagStyle}>VS Code <i class="devicon-vscode-plain colored"></i></span>
                   </div>
                </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;