import { useState } from 'react'
import Inscription from './inscription'



function Home() {
  const [page , setPage] = useState('homePage')

  const handlPage = (page) => {
    if(page === "homePage"){
      return (
        <div>
          <section className="home" style={{backgroundImage : `url(/images/backgroundImage.png)`}}>
    {/* <button style={{marginTop : '25%' , marginLeft : '50%'}} onClick={() =>{setPage('inscriptionPage')}}>Inscritption</button> */}
</section>
      </div>
      )
    }
    else if(page === "inscriptionPage") {
      return (
        <>
        <Inscription />
        </>
      )
      
    }
  } 
return (
    <>
      {handlPage(page)}
    </>
  )
}

export default Home