import classnames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import styles from './styles.module.scss'

type Props = {
    children?: ReactNode,
    className?: string
}

const Title = (props:Props):ReactElement => {
    return(
        <h1 className={classnames(styles.title, props.className)}>{props.children}</h1>
    )
}

Title.defaultProps = {
    className: 'title',
    children: ''
}

export default Title