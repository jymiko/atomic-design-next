import Image from 'next/Image'
import GooglePlay from 'assets/playStore.png'
import AppStore from 'assets/appStore.png'

const Footer = () => {
  return (
    <footer>
        <div className="bg-pattern-blue py-8 lg:py-10">
            <div className="lg:container lg:mx-auto px-6 md:px-8 md:grid md:grid-cols-2">
                <div>
                    <p className="block font-bold text-xl lg:text-2xl">Kejutan spesial dari kami untukmu.</p>
                </div>
                <div className="pt-4 md:pt-0 auto-cols-auto place-items-center md:place-content-end">
                    <div className="flex md:justify-end">
                        <input
                            className="px-4 py-2 w-2/3 rounded-l-md outline-none"
                            placeholder="Masukkan email anda disini"
                        />
                        <div>
                            <button className="bg-cobalt text-white px-6 py-2 rounded-r-md">
                                Daftar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto py-10 grid grid-flow-col place-items-center">
            <ul className="space-y-4">
                <li className="text-cobalt font-bold">Informasi Belanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-cobalt font-bold">Informasi Belanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-cobalt font-bold">Informasi Belanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
                <li>Berbelanja</li>
            </ul>
            <div className='w-1/2 space-y-4'>
                <span className="block text-cobalt font-bold">Aplikasi Seluler Kami</span>
                <span className='block'>Download aplikasi <span className="font-bold">Gramedia.com</span> yang tersedia di seluruh perangkat iOS dan Android</span>
                <div className="flex gap-x-6">
                    <Image src={GooglePlay} />
                    <Image src={AppStore} />
                </div>
            </div>
        </div>
        <div className='bg-pattern-blue flex justify-center py-1'>
            gramedia.com
        </div>
    </footer>
  )
}

export default Footer
