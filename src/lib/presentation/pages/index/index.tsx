import NavbarDesktopView from '../../components/navbar/medialayouts/navbarDesktopView';
import HomeDesktopView from '../home/medialayouts/homeDesktopView'
import Page2DesktopView from '../page2/medialayouts/page2DesktopView'
import Page3DesktopView from '../page3/medialayouts/page3DesktopView'
import Page4DesktopView from '../page4/medialayouts/page4DesktopView'
import Page5DesktopView from '../page5/medialayouts/page5DesktopView'

function Index() {
  return (
   <>
    <NavbarDesktopView/>
   <HomeDesktopView/>
   <Page2DesktopView/>
   <Page3DesktopView/>
   <Page4DesktopView/>
   <Page5DesktopView/>
   </>
  )
}

export default Index