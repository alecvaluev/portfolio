//import React and Redux
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/language/languageSlice";
import { selectProjects } from '../features/projects/projectsSlice';
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
import LinksBar from "./LinksBar";
//import React UI materials, icons, images
import { TextField, Button } from "@mui/material";
//import data
import photo from '../images/photoshop.jpg';
import { screenMode, programming_languages, web_technologies, databases} from '../data/constants';


export default function Page({headerOpen}) {
  const language = useSelector(selectLanguage);
  const projects = useSelector(selectProjects);
  const darkMode = useSelector(selectDarkMode);
  const form = useRef();
  const { Anime } = ReactAnime;
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_crert4i', 'template_i2o1jta', form.current, 'mbzoQn_zGnpYjyMrd')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent");
      }, (error) => {
          console.log(error.text);
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

  useEffect(() => {}, [language])

  return (
    language && 
    <div className={`${darkMode? `${screenMode.dark.bg} ${screenMode.dark.text}` :screenMode.light.bg}`}>
      
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
      <div>
        <div className="p-3 md:pt-44 md:px-40 xl:px-72">

          <div className="flex flex-col md:flex-row items-center mt-16 mb-36">
            <div className="w-[70%]">
              <div className="flex flex-col items-center md:block font-bold mb-10">
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
                      className='text-5xl mb-2 capitalize' 
                      style={{opacity: 0, transform: 'translateX(-200px)'}}
                      >
                        {language.full_name}
                    </h1>
                  <div id='job_position' 
                       className={`${screenMode.highlight.text} uppercase`}
                       style={{opacity: 0, transform: 'translateY(100px)'}}
                       >
                        {language.job_position}
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
                       style={{opacity: 0}}
                    >
                    <div className="py-5">{language.about_me}</div>
                    <a href="#contact">
                      <Button variant="outlined" >&lt; {language.contact_title} /&gt;</Button>
                    </a>
                  </div>
              </Anime>
            </div>
           
            <Anime initial={[
                  {
                    targets: '#photo',
                    opacity: 1,
                    easing: "easeInOutQuad",
                    duration: 2000,
                    delay: 1700
                  }
            ]}>
              <div id='photo' 
                   className={`rounded-xl ${screenMode.highlight.bg} -rotate-3 h-[250px] w-[200px] my-10`}
                   style={{opacity: 0}}>
                <div className="rounded-xl overflow-hidden rotate-10 h-[250px]">
                    <img src={photo}
                        alt={`${language.full_name} - ${language.job_position}`}
                        className='w-[200px]'
                          />
                  </div>
              </div>
            </Anime>

          </div>

          {/* about */}
          <div id="about" className="py-20 border-y">
            <Title title={language.about_title} subtitle={language.about_subtitle}/>
            <div className="my-5">{language.about_description}</div>
            <div className="my-5">{language.about_description2}</div>
            <div className="my-5">{language.about_description3}</div>

            <TextHighlight name={language.headline_live} text={language.current_address}/>
            <TextHighlight name={language.headline_email} text={'alexvaluev1220@gmail.com'}/>
            <TextHighlight name={language.headline_tel} text={'(437) 286-1816'}/>
          </div>

          {/* education */}
          <div id='education' className="py-20 border-y">
            <Title title={language.education_title} subtitle={language.education_subtitle}/>
            <EducationCard startDate={language.program_start} endDate={language.program_end} program={language.university_program} uni_name={language.university_name} uni_address={language.university_address} />
          </div>

          {/* skills */}
          <div id='skills' className="py-20 border-y">
            {/* title */}
            <Title title={ language.skills_title} subtitle={ language.skills_subtitle} />
            {/* content */}
            <div className="flex flex-col md:flex-row place-items-center md:place-items-stretch">
                <SkillCard name={language.skill_section_lang} list={programming_languages}/>
                <SkillCard name={language.skill_section_web} list={web_technologies}/>
                <SkillCard name={language.skill_section_database} list={databases}/>
            </div>
          </div>

          {/* projects */}
          <div id='projects' className="py-20 border-y">
            {/* title */}
            <Title title={language.project_title} subtitle={language.project_subtitle}/>
            {/* content */}
            <div className="flex flex-wrap">
                {
                  projects && projects.filter(prj => prj.video)
                                      .map((prj, idx) => (
                                          <ProjectCard key={idx} prj={prj}/>
                                      ))
                }
                
              </div>
              <p className="uppercase border-b-2 p-2 text-xl -mb-2">{language.other_prj}</p>
              <div className="flex flex-wrap justify-center">
                {
                  projects && projects.filter(prj => !prj.video)
                                      .map((prj, idx) => (
                                          <ProjectCard key={idx} prj={prj}/>
                                      ))
                }
              </div>
          </div>

          {/* contact */}
          <div id='contact' className="py-20  border-y">
            <Title title={ language.contact_title} subtitle={ language.contact_subtitle} />
            {/* content form */}
            <div className="md:flex md:flex-row-reverse md:justify-around md:mr-6">
              <div className="border rounded-xl mb-6 p-8">
                <Title title={language.full_name} subtitle={language.job_position} small={true}/>
                <TextHighlight name={ language.headline_live} text={ language.current_address}/>
                <TextHighlight name={ language.headline_email} text={'alexvaluev1220@gmail.com'}/>
                <TextHighlight name={ language.headline_tel} text={'(437) 286-1816'}/>
              </div>
              <div className="md:w-[40%]">
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>

                  <TextField id="name" name="name" variant="outlined" label={ language.contact_fullname_label} sx={inputStyle} required/>
                  <TextField id="email" name="email" variant="outlined" label={ language.headline_email} sx={inputStyle} required/>
                  <TextField id="message" name="message" variant="outlined" label={ language.contact_msg_label} rows={4} multiline sx={inputStyle} required/>
                  <div className="font-bold">
                    <Button variant="contained" type="submit">{ language.contact_btn_label}</Button>
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
