import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-4 bg-base-200 text-base-content p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-full" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="text-center mt-6">
                <p>© 2025 E-commerceSite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;