import { ChevronLeftIcon, EyeOffIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import vectorLogin from 'assets/login.png'
import LoginBy from 'components/old/Login/LoginBy'

 const login = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <button>
                    <ChevronLeftIcon
                        className="h-8 w-8 mt-10 ml-4 md:ml-10 text-nero-black"
                    />
                </button>
                <div className='mx-8 md:mx-auto mt-6 mb-14'>
                    <div className="max-w-md m-auto">
                        <div className="flex items-center flex-col">
                            <Image src={logo} alt="Gramedia Digital" className="w-45" />
                        </div>
                        <h1 className="font-bold text-2xl pt-10 pb-8 text-nero-black">
                            Masuk
                        </h1>
                        <div className="flex flex-col text-nero-black">
                            <label className="text-base" htmlFor="Email Address">
                                Email Address
                            </label>
                            <input
                                className="border-b-2 max-w-md py-2 mb-1 border-dim-gray/10 focus:border-cobalt/50 focus:outline-none"
                                id="email"
                                type="text"
                                name="email"
                            />
                            <p className="text-amaranth my-2 ">Email yang anda masukkan tidak valid</p>
                        </div>
                        <div className="flex flex-col text-nero-black">
                            <label className="text-base" htmlFor="Email Address">
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    className="border-b-2 max-w-md w-full pr-9 py-2 mb-1 border-dim-gray/10 focus:border-cobalt/50 focus:outline-none"
                                    type='password'
                                    name="password"
                                    id="password"
                                />
                                <button>
                                    <EyeOffIcon
                                        className="absolute h-5 right-2 top-2.5 text-nero-black"
                                        fill="none"
                                        stroke="currentColor"
                                    />
                                </button>
                            </div>
                            <p className="text-amaranth my-2 ">Password kurang dari 8 karakter</p>
                            <span className="my-2 cursor-pointer text-cobalt">
                                Lupa kata sandi?
                            </span>
                        </div>
                        <div className="flex items-center flex-col lg:pt-24">
                            <button
                                type="submit"
                                className={'bg-cobalt text-white-smoke w-full lg:w-auto mt-10 mb-4 lg:px-24 py-2 text-base font-bold radius rounded-full lg:rounded-md'}
                            >
                                Masuk
                            </button>
                            <p className="mb-4 hidden lg:block">
                                Baru di Gramedia Digital ?{' '}
                                <span className="text-cobalt cursor-pointer">
                                    Daftar
                                </span>
                            </p>
                        </div>
                        <div className="items-center">
                            <div className="flex my-2 text-dim-gray gap-x-2 items-center justify-center">
                                <div className="h-px w-52 bg-dim-gray/25" />
                                    atau
                                <div className="h-px w-52 bg-dim-gray/25" />
                            </div>
                        </div>
                        <div className="">
                            <LoginBy thirdParty={'MyValue'} />
                        </div>
                        <div className="hidden lg:flex items-center flex-col">
                            <span className="mt-10  text-center text-sm md:text-left">
                                Butuh bantuan?{' '}
                                Hubungi Gramedia Digital Customer Service
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block  m-auto'>
                <Image src={vectorLogin} alt="img-login" />
            </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 pt-3 pb-8 bg-white lg:hidden">
            <div className="flex justify-center items-center py-2">
                <p className="text-center">
                    Belum memiliki akun?{' '}
                    <span className="text-cobalt cursor-pointer font-bold">
                        Register di sini
                    </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default login