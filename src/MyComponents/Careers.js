import React from 'react'
import "./css/Careers.css";
import image from "./images/carousel-1.jpg";

const Careers = () => {
  return (
    <>  
    <div className="container-fluid bg-primary p-5 bg-hero mb-5" style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover', }}>
        <div className="row py-5">
            <div className="col-12 text-center">
                <h1 className="display-2 text-uppercase text-white mb-md-4">Careers</h1>
                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                <a href="" className="btn btn-light py-md-3 px-md-5">About</a>
            </div>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{minheight: `500px`}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectfit: `cover`}}/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="mb-4">
                    <h5 className="text-primary text-uppercase">About Us</h5>
                    <h1 className="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
                </div>
                <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                <p className="mb-4">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
                <div className="rounded bg-dark p-5">
                    <ul className="nav nav-pills justify-content-between mb-3">
                        <li className="nav-item w-50">
                            <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                        </li>
                        <li className="nav-item w-50">
                                <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-1">
                            <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                        </div>
                        <div className="tab-pane fade" id="pills-2">
                            <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid programe position-relative px-5 mt-5" style={{marginbottom: `180px`}}>
        <div className="row g-5 gb-5">
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-six-pack display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Body Building</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-barbell display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Weight Lefting</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-bodybuilding display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Muscle Building</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
                <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                <a href="" className="btn btn-primary py-3 px-5">Become A Member</a>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark facts p-5" style={{marginbottom: `90px`}}>
        <div className="row gx-5 gy-4 py-5">
            <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: `60px`, height: `60px`}}>
                        <i className="fa fa-star fs-4 text-white"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-secondary text-uppercase">Experience</h5>
                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: `60px`, height: `60px`}}>
                        <i className="fa fa-users fs-4 text-white"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-secondary text-uppercase">Our Trainers</h5>
                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: `60px`, height: `60px`}}>
                        <i className="fa fa-check fs-4 text-white"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-secondary text-uppercase">Complete Project</h5>
                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: `60px`, height: `60px`}}>
                        <i className="fa fa-mug-hot fs-4 text-white"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="text-secondary text-uppercase">Happy Clients</h5>
                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Careers
