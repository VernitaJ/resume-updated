import React from "react";
import "./styles.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import PersonalDetail from "./PersonalDetail";

export default function App() {
  return (
    <div className="App">
      <div className="bgImg" alt="flowery" />
      <div className="mainContent">
        <section className="leftSide">
          <img
            className="my-face"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEcZn8a1b4jEg/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=TuRjl7hTaTcZi3di3Klk8gefOXu-Pow9sRe7bh50vBg"
            alt="Vernita Gouws"
          />
          <h1>Vernita Gouws</h1>
          <PersonalDetail title="D.O.B">
            <p>20 September 1987</p>
          </PersonalDetail>
          <PersonalDetail title="Address">
            <p>Bertrandsgatan 3B</p>
            <p>Malmö Sweden</p>
            <p>21214</p>
          </PersonalDetail>
          <PersonalDetail title="Phone">
            <p>0728785721</p>
          </PersonalDetail>
          <PersonalDetail title="Email">
            <p>vernita.gouws@hotmail.com</p>
          </PersonalDetail>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/vernita-jones-56119325/"
              target="_blank"
            >
              <img
                id="linkedin"
                src="http://www.newdesignfile.com/postpic/2009/01/round-linkedin-icon_246849.png"
                alt="vernita linkedin"
              />
            </a>
            <br />
            <a href="https://www.instagram.com/verneedher/" target="_blank">
              <img
                id="instagram"
                src="https://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png"
                alt="vernita instagram"
              />
            </a>
          </div>
          <br />
          <PersonalDetail title="Hobbies">
            <p>Rock climbing, Acro-yoga, </p>
            <p>Hiking, Bouldering, Yoga</p>
          </PersonalDetail>
          <div>
            <h4 className="education">Education</h4>
            <div className="educationDetail">
              <p>
                <b>2019</b>
              </p>
              <p>Front-end Development</p>
              <p>
                <b>Foocoding</b>
              </p>
              <p>
                <br />
                <br />
                <b>2014</b>
              </p>
              <p>Bachelors in Marketing Management</p>
              <p>
                <b>University of South Africa</b>
              </p>
              <p>
                <br />
                <br />
                <b>2010</b>
              </p>
              <p>Business Management Diploma</p>
              <p>
                <b>Gordon Institute of Business Science</b>
              </p>
            </div>
          </div>
        </section>
        <section className="rightSide">
          <AboutMe title="About Me">
            <p>
              I have a passion for evolving ideas and systems within a team of
              diverse contributors. With hard work and collaboration, I've moved
              through different sectors whilst maintaining my central
              competencies of organisation, communication, and planning.
            </p>
            <p>
              I have a wide range of experience from companies with complex
              offerings and international markets that I've attained over the
              past 10 years of working within marketing and project roles.
            </p>
            <p>
              Through this experience, I honed a strong ability to organize and
              prioritize my work and to communicate in a structured and clear
              manner. I have proven marketing project management skills, and
              approach work the same as I approach the rest of my life - with
              enthusiasm, positivity, and drive.
            </p>
            <p>
              My goals for 2020 include furthering my Swedish language skills
              and growing in project management and technological fields.{" "}
            </p>
          </AboutMe>
          <AboutMe title="Experience">
            <p>
              <b>18-19 Malmö Makerspace</b>
              <br />
              Project Manager
              <br />
              Plan and execute marketing strategies with volunteers and
              stakeholders through the use of digital and other branding
              materials. Organise events, create advertising campaigns for new
              launches, SEO planning and leading CRM.
            </p>
            <p>
              <b>16-18 Mulberry</b>
              <br />
              Head of English Department
              <br />
              After working as an English teacher at a private school for
              6months, I became the head of the English department. I took
              charge of the communication between teachers and management, as
              well as the English marketing for the school. I led project and
              event management, organising fund raisers and celebrations alike.
            </p>
            <p>
              <b>14-16 TechnoCAD</b>
              <br />
              Marketing Manager
              <br />
              Planning marketing strategies within a team, through the use of
              digital and other branding materials. Organise events, create
              advertising campaigns for new launches, and lead customer
              relationship management.
            </p>
            <p>
              <b>11-14 DeVere Investments</b>
              <br />
              Marketing coordinator
              <br />
              Support the launch of the flagship office in Accra - Ghana with
              marketing events and conferences lasting 6 months. Conduct Market
              research in South Africa, and strategising within a marketing
              team, applying effective strategies accordingly. CRM and
              assistance in the communication between financial advisors and
              clients.
            </p>
          </AboutMe>
          <AboutMe title="Skills">
            <Skills title="HTML" value="90" />
            <Skills title="CSS" value="80" />
            <Skills title="Photoshop" value="50" />
            <Skills title="Illustrator" value="70" />
            <Skills title="SEO" value="80" />
            <Skills title="Wordpress" value="70" />
          </AboutMe>
          <AboutMe title="Achievements">
            <p>
              <b>2019</b> Stpln Design award - Sustainable Upcycle project with
              SYSAV.
            </p>
            <p>
              <b>2019</b> Created Makerspace Girls - STEM workshops for teens.
            </p>
            <p>
              <b>2018</b> Organised 2 large marketing events in China for a
              private educational organisation.
            </p>
            <p>
              <b>2014</b> Top 20 award - Marketing coordinator in Africa for
              deVere Investments
            </p>
            <p>
              <b>2013</b> Top 20 award - Marketing coordinator in Africa for
              deVere Investments
            </p>
          </AboutMe>
        </section>
      </div>
    </div>
  );
}
