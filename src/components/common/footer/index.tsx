import { PrismicNextLink } from '@prismicio/next';
import { PrismicImage } from '@prismicio/react';
import Link from 'next/link';

import { createClient } from '@/prismicio';

import Bounded from '../containers/bounded';
import Image from '../images/image';
const dataImnage = [
  '/assets/images/home/media.png',
  '/assets/images/home/media2.png',
  '/assets/images/home/media3.png',
  '/assets/images/home/media4.png',
  '/assets/images/home/media5.png',
  '/assets/images/home/media6.png',
  '/assets/images/home/media7.png',
];
const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settins');
  return (
    <div className="mt-8">
      <div className="flex w-full flex-nowrap">
        {dataImnage.map((img, index) => (
          <Image
            key={index}
            src={img}
            className="aspect-square w-full"
            alt=""
          />
        ))}
      </div>
      <div className="bg-[#0f0f0f] text-neutral-100">
        <Bounded as="footer" className="divide-y divide-neutral-800">
          <div className="flex flex-col items-center justify-between space-y-3 py-8 md:flex-row md:items-end">
            <PrismicImage field={settings.data.logo} className="w-20" />
            <div className="flex items-center justify-end space-x-2">
              <Link
                className="text-md-medium need-help"
                href="/tel:1-800-222-8888"
              >
                Need help? Call us
              </Link>
              <Link
                className="text-xl font-semibold text-yellow-500"
                href="/tel:1-800-222-8888"
              >
                1-800-222-8888
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-16 py-8 lg:grid-cols-12 lg:space-y-0">
            <div className="col-span-4">
              <div className="flex flex-col space-y-5">
                <h3 className="text-lg font-semibold">
                  {settings.data.host[0]?.label}
                </h3>
                <div className="flex items-center justify-start space-x-2 text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                    />
                  </svg>
                  <p>{settings.data.host[0]?.address}</p>
                </div>
                <div className="flex items-center justify-start space-x-2 text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6"
                    />
                  </svg>
                  <p>{settings.data.host[0]?.active_time}</p>
                </div>
                <div className="flex items-center justify-start space-x-2 text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="currentColor">
                      <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                      <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
                    </g>
                  </svg>
                  <p>{settings.data.host[0]?.mail}</p>
                </div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex items-center space-x-3">
                  {settings.data.socials.map((social, index) => (
                    <PrismicNextLink
                      field={social.link}
                      key={index}
                      className="hover:-tranneutral-y-1 rounded-full border border-neutral-700 p-2 transition-transform duration-200 hover:border-yellow-400 hover:text-yellow-400"
                    >
                      {social.icon === 'facebook' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fill="currentColor"
                            d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
                          />
                        </svg>
                      ) : social.icon === 'instagram' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fill="currentColor"
                            d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.599c0-.784.218-1.319 1.342-1.319h1.434V5.857a19 19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"
                          />
                        </svg>
                      ) : social.icon === 'twitter' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fill="currentColor"
                            d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fill="currentColor"
                            d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
                          />
                        </svg>
                      )}
                    </PrismicNextLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="grid grid-cols-1 space-y-16 sm:grid-cols-2 md:space-y-0 lg:grid-cols-4">
                <div className="flex flex-col space-y-5">
                  <h3 className="text-lg font-semibold">Support</h3>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Forum support
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Help center
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Live chat
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    How it works
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Security
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Privacy
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Changes logs
                  </p>
                </div>
                <div className="flex flex-col space-y-5">
                  <h3 className="text-lg font-semibold">Company</h3>
                  <Link
                    href="/about"
                    className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400"
                  >
                    About Us
                  </Link>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Community Blog
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Jobs and Careers
                  </p>
                  <Link
                    href="contact"
                    className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400"
                  >
                    Contact Us
                  </Link>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Our Awards
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Agencies
                  </p>
                </div>
                <div className="flex flex-col space-y-5">
                  <h3 className="text-lg font-semibold">Services</h3>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Tour Guide
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Tour Booking
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Hotel Booking
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Ticket Booking
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Rental Services
                  </p>
                </div>
                <div className="flex flex-col space-y-5">
                  <h3 className="text-lg font-semibold">Legal</h3>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Terms of Service
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Privacy Policy
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Cookies Policy
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Data Processing
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Data Policy
                  </p>
                  <p className="cursor-pointer text-neutral-400 transition-colors duration-150 hover:text-neutral-400">
                    Refund Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between space-y-4 py-8 md:flex-row">
            <p>
              © {new Date().getFullYear()} Lalala Inc. All rights reserved.
            </p>
            <div className="flex items-center justify-end space-x-5 text-sm">
              <Link href="#">Term</Link>
              <Link href="#">Privacy policy</Link>
              <Link href="#">Legal notice</Link>
              <Link href="#">Acessibility</Link>
            </div>
          </div>
        </Bounded>
      </div>
    </div>
  );
};

export default Footer;
