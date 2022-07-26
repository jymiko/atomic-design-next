import Link from 'next/link'
import classnames from 'classnames'

import styles from './style.module.scss'

type Props = {
    className: string,
    text: string,
    href: string
} 

const LinkComponent = (props:Props) => {

    return(
        <Link href={'/'+props.href}>
            <span className={classnames(styles.navlink, props.className)}>{props.text}</span>
        </Link>
    )
}

LinkComponent.defaultProps = {
    className: '',
    text: '',
    href: '#'
}

export default LinkComponent