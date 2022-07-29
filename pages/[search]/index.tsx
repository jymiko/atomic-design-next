import { withRouter } from "next/router"

const search = withRouter((props) => {
    return (
        <>
            {props.router.query.q}
            {props.router.query.type}
        </>
    )
})

export default search