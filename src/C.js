import React  from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function C() {
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
                <div className="col-md-12">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="c.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="c.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="c.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h2>What is C Program? Executive Summary</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-primary">
                    <p className="text-center">C belongs to the structured, procedural paradigms of languages. It is proven, flexible and powerful and may be used for Link variety of different applications. Although high level, C and assembly language share many of the same attributes.</p>
                    <p className="text-center">Fixed number of keywords, including Link set of control primitives, such as if, for, while, switch and do while
Multiple logical and mathematical operators, including bit manipulators<br/>
Multiple assignments may be applied in Link single statement.<br/>
Function return values are not always required and may be ignored if unneeded.<br/>
Typing is static. All data has type but may be implicitly converted.<br/>
Basic form of modularity, as files may be separately compiled and linked<br/>
Control of function and object visibility to other files via extern and static attributes</p>
                </div>
            </div>
            <div className="row">
        <div className="col-md-12 text-center text-light bg-dark">
          copy Right @2022
        </div>
        </div>
        </div>
        </>
        

    )
}
export default C