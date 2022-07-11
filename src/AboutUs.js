import React  from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function AboutUs() {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
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
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="col-md-12 img-fluid">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="ab1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="ab1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="ab1.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary ">
                    <h1>Who Are we?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 img-fluid ">
                <img src="ab2.jpg" class="d-block w-100" alt="..."/> 
                </div>
                <div className="col-md-6">
                    <p className="text-primary fw-bold bg-light fst-italic ">
                    We help hundreds of students decide their careers. We guarantee that Verzeo is 'the' one-stop online learning platform that provides students with all the resources needed to make them industry-ready. We aim to deliver our mantra “Everything Learning” to every household that is brewing an aspiring careerist.
                    </p>
                    <br/>
                    <p className="text-primary fw-bold fst-italic">
                        We provide basic programs in 3 different language to help beginers .
                        The programs we provided is must be known by the every programmer.
                    </p>
                    <br/>
                    <p className="text-primary fw-bold fst-italic">
                         we are also learning the the programs so we are introducing this kind of website to help people or developer who are intersted to learn progrms. This is our first try if we you enjoy our effort we willo continue next step by creating the another website  
                    </p>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                  <h1>More About Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                <p className="text-primary fw-bold fst-italic">
                    We are developing this organization on the order given by "Manoj Sharma" who is the CEO of this organization. He still Link student doing bacholer Engineering in AMCEC college. Main aim is to henance students coding part by giving this type of easy coading. 
                </p>
                <br/>
                <p className="text-primary fw-bold fst-italic">
                    We are start this organization first time and hoping Everyone to support our effort.That will encourage our energy to do this type of website that will helpfull for lots of student who are want to learn coding in easy way.
                </p>
                <br/>
                <p className="text-primary fw-bold fst-italic">
                we are also learning the the programs so we are introducing this kind of website to help people or developer who are intersted to learn progrms. This is our first try if we you enjoy our effort we willo continue next step by creating the another website  
                </p>
                </div>
                <div className="col-md-5">
                <img src="man.jpeg" class="d-block w-100" alt="..."/> 
                </div>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12 text-center text-light bg-dark">
          copy Right @2022
        </div>
        </div>
        </>
        

    )
}
export default AboutUs