import { Banner, Layout } from '../../services/Homepage'
import MenuTester from '../../components/component'

const Homepage = (props) => {
    const Banner = props.responseBanner
    const Layout1 = props.responseLayout1
    const Layout2 = props.responseLayout2
    const Layout3 = props.responseLayout3
    const Layout4 = props.responseLayout4
    const Layout5 = props.responseLayout5
    return(
        <div>
           <MenuTester data={Banner.data.results}/>
        </div>
    )
}

export async function getServerSideProps() {
    const [
        dataBanner, 
        dataLayout1, 
        dataLayout2, 
        dataLayout3, 
        dataLayout4, 
        dataLayout5] = await Promise.all([
            Banner(), 
            Layout(106), 
            Layout(108), 
            Layout(113), 
            Layout(3), 
            Layout(103)
        ])
    const [
        responseBanner, 
        responseLayout1, 
        responseLayout2, 
        responseLayout3, 
        responseLayout4, 
        responseLayout5
    ] = await Promise.all([
        dataBanner.json(), 
        dataLayout1.json(),
        dataLayout2.json(), 
        dataLayout3.json(), 
        dataLayout4.json(), 
        dataLayout5.json()
    ])
    return {
        props: {
          responseBanner,
          responseLayout1,
          responseLayout2,
          responseLayout3,
          responseLayout4,
          responseLayout5
        }
      }

}



export default Homepage