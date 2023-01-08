import { useState } from "react";
import Header from "./components/Header.js";
import SubHeading from "./components/SubHeading";
import SampleImage from "./components/SampleImage";
import Details from "./components/form-components/Details.js";
import ResumeBox from "./components/ResumeBox.js";

function App() {
  // Personal Details
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contNo, setContNo] = useState("");
  const [email, setEmail] = useState("");

  // Professional Summary
  const [summText, setSummText] = useState("");

  // Work History
  const [jobs, setJobs] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      post: "",
      startDate: "",
      endDate: "",
      address: "",
      points: "",
    },
  ]);

  // Skills
  const [skills, setSkills] = useState([
    { id: Math.floor(Math.random() * 10000), text: "" },

    { id: Math.floor(Math.random() * 10000), text: "" },
  ]);

  // Education
  const [edus, setEdus] = useState([
    { id: Math.floor(Math.random() * 10000), degree: "", inst: "" },

    { id: Math.floor(Math.random() * 10000), degree: "", inst: "" },
  ]);

  // Affiliations
  const [affs, setAffs] = useState([
    { id: Math.floor(Math.random() * 10000), text: "" },
    { id: Math.floor(Math.random() * 10000), text: "" },
  ]);

  return (
    <div className="App">
      <div className="app-container">
        <div className="top-box">
          <div className="top-box-text">
            <Header />
            <SubHeading text="Sample Resume" />
          </div>
          
          <SampleImage />
        </div>

        <div className="form-box">
          <SubHeading text="Enter Your Details:" />

          <Details
            name={name}
            setName={setName}
            address={address}
            setAddress={setAddress}
            contNo={contNo}
            setContNo={setContNo}
            email={email}
            setEmail={setEmail}
            summText={summText}
            setSummText={setSummText}
            jobs={jobs}
            setJobs={setJobs}
            skills={skills}
            setSkills={setSkills}
            edus={edus}
            setEdus={setEdus}
            affs={affs}
            setAffs={setAffs}
          />
        </div>

        <ResumeBox
          name={name}
          address={address}
          contNo={contNo}
          email={email}
          summText={summText}
          jobs={jobs}
          skills={skills}
          edus={edus}
          affs={affs}
        />
      </div>
    </div>
  );
}

export default App;
