import React  from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function Python() {
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
      <img src="python.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="python.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="python.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h2>What is Python? Executive Summary</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-primary">
                    <p className="text-center">Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as Link scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.</p>
                    <p className="text-center">Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: Link bug or bad input will never cause Link segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints Link stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code Link line at Link time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug Link program is to add Link few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.</p>
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
export default Python