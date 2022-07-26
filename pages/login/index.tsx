// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '../../layouts/default'

const Login = () => {
    return(
        <div>
            login page
        </div>
    )
}

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Login