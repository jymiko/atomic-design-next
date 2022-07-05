import Footer from "components/old/Footer/Footer"
import NavbarMobile from "components/old/Navbar/NavbarMobile"
import NavbarPrimary from "components/old/Navbar/NavbarPrimary"

const defaults = ({children}:any) => {
  return (
    <div>
        <div className="hidden lg:block">
            <NavbarPrimary/>
        </div>
        <div className="block lg:hidden">
            <NavbarMobile/>
        </div>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default defaults