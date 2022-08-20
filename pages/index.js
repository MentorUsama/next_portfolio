import fs from "fs";
import path from "path";

import { useState } from "react";
import Wrapper from "../wrappers/Wrapper";
import { Hero, Services, Skills, Projects,ClientFeedback } from "../sections/index";
import { useTheme } from "../context";
export default function Home(props) {
  const theme = useTheme();
  const services=[{id:0,title:"Any Service"}, ...props.data.services]
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selctedService, setSelectedService] = useState([services[0]]);
  const [filteredProject,setFilterredProject]=useState(props.data.projects)
  function onSkillSelect(selectedSkills, selectedItem) {
    setSelectedSkill(selectedSkills);
    updateFilteredProject(selectedSkills,selctedService)
  }
  function onSkillRemove(selectedSkills, removedItem) {
    setSelectedSkill(selectedSkills);
    updateFilteredProject(selectedSkills,selctedService)
  }
  function onServiceSelect(_, selectedService) {
    setSelectedService([selectedService]);
    updateFilteredProject(selectedSkill,[selectedService])
  }
  function onServiceRemoved(_, selectedService) {}
  function updateFilteredProject(skills,services){
    var new_filtered_project=props.data.projects
    if(services[0].id!=0)
    {
      new_filtered_project=new_filtered_project.filter(project=>project.service_ids.includes(services[0].id))
    }
    if(skills.length!=0)
    {
      var all_skills=[]
      skills.map(skill=>all_skills.push(skill.id))

      new_filtered_project=new_filtered_project.filter(project=>{
        var isFound=true
        all_skills.map(skill=>{
          if(!project.skill_ids.includes(skill))
            isFound=false
        })
        return isFound
      })
    }
    setFilterredProject(new_filtered_project)
  }

  return (
    <Wrapper>
      <Hero mode={theme.mode} />
      <Services 
        mode={theme.mode} 
        services={props.data.services}
      />
      <Skills 
        mode={theme.mode} 
        skills={props.data.skills} 
      />
      <Projects
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        selctedService={selctedService}
        setSelectedService={setSelectedService}
        onSelect={onSkillSelect}
        onRemove={onSkillRemove}
        onServiceSelect={onServiceSelect}
        onServiceRemoved={onServiceRemoved}
        skills={props.data.skills}
        services={services}
        filteredProject={filteredProject}
        mode={theme.mode}
      />
      <ClientFeedback 
        mode={theme.mode}
        feedbacks={props.data.feedbacks}
      />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const file_path = path.join(process.cwd(), "services.json");
  const json_Data = fs.readFileSync(file_path);
  const data = JSON.parse(json_Data);
  return {
    props: {
      data: data,
    },
  };
}
