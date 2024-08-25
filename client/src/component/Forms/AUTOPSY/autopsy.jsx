import React, { useState, useEffect } from "react";
import AOS from "aos";
import { turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import SidePanelAutopsy from "./sideBarAutopsy";
import FormFA from "./formFA";
import FormFB from "./formFB";

const Autopsy = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    // turnOffbutton();
  }, []);

  const [currentSection, setCurrentSection] = useState(1);

  const [formFAData, setFormFAData] = useState(
    JSON.parse(
      setLocalStorage("forma", {
        FA1: "",
        FA2: "",
        FA3: [],
        FA4: "",
        FA5: "",
        FA6: "",
      })
    )
  );
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 1024
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  const renderFormStep = () => {
    switch (currentSection) {
      case 1:
        return <FormFA formFAData={formFAData} setFormFAData={setFormFAData} />;
      case 2:
        return <FormFB formFAData={formFAData} setFormFAData={setFormFAData} />;
      case 3:
        return <FormFB formFAData={formFAData} setFormFAData={setFormFAData} />;
      // Add more cases for additional steps/forms
      default:
        return <FormFA formFAData={formFAData} setFormFAData={setFormFAData} />;
    }
  };

  // Function to go to the next step
  const goToNextStep = () => {
    setCurrentSection((prevStep) => prevStep + 1);
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    setCurrentSection((prevStep) => Math.max(prevStep - 1, 1));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Verbal Autopsy Tools"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanelAutopsy id={currentSection} currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        <div className="siteInfo" data-aos="fade-left">
          {/* <FormFA formFAData={formFAData} setFormFAData={setFormFAData} />
          <FormFB formFAData={formFAData} setFormFAData={setFormFAData} /> */}
          {renderFormStep()}
          {/* Form Body */}
          <div className="form-navigation">
            {currentSection > 1 && (
              <button onClick={goToPreviousStep}>Previous</button>
            )}
            <button onClick={goToNextStep}>Next</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Autopsy;
