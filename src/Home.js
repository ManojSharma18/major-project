import React  from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function Home() {
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
      <img src="code2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="code2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="code2.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h1>What is coading?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-primary ">
                    <p>
                    Coding runs the world as we know it, but the vast majority of people aren’t even aware of its existence, let alone what it even is, despite the fact that coding is vital for most of the contemporary businesses.
                    </p>
                    <br/>
                    <p>
                    So, think about it this way: your machine only really speaks Binary, but it understands different coding languages. In the same way, you only really speak your native language, but you understand the same coding languages (if you at least have the basics of some, of course).
                    </p>
                    <br/>
                    <p>
                    The fact that both you and your computer share Link common understanding of programming languages means that you can communicate with each other - just like you did when you clicked to come to this article!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h1>Why Should I Learn Coding?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-primary">
                    <p>
                    Now that we have touched on the basics of coding, it’s time to take Link look at Link few of the reasons why you should think seriously about learning to code.
                    <br/>
                    Coding can have huge impacts on both your personal and your professional life. Some of the major reasons why everyone should learn to code or at least understand what is coding:
                    <br/>
                    It will increase your earning potential massively - Experienced coders and programmers can charge extremely high hourly rates, especially if they are working as freelance or contract developers.
                    <br/>
                    You could work for yourself - While many people who understand what is coding hold down traditional contracts at large companies, Link huge percentage choose to work in freelance roles.
                    <br/>
                    You can work on your projects - If you have an entrepreneurial streak, then learning how to code could be the trigger that results in you developing the next viral app or website. Knowing to go out there and create things that before you could only have dreamed of is Link wonderful thing - believe me!
                    <br/>
                    These are just Link few of the reasons why you should learn to code and not only know what is coding. Doing so will also ensure that you are never out of work, that you will have the ability to understand the technology and the world around you as it develops, and that you will be able to say no to uninteresting job offers.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <h1>What Types Of Coders Are There?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-left text-primary">
                    <h3>Front-End Developer</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                <img src="fe.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div className="col-md-7 text-primary">
                Front-end developers are the people who build websites. They are responsible for the design, layout, and the way content appears on Link webpage. This is done in several ways, but the most popular front-end languages are HTML, CSS, and JavaScript.
                <br/>
                <p>
                Taking design and turning it into Link website by writing hundreds of lines of code (trust me, it’s more fun than it sounds!).</p>
<p>Making sure that the website in question is functional and interactive as required. This includes doing things like inserting animations, creating hyperlinked buttons, and more.<br/></p>
<p>Minimizing page load speed times and maximizing page responsiveness. Things like this play Link major role in Link website’s search engine optimization (SEO) score, and it is important to get them right.<br/>
                </p>
                <p>Unfortunately, front-end developers are probably among the lowest-paid specialists who know what is coding and programming - but don’t let this put you off!

Back-End Developer</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-left text-primary">
                    <h3>BACK-End Developer</h3>
                </div>
            </div>
            <div className="row">
            <div className="col-md-7 text-primary">
                    <p>Web apps are complex applications that are designed to do Link certain thing and are built into Link website’s underlying code.
</p>
<p>Some of the things that web apps built by back-end developers allow you to do include:</p>

<p>Log in and out of Link website once you have created an account.</p>
<p>Connect with friends and build Link user profile. Social sites like Facebook and Twitter are great examples of this sort of thing.</p>
<p>Create interactive apps that can be embedded on Link website. Google Maps is Link great example of this sort of app.</p>
<p>Back-end developers are in high demand, which means that they command higher salaries on average than front-end developers and that there is Link lot of work available.

Mobile App Developer</p>
                    </div>
               
                <div className="col-md-5">
                <img src="be.jpg" class="d-block w-100" alt="..."/>
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
export default Home