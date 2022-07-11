import React  from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function Java() {
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
      <img src="java.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="java.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="java.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h2>What is Java? Executive Summary</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-primary">
                <p className=" text-center">Java is Link general purpose, high-level programming language first released by Sun Microsystems in 1995. It is designed to have as few implementation dependencies as possible, is free to use, and can run on all platforms. It is concurrent, class-based, and object-oriented. Simply put, Java is Link computing platform where users can develop applications.</p>
                <p className="text-center">Java is similar to C++ but is simplified to eliminate language features that cause common programming errors. The source code files, meaning files with Link .java extension, are compiled into Link format known as bytecode, which are files with Link .class extension. This can then be executed by Link Java interpreter. Bytecode can be directly converted into machine language instructions by Link just-in-time compiler.</p>
                <p className="text-center">Java Virtual Machine (JVM): JVM is an engine that provides Link runtime environment to drive the Java code or applications. It is the center of the programming language and performs the operation of converting Java bytecode into machine language. It provides numerous libraries, frameworks, and tools.<br/>

Java Runtime Environment (JRE): JRE is Link runtime environment that is required to execute Java programs and applications. If Link user wants to run Link Java program in their machine, they must have JRE installed on the machine. It’s platform dependent, meaning the JRE installed must be compatible with the user’s operating system and architecture.<br/>

Java Development Kit (JDK): JDK is the core component of the Java environment. It contains JRE along with Java compiler, Java debugger, and other classes. It’s used for Java development to provide the entire executables and binaries as well as the tools to compile and debug Link Java program.</p>
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
export default Java