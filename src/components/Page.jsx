//import React and Redux
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/language/languageSlice";
import { selectProjects } from '../features/projects/projectsSlice';
import { selectDarkMode } from "../features/darkMode/darkModeSlice";
//import others
import emailjs from '@emailjs/browser';
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
import { styled } from '@mui/material/styles';
//import data
import photo from '../images/photoshop.jpg';
import { screenMode, programming_languages, web_technologies, databases} from '../data/constants';


export default function Page({headerOpen}) {
  const language = useSelector(selectLanguage);
  const projects = useSelector(selectProjects);
  const darkMode = useSelector(selectDarkMode);
  const form = useRef();
  
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
    '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input & .css-u36398': {
      color: 'white'
    }
    
  }
  const InputField = styled(TextField)(inputStyle);

  useEffect(() => {}, [language])

  return (
    language && 
    <div className={`${darkMode? `${screenMode.dark.bg} ${screenMode.dark.text}` :screenMode.light.bg}`}>
      <Header headerOpen={headerOpen}/> 
      
      <div>
        <div className="p-10 md:pt-44 md:px-40 xl:px-72">

          <div className="flex flex-col md:flex-row items-center mt-10">
            <div className="w-[70%]">
              <Title title={language.full_name} subtitle={language.job_position}/>
              <div className="py-5">{language.about_me}</div>
              <a href="#contact">
                <Button variant="outlined" >&lt; {language.contact_title} /&gt;</Button>
              </a>
            </div>
           
           <div className={`rounded-xl ${screenMode.highlight.bg} -rotate-3 h-[250px] w-[200px] my-10`}>
            <div className="rounded-xl overflow-hidden rotate-10 h-[250px]">
                <img src={photo}
                    alt={`${language.full_name} - ${language.job_position}`}
                    className='w-[200px]'
                      />
              </div>
           </div>

          </div>

          {/* about */}
          <div id="about" className="py-12 border-y">
            <Title title={language.about_title} subtitle={language.about_subtitle}/>
            <div className="my-5">{language.about_description}</div>

            <TextHighlight name={language.headline_live} text={language.current_address}/>
            <TextHighlight name={language.headline_email} text={'alexvaluev1220@gmail.com'}/>
            <TextHighlight name={language.headline_tel} text={'(437) 286-1816'}/>
          </div>

          {/* education */}
          <div id='education' className="py-12 border-y">
            <Title title={language.education_title} subtitle={language.education_subtitle}/>
            <EducationCard startDate={language.program_start} endDate={language.program_end} program={language.university_program} uni_name={language.university_name} uni_address={language.university_address} />
          </div>

          {/* skills */}
          <div id='skills' className="py-12 border-y">
            {/* title */}
            <Title title={ language.skills_title} subtitle={ language.skills_subtitle} />
            {/* content */}
            <div className="flex flex-col md:flex-row">
                <SkillCard name={language.skill_section_lang} list={programming_languages}/>
                <SkillCard name={language.skill_section_web} list={web_technologies}/>
                <SkillCard name={language.skill_section_database} list={databases}/>
            </div>
          </div>

          {/* projects */}
          <div id='projects' className="py-12 border-y">
            {/* title */}
            <Title title={language.project_title} subtitle={language.project_subtitle}/>
            {/* content */}
            <div className="flex flex-wrap">
              {
                projects && projects.map((prj, idx) => (
                  <ProjectCard key={idx} name={prj.name} description={prj.description} image={prj.image} github={prj.github} website={prj.website} tools={prj.tools}/>
                ))
              }
              
            </div>
          </div>

          {/* contact */}
          <div id='contact' className="py-12 border-y">
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

                  <InputField id="name" name="name" variant="outlined" label={ language.contact_fullname_label} required/>
                  <InputField id="email" name="email" variant="outlined" label={ language.headline_email} required/>
                  <InputField id="message" name="message" variant="outlined" label={ language.contact_msg_label} rows={4} multiline required/>
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
