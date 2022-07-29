import { useRouter } from 'next/router'
import Link from 'next/link'

const ProductDetail = (() => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <>
           <h1>Details about product {productId}</h1>
           <div>
            <Link href="/login">
                <button>Login</button>
            </Link>
           </div>
        </>
    )
})

export default ProductDetail