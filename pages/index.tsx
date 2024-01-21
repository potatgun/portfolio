import AboutMe from "../components/AboutMe"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { Props as CardProps } from "../components/Card"

import data from "../data/projectsData.json"


function Main({projects}: { projects: CardProps[]}) {
    return( 
      <div className="relative">
        <NavBar />
        <main>
          <AboutMe />
          <Projects projects={projects} />
          <Contact />
        </main>
      </div>
    )
}

export const getStaticProps = () => {
  const projects = data
  return {
    props: {
      projects
    }
  }
}
export default Main
