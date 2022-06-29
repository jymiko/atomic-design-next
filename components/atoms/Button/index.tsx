import {ReactNode, ReactElement} from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

export const ButtonType = {
    Button: 'button',
    Reset: 'reset',
    Submit: 'submit'
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

type Props = {
    type: string,
    theme: string,
    size: string,
    onClick: Function,
    onChange: Function,
    children: ReactNode,
    className: string,
    disabled: boolean,
}

const Button = (props: Props):ReactElement => {
    const { type, onClick, children, theme, size, className, disabled } = props
    const classProps: string = classnames(
        styles.button,
        styles[theme],
        styles[size],
        {
          [styles.disabled]: disabled,
        },
        className
      )
      console.log(classProps)
    return (
        <button type={type as any} onClick={onClick as any} disabled={disabled} className={classProps}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: ButtonType.Button,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.SMALL,
    onClick: () => {},
    onChange: () => {},
    className: '',
    disabled: false,
}

export default Button