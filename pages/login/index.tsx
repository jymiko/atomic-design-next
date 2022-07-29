// ** React Imports
import ImageComponent from 'components/atoms/Image'
import Logo from 'assets/logo.svg'
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '../../layouts/default'
import LoginForm from 'components/organisms/LoginForm'

const Login = () => {
    return(
        <div className='grid grid-cols-2'>
            <div>
                <LoginForm/>
            </div>
            <div>
                Kanan
            </div>
        </div>
    )
}

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Login