import Footer from "components/old/Footer/Footer"
import NavbarMobile from "components/old/Navbar/NavbarMobile"
import NavbarPrimary from "components/old/Navbar/NavbarPrimary"

const defaults = ({children}:any) => {
  return (
    <div>
        <div className="hidden lg:block">
            {/* <NavbarPrimary/> */}
            header
        </div>
        <div className="block lg:hidden">
            {/* <NavbarMobile/> */}
        </div>
        <div>
          <main>{children}</main>
        </div>
    </div>
  )
}

export default defaults