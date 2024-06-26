import "./HomePage.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



export default function HomePage() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    },[]);
    return (
        <div className="homePage" data-aos="fade-right">
            <section id="aim-section">
                <div className="aim-parent">
                    <h2>AIM :</h2>
                    <p>To develop a scalable model of high quality patient-centric integrated emergency care system to achieve 80% population coverage in the selected districts of India.</p>
                </div>
            </section>

            <section id="objective-section">
                <div className="objective-parent">
                    <h1>Objective :</h1>
                    <p><span style={{ fontWeight: "800", fontFamily: "Poppins, sans-serif" }}>Objective-1:  </span> To conduct a literature review to understand the current state of emergency care systems in India and globally, map the existing infrastructure, systems, and processes, and engage with stakeholders to discern their needs and experiences, with the aim of identifying potential barriers and facilitators.</p>
                    <p><span style={{ fontWeight: "800", fontFamily: "Poppins, sans-serif" }}>Objective-2:  </span> To develop an implementation model for high-quality patient-centric integrated emergency care through iterative processes, implement and evaluate the optimized model in terms of coverage, implementation, costing, and impact on outcomes across 6 districts, with the aim of achieving 80% population coverage.</p>
                    <p><span style={{ fontWeight: "800", fontFamily: "Poppins, sans-serif" }}>Objective-3:  </span> To disseminate the research findings and best practices at the national level and assist the state in scaling up the optimized model.</p>
                </div>
            </section>

            <section id="outcome-section">
                <h1>Outcome :</h1>
                <button style={{height : "5vh"}}>Primary</button>
                <ul>
                    <li><p>Identify potential barriers and facilitators to the implementation of a patient-centric, integrated emergency care system in India.</p></li>
                    <li><p>Develop an implementation model for high-quality patient-centric integrated emergency care that is feasible, sustainable, and cost-effective.</p></li>
                    <li><p>Evaluate the optimized model in terms of coverage, implementation, costing, and impact on outcomes.</p></li>
                </ul>
                <button style={{height : "5vh"}}>Secondary</button>
                <ul>
                    <li><p>Improve the quality and efficiency of emergency care in India.</p></li>
                    <li><p>Increase the availability of emergency care services to underserved populations.</p></li>
                    <li><p>Reduce the number of deaths and disabilities caused by time-sensitive emergencies.</p></li>
                    <li><p>Improve the satisfaction of patients and families with emergency care services.</p></li>
                    <li><p>Dissemination of research findings and best practices at the national level and assist the state in scaling up the optimized model.</p></li>
                </ul>
            </section>


            <section id="goal-section">
                <h1>GOALS :</h1>
                <button style={{height : "5vh"}}>Primary</button>
                <ul>
                    <li><p>Identify potential barriers and facilitators to the implementation of a patient-centric, integrated emergency care system in India.</p></li>
                    <li><p>Develop an implementation model for high-quality patient-centric integrated emergency care that is feasible, sustainable, and cost-effective.</p></li>
                    <li><p>Evaluate the optimized model in terms of coverage, implementation, costing, and impact on outcomes.</p></li>
                </ul>
                <button style={{height : "5vh"}}>Secondary</button>
                <ul>
                    <li><p>Improve the quality and efficiency of emergency care in India.</p></li>
                    <li><p>Increase the availability of emergency care services to underserved populations.</p></li>
                    <li><p>Reduce the number of deaths and disabilities caused by time-sensitive emergencies.</p></li>
                    <li><p>Improve the satisfaction of patients and families with emergency care services.</p></li>
                    <li><p>Dissemination of research findings and best practices at the national level and assist the state in scaling up the optimized model.</p></li>
                </ul>
            </section>

        </div>

    )
}