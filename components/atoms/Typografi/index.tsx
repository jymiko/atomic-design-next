import classnames from 'classnames'
import styles from './styles.module.scss'

type Props = {
    title?: string,
    className?: string
}

const Typografi = (props:Props) => {
  return <span className={classnames(styles.basicColor, props.className)}>{props.title}</span>
}

Typografi.defaultProps =({
    title: '',
    classnames: ''
})

export default Typografi