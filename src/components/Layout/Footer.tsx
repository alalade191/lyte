import React from "react";
import Image from "next/image";
export const Footer = () => {
  return (
    <section className="w-full">
      <div className="mx-auto pt-[120px] bg-[#1E222F] px-6">
        <div className="lg:pl-6 pl-0 flex lg:flex-row flex-col space-y-5 items-start lg:space-x-40 space-x-0 pb-[90px]">
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-[#CB6686] text-2xl">
              Lyte-Hosting{" "}
            </h3>
            <p className="font-normal lg:text-lg text-base text-white max-w-[400px]">
              1942 BROADWAY STREET, BOULDER CO, US Copyright 2023
              LyteHosting.com{" "}
            </p>
            <div className="flex items-center gap-3">
              <Image src="/Facebook.svg" width={20} height={20} alt="socila" />
              <Image src="/Twitter.svg" width={30} height={30} alt="socila" />
              <Image src="/Instagram.svg" width={30} height={30} alt="socila" />
              <Image src="/LinkedIn.svg" width={30} height={30} alt="socila" />
              <Image src="/YouTube.svg" width={30} height={30} alt="socila" />
            </div>
          </div>
          <div className="flex flex-wrap lg:items-start lg:space-x-24 w-full justify-between lg:justify-normal gap-y-5 lg:gap-0">
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-xl text-white">Hosting</h3>
              <p className="font-normal lg:text-lg text-base text-white">
                Share Hosting
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Reseller Hosting
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                VPS Hosting
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                WordPress Hosting
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-xl text-white">Company</h3>
              <p className="font-normal lg:text-lg text-base text-white">
                About Us
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Testimonials
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Our Blogs
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                All Our Products
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-xl text-white">Contact</h3>
              <p className="font-normal lg:text-lg text-base text-white">
                Contact Us
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Submit Tickets
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Terms & Condition
              </p>
              <p className="font-normal lg:text-lg text-base text-white">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-full h-[1px] bg-[#D9DBE9]"></div>
          <div className="flex lg:flex-row flex-col space-y-5 items-center justify-between py-4">
            <p className="font-normal lg:text-lg text-base text-white">
              Copyright © 2024{" "}
            </p>
            <div className="flex items-center gap-2 justify-center w-full">
              <Image src="/paypal.svg" width={50} height={50} alt="socila" />
              <Image src="/visa.svg" width={50} height={50} alt="socila" />
              <Image
                src="/mastercard.svg"
                width={50}
                height={50}
                alt="socila"
              />
              <Image
                src="/america.svg"
                width={50}
                height={50}
                alt="socila"
                className="bg-white rounded-md"
              />
            </div>
            <p className="font-normal text-center lg:text-start lg:text-lg text-base text-white">
              All Rights Reserved |{" "}
              <span className="underline">Terms and Conditions</span> |{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
