import { InputProps } from "../global"

const Input = (props: InputProps): JSX.Element => {
  console.log(props)
  return <input  {...props} />
}

export default Input