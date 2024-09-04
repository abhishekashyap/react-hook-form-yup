import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SectionContainer } from "./components/SectionContainer";
import { AccommodationDetails } from "./components/AccommodationDetails";
import { PersonalDetails } from "./components/PersonalDetails";
import { EmergencyDetails } from "./components/EmergencyDetails";

const sectionMapping = {
  "Accommodation Details": <AccommodationDetails />,
  "Personal Details": <PersonalDetails />,
  "Emergency Details": <EmergencyDetails />,
};

type SectionKey = keyof typeof sectionMapping;

const sections = Object.keys(sectionMapping) as SectionKey[];

function App() {
  const [activeStep, setActiveStep] = useState(0);

  /*
  useBookForm()


  const useBookForm () => {
  return {
    AccommodationDetails: useForm({
      resolver: yupResolver(accomodationsDetailsSchema),
      defaultValues
    }),
    EmergencyInformation: useForm({
      resolver: yupResolver(emergencyDetailsSchema),
      defaultValues
    }),
    guarentorDetails: useForm({
      resolver: yupResolver(guarentorDetailsSchema),
      defaultValues
    }),
  }
  */

  return (
    <>
      {sections.map((section, index) => (
        <div>
          <SectionContainer
            header={section}
            subheader={"abc"}
            status={index === activeStep ? "OPENED" : "CLOSED"}
          >
            {sectionMapping[section]}
          </SectionContainer>
        </div>
      ))}
    </>
  );
}

export default App;
