import TextBlock from "../components/TextBlock"

function AboutMe() {
    return( 
      <section id="aboutme" className="flex flex-col h-[90vh] md:flex-row md:justify-around lg:max-w-[80%] lg:mx-auto gap-12 p-12 justify-center">
        <TextBlock extraStyles="md:flex-1 md:max-w-xl hidden md:block" header="Image"/>
        <div className="flex h-full md:flex-1 md:max-w-xl flex-col gap-12">
          <TextBlock extraStyles="flex-1" header="About Me"/>
          <TextBlock extraStyles="flex-1" header="Skils"/>
        </div>
        {/* TODO: need to put an image here instead of this */}
      </section>
    )
}

export default AboutMe
