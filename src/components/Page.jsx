//import React and Redux
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/language/languageSlice";
import { selectProjects } from '../features/projects/projectsSlice';
import { selectWorkExperience } from '../features/workExperience/workExperienceSlice';
import { selectDarkMode } from "../features/darkMode/darkModeSlice";
//import others
import emailjs from '@emailjs/browser';
import ReactAnime from 'react-animejs';
//import components
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import TextHighlight from "./TextHighlight";
import Title from "./Title";
import EducationCard from "./EducationCard";
import WorkExperienceCard from "./WorkExperienceCard";
import LinksBar from "./LinksBar";
//import React UI materials, icons, images
import { TextField } from "@mui/material";
//import data
import { screenMode, programming_languages, web_technologies, databases} from '../data/constants';


export default function Page({headerOpen}) {
  const language = useSelector(selectLanguage);
  const projects = useSelector(selectProjects);
  const workExperience = useSelector(selectWorkExperience);
  const darkMode = useSelector(selectDarkMode);
  const form = useRef();
  const { Anime } = ReactAnime;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  
  // Test function to debug EmailJS configuration
  const testEmailJS = () => {
    console.log('Testing EmailJS configuration...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message to verify EmailJS configuration.'
    };
    
    emailjs.send('service_crert4i', 'template_i2o1jta', testData, {
      publicKey: 'mbzoQn_zGnpYjyMrd'
    })
    .then((result) => {
      console.log('EmailJS test successful:', result);
      alert('EmailJS test successful! Your configuration is working.');
    })
    .catch((error) => {
      console.error('EmailJS test failed:', error);
      alert(`EmailJS test failed: ${error.message || 'Unknown error'}`);
    });
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Enhanced error logging and validation
    console.log('Attempting to send email...');
    
    // Get form data for debugging
    const formData = new FormData(form.current);
    const emailData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    console.log('Form data:', emailData);
    
    // Validate form data
    if (!emailData.name || !emailData.email || !emailData.message) {
      setSubmitMessage('Please fill in all required fields.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }
    
    emailjs.sendForm('service_crert4i', 'template_i2o1jta', form.current, {
      publicKey: 'mbzoQn_zGnpYjyMrd'
    })
      .then((result) => {
          console.log('Email sent successfully:', result);
          setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
          setMessageType('success');
          form.current.reset();
      })
      .catch((error) => {
          console.error('Email send failed:', error);
          console.error('Error details:', {
            status: error.status,
            text: error.text,
            message: error.message
          });
          
          // More specific error messages based on error type
          let errorMessage = 'Failed to send message. Please try again or email me directly.';
          
          if (error.status === 400) {
            errorMessage = 'Invalid form data. Please check your inputs and try again.';
          } else if (error.status === 401) {
            errorMessage = 'Authentication failed. Please email me directly at alexvaluev1220@gmail.com';
          } else if (error.status === 403) {
            errorMessage = 'Service access denied. Please email me directly at alexvaluev1220@gmail.com';
          } else if (!navigator.onLine) {
            errorMessage = 'No internet connection. Please check your connection and try again.';
          } else if (error.message && error.message.includes('network')) {
            errorMessage = 'Network error. Please check your internet connection.';
          }
          
          setSubmitMessage(errorMessage);
          setMessageType('error');
      })
      .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => {
            setSubmitMessage('');
            setMessageType('');
          }, 8000); // Increased timeout for longer error messages
      });
  }

  const inputStyle = darkMode && {
    '& label':{
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
    },
    '& .css-1x5jdmq' : {
      color: 'white'
    },
    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .css-1hof3tc':{
      color: 'white'
    }
  }

  useEffect(() => {
    // Initialize EmailJS if not already initialized
    try {
      emailjs.init('mbzoQn_zGnpYjyMrd');
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, [language])

  return (
    language && 
    <div className={`${darkMode? `${screenMode.dark.bg} ${screenMode.dark.text}` :screenMode.light.bg} min-h-screen`}>
      
      <Anime initial={[
                  {
                    targets: '#header',
                    opacity: 1,
                    translateX: 0,
                    easing: "easeInOutQuad",
                    duration: 2000,
                    delay: 1700
                  }
      ]}>
        <Header headerOpen={headerOpen}/> 
      </Anime>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none"></div>
        <div className="p-6 md:pt-52 md:px-16 lg:px-32 xl:px-48 2xl:px-64 max-w-7xl mx-auto relative">

          <div className="flex flex-col items-center justify-center text-center mt-20 mb-32 min-h-[70vh]">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col items-center mb-12">
                <Anime initial={[
                  {
                    targets: ['#full_name', '#job_position'],
                    translateX: 0,
                    translateY: 0,
                    opacity: 1,
                    easing: "easeInOutQuad",
                    duration: 1700
                    
                  }
                ]}>
                  <h1 id='full_name' 
                      className='text-5xl md:text-7xl lg:text-8xl font-black mb-6 capitalize tracking-tight leading-tight' 
                      style={{opacity: 0, transform: 'translateY(-30px)'}}
                      >
                        {language.full_name}
                    </h1>
                  <div id='job_position' 
                       className={`text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-widest mb-4`}
                       style={{opacity: 0, transform: 'translateY(30px)'}}
                       >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                          {language.job_position}
                        </span>
                  </div>
                </Anime>
              </div>
        
              <Anime initial={[
                  {
                    targets: ['#about_me'],
                    opacity: 1,
                    easing: "easeInOutQuad",
                    duration: 2000,
                    delay: 1700
                    
                  }
                ]}>
                  <div id='about_me'
                       className="flex flex-col items-center"
                       style={{opacity: 0}}
                    >
                    <div className={`py-8 text-lg md:text-xl max-w-2xl leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{language.about_me}</div>
                    <div className="flex gap-4 flex-wrap justify-center">
                      <a href="#contact" className="inline-block group">
                        <button className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 group">
                          <span className="relative z-10">{language.contact_title}</span>
                        </button>
                      </a>
                      <a href="#projects" className="inline-block group">
                        <button className="relative overflow-hidden px-8 py-4 rounded-full border-2 border-blue-600 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 group">
                          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{language.headline_projects}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                      </a>
                    </div>
                  </div>
              </Anime>
            </div>
          </div>

          {/* about */}
          <div id="about" className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            <Title title={language.about_title} subtitle={language.about_subtitle}/>
            <div className={`my-8 text-lg leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{language.about_description}</div>
            <div className={`my-8 text-lg leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{language.about_description2}</div>
            <div className={`my-8 text-lg leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{language.about_description3}</div>

            <TextHighlight name={language.headline_live} text={language.current_address}/>
            <TextHighlight name={language.headline_email} text={'alexvaluev1220@gmail.com'}/>
            <TextHighlight name={language.headline_tel} text={'(437) 286-1816'}/>
          </div>

          {/* work experience */}
          <div id='experience' className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            <Title title={language.experience_title} subtitle={language.experience_subtitle}/>
            <div className="space-y-6">
              {workExperience && workExperience.map((exp) => (
                <WorkExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          {/* education */}
          <div id='education' className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            <Title title={language.education_title} subtitle={language.education_subtitle}/>
            <EducationCard startDate={language.program_start} endDate={language.program_end} program={language.university_program} uni_name={language.university_name} uni_address={language.university_address} />
          </div>

          {/* skills */}
          <div id='skills' className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            {/* title */}
            <Title title={ language.skills_title} subtitle={ language.skills_subtitle} />
            {/* content */}
            <div className="flex flex-col md:flex-row gap-8 place-items-center md:place-items-stretch mt-12">
                <SkillCard name={language.skill_section_lang} list={programming_languages}/>
                <SkillCard name={language.skill_section_web} list={web_technologies}/>
                <SkillCard name={language.skill_section_database} list={databases}/>
            </div>
          </div>

          {/* projects */}
          <div id='projects' className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            {/* title */}
            <Title title={language.project_title} subtitle={language.project_subtitle}/>
            {/* Featured Projects */}
            <div className="space-y-8 mt-12">
                {
                  projects && projects.filter(prj => prj.video)
                                      .map((prj, idx) => (
                                          <ProjectCard key={idx} prj={prj}/>
                                      ))
                }
            </div>
            
            {/* Other Projects Section */}
            <div className="mt-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
                <h3 className="text-xl font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {language.other_prj}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-30"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  projects && projects.filter(prj => !prj.video)
                                      .map((prj, idx) => (
                                          <div key={idx} className="h-full">
                                              <ProjectCard prj={prj}/>
                                          </div>
                                      ))
                }
              </div>
            </div>
          </div>

          {/* contact */}
          <div id='contact' className={`section-padding border-y ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            <Title title={ language.contact_title} subtitle={ language.contact_subtitle} />
            {/* content form */}
            <div className="md:flex md:flex-row-reverse md:justify-around md:mr-6 mt-12 gap-12">
              <div className={`${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/50 border-gray-200'} backdrop-blur-sm border rounded-2xl mb-6 p-10 hover:shadow-2xl transition-shadow duration-300`}>
                <Title title={language.full_name} subtitle={language.job_position} small={true}/>
                <TextHighlight name={ language.headline_live} text={ language.current_address}/>
                <TextHighlight name={ language.headline_email} text={'alexvaluev1220@gmail.com'}/>
                <TextHighlight name={ language.headline_tel} text={'(437) 286-1816'}/>
              </div>
              <div className="md:w-[45%]">
                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`mb-4 p-4 rounded-lg border ${messageType === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                  } ${darkMode && messageType === 'success' 
                    ? 'bg-green-900/20 border-green-800 text-green-300' 
                    : darkMode && messageType === 'error'
                    ? 'bg-red-900/20 border-red-800 text-red-300'
                    : ''
                  } transition-all duration-300`}>
                    {submitMessage}
                  </div>
                )}
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>

                  <TextField id="name" name="name" variant="outlined" label={ language.contact_fullname_label} sx={inputStyle} required/>
                  <TextField id="email" name="email" variant="outlined" label={ language.headline_email} sx={inputStyle} required/>
                  <TextField id="message" name="message" variant="outlined" label={ language.contact_msg_label} rows={4} multiline sx={inputStyle} required/>
                  <div className="font-bold">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300 group ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'
                      } text-white`}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : language.contact_btn_label}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      <LinksBar/>
    </div>
  );
};
