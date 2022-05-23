import React from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer class="footer-02">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-5">
                        <div class="row">
                            <div class="col-md-12 col-lg-8 mb-md-0 mb-4">
                                <h2 class="footer-heading"><a class="logo">Micro Center</a></h2>
                                <p>A small manufacturing named Micro Center a.k.a. MC by their place and supplies it with the necessary components.</p>
                                <a>read more<span class="ion-ios-arrow-round-forward"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-7">
                        <div class="row">
                            <div class="col-md-3 mb-md-0 mb-4 footer-border">
                                <h2 class="footer-heading">Discover</h2>
                                <ul class="list-unstyled">
                                    <li><a class="py-1 d-block">Buy &amp; Sell</a></li>
                                    <li><a class="py-1 d-block">Merchant</a></li>
                                    <li><a class="py-1 d-block">Giving back</a></li>
                                    <li><a class="py-1 d-block">Help &amp; Support</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-4 footer-border">
                                <h2 class="footer-heading">About</h2>
                                <ul class="list-unstyled">
                                    <li><a class="py-1 d-block">Staff</a></li>
                                    <li><a class="py-1 d-block">Team</a></li>
                                    <li><a class="py-1 d-block">Careers</a></li>
                                    <li><a class="py-1 d-block">Blog</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-4 footer-border">
                                <h2 class="footer-heading">Resources</h2>
                                <ul class="list-unstyled">
                                    <li><a class="py-1 d-block">Security</a></li>
                                    <li><a class="py-1 d-block">Global</a></li>
                                    <li><a class="py-1 d-block">Charts</a></li>
                                    <li><a class="py-1 d-block">Privacy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-4 footer-border">
                                <h2 class="footer-heading">Social</h2>
                                <ul class="list-unstyled">
                                    <li><a class="py-1 d-block">Facebook</a></li>
                                    <li><a class="py-1 d-block">Twitter</a></li>
                                    <li><a class="py-1 d-block">Instagram</a></li>
                                    <li><a class="py-1 d-block">Googleplus</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row partner-wrap mt-5">
                    <div class="col-md-12">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="mb-0">Our Partner:</h3>
                            </div>
                            <div class="col-md-9">
                                <p class="partner-name mb-0">
                                    <a><span class="ion-logo-ionic mr-2"></span>HP</a>
                                    <a><span class="ion-logo-ionic mr-2"></span>ASUS</a>
                                    <a><span class="ion-logo-ionic mr-2"></span>corsair</a>
                                    <a><span class="ion-logo-ionic mr-2"></span>amd</a>
                                    <a><span class="ion-logo-ionic mr-2"></span>intel</a>
                                    <a><span class="ion-logo-ionic mr-2"></span>microsoft</a>
                                </p>
                            </div>
                            <div class="col text-md-right">
                                <p class="mb-0"><a class="btn-custom">See All <span class="ion-ios-arrow-round-forward"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6 col-lg-8">

                        <p class="copyright">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script>Micro Center. All rights reserved.
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-4 text-md-right">
                        <p class="mb-0 list-unstyled">
                            <a class="mr-md-3">Terms</a>
                            <a class="mr-md-3">Privacy</a>
                            <a class="mr-md-3">Compliances</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;