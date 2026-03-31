import React from 'react';
import footerLogo from '/DigiTools-footer.png'
const Footer = () => {
  return (
    <div className=' bg-[#09090B] pt-16'>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 w-11/12 mx-auto">
      <div>
        <img src={footerLogo} alt="footerlogo" />
        <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
      </div>
  <nav>
    <h6 className=" text-gray-100 font-bold text-lg">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="text-gray-100 font-bold text-lg">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="text-gray-100 font-bold text-lg">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>

  

  
</footer>
    <div className='divider before:bg-gray-800 after:bg-gray-800 container mx-auto'></div>
    <div className='text-gray-500 flex justify-between w-11/12 mx-auto py-2'>
    <p>© 2026 Digitools. All rights reserved.</p>

    <div>
      <ul className='flex gap-6'>
        <li><a href="">Privacy Policy</a> </li>
        <li><a href="">Terms of Service</a> </li>
        <li><a href="">Cookies</a> </li>
      </ul>
    </div>
  </div> 
    </div>
    
  );
};

export default Footer;