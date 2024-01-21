import Card, { Props as CardProps } from "./Card"

type Props = {
  projects: CardProps[]
}

function Projects({projects}: Props) {
  return (
    <div id="projects" className="
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      items-center w-screen gap-8 p-12 mb-12 shadow-lg
      border-b-2 border-t-2 border-dashed border-black 
    ">
      {
        projects.map((project) => {
          return <Card key={project.id} {...project}/>
        })
      }
    </div>
  )
}



export default Projects