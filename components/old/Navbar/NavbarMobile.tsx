import SearchBox from "./SearchBox"

const NavbarMobile = () => {
  return (
    <div className="fixed top-0 w-full py-4 bg-white z-20 shadow-header">
        <div className="px-2 md:px-8 flex items-center">
            <SearchBox/>
        </div>
    </div>
  )
}

export default NavbarMobile
