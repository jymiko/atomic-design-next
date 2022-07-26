import Image from 'next/Image'
import GooglePlay from 'assets/playStore.png'
import AppStore from 'assets/appStore.png'

const Footer = () => {
  return (
    <footer>
        <div className="bg-pattern-blue py-8 lg:py-10">
            <div className="lg:container lg:mx-auto px-6 md:px-8 md:grid md:grid-cols-2">
                <div>
                    <p className="block font-bold text-lg lg:text-2xl">Kejutan spesial dari kami untukmu.</p>
                </div>
                <div className="pt-4 md:pt-0 auto-cols-auto place-items-center md:place-content-end">
                    <div className="flex md:justify-end">
                        <input
                            className="px-4 py-2 w-full md:w-2/3 rounded-l-md outline-none"
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
        <div className="hidden lg:grid container mx-auto py-10  grid-flow-col place-items-center">
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
                    <Image src={GooglePlay} alt='Google Play'/>
                    <Image src={AppStore} alt='App Store' />
                </div>
            </div>
        </div>
        <div className='block lg:hidden py-8 text-sm'>
            <ul className='flex flex-wrap space-x-4 items-center justify-center text-dim-gray'>
                <li>Berbelanja</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Pembayaran</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Pengiriman</li>
            </ul>
            <ul className='flex flex-wrap space-x-4 items-center justify-center text-dim-gray'>
                <li>Tentang Kami</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Toko Kami</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Kerjasama</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Karir</li>
            </ul>
            <ul className='flex flex-wrap space-x-4 items-center justify-center text-dim-gray'>
                <li>Syarat & Ketentuan</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Kebijakan Privasi</li>
                <li className='h-1.5 w-1.5 bg-dim-gray/60 rounded-full'/>
                <li>Bantuan</li>
            </ul>
            <ul className='flex flex-wrap space-x-4 items-center justify-center text-dim-gray'>
                <li>Hubungi Kami</li>
            </ul>
        </div>
        <div className='block lg:hidden py-8 border-y border-dim-gray/60'>
            <span className='block text-sm text-center'>
                Download aplikasi <span className='font-bold'>Gramedia Digital</span> yg tersedia di iOS dan Android
            </span>
            <div className="flex justify-center pt-6 gap-x-6">
                <Image src={GooglePlay} alt='Google Play'/>
                <Image src={AppStore} alt='App Store' />
            </div>
        </div>
        <div className='hidden lg:flex  bg-pattern-blue justify-center py-1'>
            gramedia.com
        </div>
    </footer>
  )
}

export default Footer
