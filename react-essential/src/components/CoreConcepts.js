import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => (<CoreConcept key={conceptItem.title} title={conceptItem.title} image={conceptItem.image} description={conceptItem.description} />) )} 
            {/* {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept {...conceptItem} />))} */}
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} /> 
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            */}
          </ul>
        </section>
    );
}