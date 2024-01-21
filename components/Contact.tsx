import { FormEvent, ChangeEvent, useState } from "react"

import { Props as InputProps } from "./InputField"
import InputField from "./InputField"
import Envelope from "./icons/Envelope"

type Props = {}

function Contact({}: Props) {
  const [userInput, setUserInput] = useState({
    email: "",
    subject: "",
    text: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement

    setUserInput(prev => { 
      return {
        ...prev, 
        [target.name]: target.value
      }
    })
  }

  const inputs: InputProps[] = [
    {
      displayName: "Your email address",
      name: "email",
      type: "email",
      required: true,
      handleChange,
      value: userInput.email,
      errorMessage: "email is required",
      lastName: "text"
    },
    {
      displayName: "Subject",
      name: "subject",
      type: "text",
      required: true,
      handleChange,
      value: userInput.subject,
      errorMessage: "subject is required",
      lastName: "text"
    }
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // todo email stufs
  }

  return (
    <section id="concact" className="mb-12" >
      <form onSubmit={handleSubmit} className="mx-10 flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-2xl text-center" >Contact me</h1>

          { inputs.map(input => {
            return <InputField key={input.name} {...input} />
          })}
        <label htmlFor="textarea" className="flex flex-col w-[20rem] md:w-[30rem]">
          <h4>Message</h4>
          <textarea
            id="textarea" 
            name="text" 
            className="border-2 outline-none focus:border-red-400 hover:border-red-600 border-black border-dashed p-2 rounded-md shadow-md " 
          />
        </label>
        <button type="submit" className="flex w-24 border-2 outline-none justify-around focus:border-red-400 hover:border-red-600 border-black border-dashed p-2 rounded-md shadow-xl">Send <Envelope /></button>
      </form>
    </section>
  )
}

export default Contact
