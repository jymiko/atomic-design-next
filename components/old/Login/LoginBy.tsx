import Image from 'next/image'
import Google from 'assets/google.png'
import MyValue from 'assets/myvalue.png'

type SSO = {
    thirdParty: string
}

const LoginBy = ({ thirdParty }: SSO) => {
  return (
    <button className=" flex justify-center rounded-md shadow p-4 w-full md:w-7/12 mx-auto">
      {thirdParty === 'Google' ? <Image src={Google} alt='Google'/> : <Image src={MyValue} alt='MyValue' /> }
        <span className="px-2">
            Login dengan {thirdParty}
        </span>
    </button>
  )
}

export default LoginBy