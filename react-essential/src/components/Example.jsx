import { useState } from "react";

import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from '../data';


export default function Example(){
    const [ selectedTopic , setSelectedTopic ] = useState();

 
    function handleSelect(slectedButton){
        setSelectedTopic(slectedButton)
        console.log(selectedTopic);
        
    }

    let tabCotent = <p>Please select a topic</p>;

    if(selectedTopic){
        tabCotent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>
        );
    }
    return (
        <Section title="Example" id="examples">
          <h2>Examples</h2>
          <Tabs 
          ButtonsContainer="menu"
          buttons={
            <>
            <TabButton isSelected={selectedTopic === 'component'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>
          }
          >

          </Tabs>
         
            
          {tabCotent}
            
        </Section>
    )
}