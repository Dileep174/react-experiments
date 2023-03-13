import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: `900px`}}>
                            <h5 className="text-white text-uppercase">Best Gym Center</h5>
                            <h1 className="display-2 text-white text-uppercase mb-md-4">Build Your Body Strong With Gymster</h1>
                            <a to="" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</a>
                            <a to="" className="btn btn-light text-dark py-md-3 px-md-5">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: `900px`}}>
                            <h5 className="text-white text-uppercase">Best Gym Center</h5>
                            <h1 className="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</h1>
                            <a to="" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</a>
                            <a to="" className="btn btn-light py-md-3 px-md-5">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: `900px`}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit:`cover`}}/>
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
                            <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" to="#pills-1">About Us</a>
                        </li>
                        <li className="nav-item w-50">
                                <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" to="#pills-2">Why Choose Us</a>
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
    <div className="container-fluid programe position-relative px-5 mt-5" style={{marginBottom:`135px`}}>
        <div className="row g-5 gb-5">
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-six-pack display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Body Building</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-barbell display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Weight Lefting</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                    <i className="flaticon-bodybuilding display-1 text-primary"></i>
                    <h3 className="text-uppercase my-4">Muscle Building</h3>
                    <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                    <a className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
                <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                <a to="" className="btn btn-primary py-3 px-5">Become A Member</a>
            </div>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="text-primary text-uppercase">className Schedule</h5>
            <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
        </div>
        <div className="tab-className text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white active" data-bs-toggle="pill" to="#tab-1">Monday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-2">Tuesday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-3">Wednesday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-4">Thursday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-5">Friday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-6">Saturday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" to="#tab-7">Sunday</a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-5" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-6" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-7" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase text-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase text-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase text-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase text-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase text-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase text-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase text-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase text-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark facts p-5 my-5">
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
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="text-primary text-uppercase">The Team</h5>
            <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src="img/team-1.jpg" alt="img"/>
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background:`rgba(34, 36, 41, .9)`}}>
                        <h5 className="text-uppercase text-light">John Deo</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src="img/team-2.jpg" alt="img"/>
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background:`rgba(34, 36, 41, .9)`}}>
                        <h5 className="text-uppercase text-light">James Taylor</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="team-item position-relative">
                    <div className="position-relative overflow-hidden rounded">
                        <img className="img-fluid w-100" src="img/team-3.jpg" alt="img"/>
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-square rounded-circle mx-1" to="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background:`rgba(34, 36, 41, .9)`}}>
                        <h5 className="text-uppercase text-light">Adam Phillips</h5>
                        <p className="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid p-0 my-5">
        <div className="row g-0">
            <div className="col-lg-6" style={{minheight: `500px`}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{objectfit: `cover`}}/>
                </div>
            </div>
            <div className="col-lg-6 bg-dark p-5">
                <div className="mb-5">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item">
                        <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img"/>
                            <div className="ps-4">
                                <h5 className="text-uppercase text-light">Client Name</h5>
                                <span className="text-uppercase text-secondary">Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img"/>
                            <div className="ps-4">
                                <h5 className="text-uppercase text-light">Client Name</h5>
                                <span className="text-uppercase text-secondary">Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="text-primary text-uppercase">Our Blog</h5>
            <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4">
                <div className="blog-item">
                    <div className="position-relative overflow-hidden rounded-top">
                        <img className="img-fluid" src="img/blog-1.jpg" alt="img"/>
                    </div>
                    <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 className="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a className="h5 text-uppercase text-light" to=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog-item">
                    <div className="position-relative overflow-hidden rounded-top">
                        <img className="img-fluid" src="img/blog-2.jpg" alt="img"/>
                    </div>
                    <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 className="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a className="h5 text-uppercase text-light" to=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog-item">
                    <div className="position-relative overflow-hidden rounded-top">
                        <img className="img-fluid" src="img/blog-3.jpg" alt="img"/>
                    </div>
                    <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 className="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a className="h5 text-uppercase text-light" to=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
