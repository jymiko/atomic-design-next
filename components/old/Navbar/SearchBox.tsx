import { SearchIcon, XIcon } from '@heroicons/react/outline'

const SearchBox = () => {
  return (
    <div className="flex grow relative min-w-[200px] mx-3 md:mx-auto">
        <div className="flex justify-center items-center bg-white-smoke h-10 px-4 rounded-l-full">
            <SearchIcon className="w-5 h-5 text-dim-gray text-base"/>
        </div>
        <div className="relative w-full h-10 bg-white-smoke text-dim-gray rounded-r-full pr-0 lg:pr-10">
            <input
                type="text"
                className="hidden lg:block bg-white-smoke h-full w-full outline-none"
                placeholder="Cari Produk"
            />
            <input
                type="text"
                className="block lg:hidden bg-white-smoke h-full w-full outline-none rounded-r-full"
                placeholder="Cari Produk"
            />
        </div>
    </div>
  )
}

export default SearchBox