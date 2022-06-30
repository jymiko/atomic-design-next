import Link from 'next/link'

const NavbarMenu = () => {
  return (
        <div className="w-full bg-white text-nero-black h-10 border-t border-dim-gray/10 my-4">
            <div className="container flex items-center justify-between md:mx-6 lg:mx-auto lg:px-4 xl:px-0 my-4">
                <div className="flex items-center cursor-pointer">
                    <Link href="/promo"><p className="text-sm font-bold mr-5 hover:text-cobalt">Promo</p></Link>
                    <p className="text-sm font-bold mr-5">Customer Service</p>
                    <p className="text-sm font-bold mr-5">Toko Offline</p>
                    <p className="text-sm font-bold">Riwayat Pencarian</p>
                </div>
                <div className="h-full flex items-center cursor-pointer">
                    <Link href="/faq"><p className="text-sm font-bold hover:text-cobalt">Bantuan</p></Link>
                    <div className="w-px h-3/5 mx-5 py-2 bg-dim-gray/25"/>
                    <p className="text-sm font-bold hover:text-cobalt">Aktifkan poin My Value ?</p>
                </div>
            </div>
        </div>
  )
}
export default NavbarMenu
