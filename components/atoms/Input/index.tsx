import { ReactElement } from "react"
import classnames from 'classnames'

type Props = {
    type?: string,
    className?: string,
    placeholder?: string,
    disabled?: boolean
}

const Input = (props:Props):ReactElement => {
    return(
        <input type={props.type} className={classnames(props.type, props.className)} placeholder={props.placeholder}/>
    )
}

Input.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
    disabled: false
}

export default Input