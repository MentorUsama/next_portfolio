import fs from "fs";
import path from "path";

import { useState } from "react";
import Wrapper from "../wrappers/Wrapper";
import { Hero, Services, Skills, Projects } from "../sections/index";
import { useTheme } from "../context";
export default function Home(props) {
  const theme = useTheme();
  const services=[{id:0,title:"Any Service"}, ...props.data.services]
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selctedService, setSelectedService] = useState([services[0]]);
  function onSkillSelect(selectedList, selectedItem) {setSelectedSkill(selectedList);}
  function onSkillRemove(selectedList, removedItem) {setSelectedSkill(selectedList);}
  function onServiceSelect(selectedList, selectedItem) {setSelectedService([selectedItem]);}
  function onServiceRemoved(selectedList, selectedItem) {setSelectedService([selectedItem]);}

  return (
    <Wrapper>
      <Hero mode={theme.mode} />
      <Services mode={theme.mode} />
      <Skills mode={theme.mode} skills={props.data.skills} />
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
        mode={theme.mode}
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
