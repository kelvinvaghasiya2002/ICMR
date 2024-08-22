import React, { useEffect, useState } from "react";
import "../Form.css";
import { Link } from "react-router-dom";
import AutopySideBar from "./sideBarList";

function SidePanelAutopsy({ sections = AutopySideBar, id }) {
  const [openSection, setOpenSection] = useState(null); // Track the currently open section

  // Determine the section index based on the active subtitle ID
  const getSectionIndex = (subtitleId) => {
    for (let i = 0; i < sections.length; i++) {
      if (
        sections[i].subtitles.find((subtitle) => subtitle.id === subtitleId)
      ) {
        return i;
      }
    }
    return null;
  };

  const handleSubtitleClick = (subtitleId) => {
    const sectionIndex = getSectionIndex(subtitleId);
    if (sectionIndex !== null) {
      setOpenSection(openSection === sectionIndex ? null : sectionIndex); // Toggle section
    }
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index); // Toggle the section
  };

  useEffect(() => {
    // Set the open section based on the activeId prop
    const sectionIndex = getSectionIndex(id);
    setOpenSection(sectionIndex);
  }, [id, sections]);

  // console.log(id);
  useEffect(() => {
    const link = document.getElementById(id);
    if (link) {
      const pElement = link.querySelector("p"); // Select the <p> inside the Link
      pElement.style.backgroundColor = "#152266";
      link.style.color = "white";
      // link.style.backgroundColor="#152266" ;
    }
  });
  return (
    <div className="sidePanel">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          <h2
            className="main-title"
            onClick={() => toggleSection(sectionIndex)}
          >
            {section.title}
          </h2>
          {openSection === sectionIndex && (
            <div className="innerdiv">
              {section.subtitles.map((subtitle, subtitleIndex) => (
                <Link
                  key={subtitleIndex}
                  id={subtitle.id}
                  to={subtitle.link}
                  onClick={() => handleSubtitleClick(subtitle.id)}
                >
                  <p>{subtitle.label}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SidePanelAutopsy;
