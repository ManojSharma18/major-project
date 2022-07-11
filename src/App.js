import './App.css'
import Home from './Home'
import Language from './Language'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import AboutUs from './AboutUs'
import Python from './Python'
import Java from './Java'
import C from './C'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './card'
import BasicExample1 from './cardjava'
import BasicExample2 from './cardc'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-info">
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">EZeeCode</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">About Us</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/Language" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/Python">Python</Link></li>
            <li><Link className="dropdown-item" to="/Java">Java</Link></li>
            <li><Link className="dropdown-item" to="/C">C</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 bg-info img-fluid">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="02.jpg" className="d-block w-100 "  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="2.jpg" className="d-block w-100  " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="01.jpg" className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 bg-info img-fluid">
        <img src="971.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-7 bg-info ">
          <p className="text-light">
          Programming languages are used to control the behavior of a machine (often a computer). They can be used to create programs to control the behavior of a machine or to express algorithms.
          </p>
         
          <p className='text-light '>
          The most popular coding languages are HTML,SQL, PHP, Python, JavaScript (JS), C and Java.<br/>
          <br/>
          Here we provide some basics software programs that every programmer must know at the begining.
          In the same way that the English language has changed alongside our cultural advances, computer languages evolve alongside our technological advances, too. <br/>
          <br/>

Brian tells us, “Sometimes an existing programming language can evolve along with those changing environments. Sometimes this evolution creates new ‘flavors’ of existing languages. <br/>Other times, entirely new languages are created to better meet these new requirements.”<b/>
</p>


          
        </div>
        
      </div>
      <div className='row'>
        <div className='col-md-12 text-center text-primary'>
          <h1>TOP THREE Programming LANGUAGES</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
        <BasicExample/>
        </div>
        <div className='col-md-4'>
        <BasicExample1/>
        </div>
        <div className='col-md-4'>
        <BasicExample2/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center text-light bg-dark">
          copy Right @2022
        </div>
      </div>
    </div>}/>
    <Route path ='/Home' element = { <Home/>}/>
    <Route path ='/AboutUs' element = {<AboutUs/>}/>
    <Route path = '/Language' element = {<Language/>}/>
    <Route path = '/Python' element = {<Python/>}/>
    <Route path = '/JAva' element = {<Java/>}/>
    <Route path='/C' element = {<C/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}
export default App