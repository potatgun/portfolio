type Props = {
  text?: string,
  header?: string
  extraStyles?: string
}

function TextBlock({header, text, extraStyles}: Props) {
  return (
    <div className={extraStyles + " " +
      ` 
        border-dashed border-2 rounded-lg border-black shadow-xl
        p-4 text-center
      `
    }
      >
        { header && <h1 className="font-bold text-2xl text-center">{header}</h1>}
        { text && <p>{text}</p> }
      </div>
  )
}

export default TextBlock