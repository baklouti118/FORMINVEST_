import { useState , useEffect , useRef } from 'react'
import './myCss.css'
import LesInscriptions from './lesInscriptions'
import Home from './home.jsx'
import APropos from './APropos'
import Contact from './contact'
import Galerie from './galerie'
import NosServises from './nosService'
import References from './reference'

function App() {
  const aProposRef = useRef(null);
  const nosServicesRef = useRef(null);
  const ressourcesRef = useRef(null);
  const contactRef = useRef(null);
  const [page , setPage] = useState('homePage')
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  const goToAPropos = () => {
    aProposRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const goToNosServices = () => {
    nosServicesRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const goToRessources = () => {
    ressourcesRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const goToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  const changePage = (pageName) =>{
    if(pageName === 'homePage'){
      return (<div>
        <div>
          <nav className={'nav'} style={{backgroundColor : scroll ? "black" : "" , padding : scroll ? "0" : ""}}>
  <div className="container">
    <div className="logo">
      <a onClick={() =>{window.scrollTo({ top: 0, behavior: "smooth" })
        }} href="#home">FORM INVEST</a>
    </div>
    <div id="mainListDiv" className={show ? "main_list show_list" : "main_list"}>
      <ul className="navlinks">                                              
        <li><a onClick={goToAPropos}href="#A Propos">A Propos</a></li>
        <li><a onClick={goToNosServices} href="#Nos Services">Nos Services</a></li>
        {/* <li><a onClick={() =>{setPage('ReferencesPage')}} href="#Références">Références</a></li> */}
        {/* <li><a onClick={() =>{setPage('GaleriePage')}} href="#Galerie">Galerie</a></li> */}
        <li><a onClick={()=>{
          window.scrollTo({ top: 0})
          setPage('contactPage')
        }} href="#Contact">Contact</a></li>
          <li style={{backgroundColor:'blue',width:'200px'}}><a onClick={() =>{window.scrollTo({ top: 0})
            setPage('inscriptionPage')
          }} href="#Inscriptions"> Les Inscriptions</a></li>
      </ul>
    </div>
    <div className={show ? "navTrigger active" : "navTrigger"} onClick={() => setShow(!show)}>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
  </nav> 
  </div>
  <div>
        <Home />
        <div ref={aProposRef} style={{height : "75px"}}></div>
        <APropos />
        <div style={{height : "100px"}}></div>
        <div ref={nosServicesRef} style={{height : "75px"}}></div>
      <NosServises />
      </div>
      
      </div>
      )
    }
      else if(pageName === 'inscriptionPage'){
          return (<LesInscriptions />)
      }
      else if(pageName === 'contactPage'){
        return(<Contact />)
      }
  }

  return  <div >

  {changePage(page)}
  </div>
}

export default App
