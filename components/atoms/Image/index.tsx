import Image from 'next/image'
import classnames from 'classnames'
import styles from './styles.module.scss'
import DefaultImage from 'assets/product.png'

type Props = {
    imageUrl?: string,
    alt?: string,
    className?: string
}

const ImageComponent = (props:Props) => {
  return (
    <>
        <Image src={props.imageUrl} alt={props.alt} className={classnames(props.className)} />
    </>
  )
}

ImageComponent.defaultProps = {
    imageUrl: DefaultImage,
    alt: '',
    className: ''
}

export default ImageComponent