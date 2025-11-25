import Container from '@/app/components/Container/Container';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="  bg-[#21212F] ">
        <Container className="footer sm:footer-horizontal p-10 text-white">
          <aside>
            <Link href="/">
              <h2 className="text-2xl font-bold">
                <span className="text-[#FFC27A]">e</span>Dex
              </h2>
            </Link>
            Ut pharetra ipsum nec leo blandit, <br /> sit amet tincidunt eros
            pharetra. <br />
            Nam sed imperdiet turpis. In hac <br /> habitasse platea dictumst.{' '}
            <br />
            Praesent nulla massa, hendrerit vestibulum <br />
            gravida in, feugiat auctor felis.
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
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
        </Container>
      </footer>
    </>
  );
};

export default Footer;
