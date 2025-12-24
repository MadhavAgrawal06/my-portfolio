import React from 'react';

const EducationWork = () => {
  return (
    <section className="py-5">
       <div className="container">
         

         <div className="row mb-5">
           <div className="col-12 text-center text-md-start">
             <h3 className="text-highlight">
               <span style={{color:'#64ffda'}}></span> Experience & Education
             </h3>
           </div>
         </div>
         
         <div className="row align-items-start gy-5 mb-5">

           <div className="col-md-5" id="work">
              <h3 className="mb-4 text-white d-flex align-items-center">
                <span className="fs-2 me-3">💼</span> Work Experience
              </h3>
              
              <div className="timeline-item">
                <span className="text-highlight" style={{ fontSize: '0.85rem' }}>
                   Jun 2024 - July 2024
                </span>
                <h4 className="text-white mt-0">Ikigai School of AI</h4>
                <h5 className="text-white fs-6 mb-2">Trainee (React.js)</h5>
                <p className="small text-secondary">
                  Completed a 40 days industrial training program conducted by Ikigai School of AI in collaboration with BBD University.
                <ul>
                <li>Worked on a hands-on project — Weather App using React.js and public APIs.</li>
                <li>Focused on building responsive web design and understanding project structure.</li>
                <li>Earned Certificate of Excellence for dedication and performance.</li>
            </ul>
                </p>
              </div>

              <br />
              <div className="timeline-item">
                <span className="text-highlight" style={{ fontSize: '0.85rem' }}>
                   May 2023 - Jun 2023
                </span>
                <h4 className="text-white mt-0">Khelo India University Games</h4>
                <h5 className="text-white fs-6 mb-2">Student Volunteer</h5>
                <p className="small text-secondary">
                  Coordinated participant lodging and supported a national-level sports event, 
                  strengthening teamwork and communication skills.
                </p>
              </div>
           </div>

           
           <div className="col-md-2 d-none d-md-flex justify-content-center">
              <div style={{ 
                width: '1px', 
                height: '100%', 
                minHeight: '500px', 
                backgroundColor: '#233554', 
                borderRight: '1px dashed #64ffda'
              }}></div>
           </div>

           <div className="col-md-5" id="education">
              <h3 className="mb-4 text-white d-flex align-items-center">
                <span className="fs-2 me-3">🎓</span> Education
              </h3>
              
              <div className="timeline-item">
                <span className="text-highlight" style={{ fontSize: '0.85rem' }}>
                  2021 - 2025
                </span>
                <h4 className="text-white mt-0">Babu Banarasi Das University</h4>
                <h5 className="text-white fs-6 mb-2">Bachelor of Technology (CSE)</h5>
                <p className="small text-secondary">
                  CGPA: 8.3/10 <br/>
                  <span className="text-light">Coursework:</span> DSA, Web Development, OOP.
                </p>
              </div>

              <br />
              <div className="timeline-item">
                <span className="text-highlight" style={{ fontSize: '0.85rem' }}>
                  2018 - 2020
                </span>
                <h4 className="text-white mt-0">Jai Academy</h4>
                <h5 className="text-white fs-6 mb-2">Intermediate / 12th Grade</h5>
                <p className="small text-secondary">
                  Stream: Science (PCM) + Computers
                </p>
              </div>
              <br />
               <div className="timeline-item">
                <span className="text-highlight" style={{ fontSize: '0.85rem' }}>
                  2016 - 2018
                </span>
                <h4 className="text-white mt-0">Ramshree Public School</h4>
                <h5 className="text-white fs-6 mb-2">High School / 10th Grade</h5>
              </div>

           </div>

         </div>

         <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="text-center p-4" style={{ 
                    backgroundColor: 'rgba(17, 34, 64, 0.5)',
                    border: '1px solid #233554',
                    borderRadius: '8px' 
                }}>
                    <h4 className="text-white mb-4">
                        <span className="fs-4 me-2">📜</span> Certifications
                    </h4>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5 text-secondary">
                        
                        <a href="https://drive.google.com/file/d/18pt17Pe8Gk7vzBdW5IoVKtZKLhI3y2Cb/view?usp=sharing" target="_blank" rel="noreferrer" className="text-decoration-none text-secondary hover-cyan">
                        <div className="d-flex align-items-center">
                             <span style={{color:'#64ffda', fontSize:'1.2rem'}} className="me-2">▹</span > 
                             Java Programming - Great Learning
                             <img className="mx-1"src="/images/resize.png" height="15px" width="15px" alt="" />
                        </div>
                        </a>
                        
                        <a href="https://www.coursera.org/account/accomplishments/verify/EWZU3PB30WE5" target="_blank" rel="noreferrer" className="text-decoration-none text-secondary hover-cyan">
                        <div className="d-flex align-items-center">
                             <span style={{color:'#64ffda', fontSize:'1.2rem'}} className="me-2">▹</span> 
                             Programming with Javascript - Coursera
                             <img className="mx-1" src="/images/resize.png" height="15px" width="15px" alt="" />
                        </div>
                        </a>


                    </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5 text-secondary mr-6">
                        
                        <a href="https://drive.google.com/file/d/1cjy8hNvJEU0cCWYKgiA1OMHDZjhzpIza/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-decoration-none text-secondary hover-cyan">
                        <div className="d-flex align-items-center">
                             <span style={{color:'#64ffda', fontSize:'1.2rem'}} className="me-2">▹</span> 
                             SQLite Made Easy - Udemy
                             <img className="mx-1"src="/images/resize.png" height="15px" width="15px" alt="" />
                        </div>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/1vGZc1MikZkB8QAdEWK9Q-HguiOGGtLD2/view?usp=sharing" target="_blank" rel="noreferrer" className="text-decoration-none text-secondary hover-cyan">
                        <div className="d-flex align-items-center">
                             <span style={{color:'#64ffda', fontSize:'1.2rem'}} className="me-2">▹</span> 
                             Free AWS Course - Intellipaat
                             <img className="mx-1"src="/images/resize.png" height="15px" width="15px" alt="" />
                        </div>
                        </a>


                    </div>
                </div>
            </div>
         </div>

       </div>
    </section>
  );
};

export default EducationWork;