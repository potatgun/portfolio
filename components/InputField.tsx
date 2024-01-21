import { ChangeEventHandler, useState } from "react"

export type Props = {
  displayName: string,
  name: string,
  type: string,
  required: boolean,
  handleChange: ChangeEventHandler,
  value: string,
  errorMessage?: string,
  lastName: string
}

function InputField(props: Props) {
  const [beenFocused, setBeenFocused] = useState<boolean>(false)


  return ( 
    <label htmlFor={props.name} className="flex flex-col h-24 w-[20rem] md:w-[30rem]">
      <h1 className="mb-2">{props.displayName}</h1>
      <input 
        onBlur={() => setBeenFocused(true)}
        onFocus={(e) => e.target.name === props.lastName && setBeenFocused(true)}
        required={props.required}
        name={props.name}
        type={props.type}
        id={props.name}
        onChange={props.handleChange}
        value={props.value}
        className={"peer border-2 outline-none focus:border-red-400 hover:border-red-600  border-black border-dashed p-2 rounded-md shadow-xl "
      }
      />
      { 
        beenFocused && 
        props.errorMessage && 
        <div className="peer-invalid:block hidden mt-2 text-red-600">{props.errorMessage}</div>
      }

    </label>
  )
}

export default InputField