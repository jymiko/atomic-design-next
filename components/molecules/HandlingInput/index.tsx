import { Input } from "components/atoms"
import Typografi from "components/atoms/Typografi"

type Props = {
  type?: string,
  placeholder?: string,
  disable?: boolean,
  title?: string,
}

const HandlingInput = (props:Props) => {
  return (
    <div>
        <Input type={props.type} placeholder={props.placeholder} disabled={props.disable} className={'w-full'}/>
        <Typografi title={props.title} className={'text-amaranth text-sm'}/>
    </div>
  )
}

HandlingInput.defaultProps = ({
  type: '',
  placeholder: '',
  disable: false,
  title: '',
})

export default HandlingInput