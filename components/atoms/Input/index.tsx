import { ReactElement } from "react"
import classnames from 'classnames'
import styles from './styles.module.scss'

type Props = {
    type?: string,
    className?: string,
    placeholder?: string,
    disabled?: boolean
}

const Input = (props:Props):ReactElement => {
    const {type, className, placeholder} = props
    const classProps: string = classnames(
        styles.input,
        styles[type],
        className
    )
    return(
        <input type={type} className={classProps} placeholder={placeholder}/>
    )
}

Input.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
    disabled: false
}

export default Input