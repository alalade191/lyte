"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const navbar = [
    {
      name: "Home",
      link: "/home",
    },

    {
      name: "Our Services",
      link: "/service",
    },
    {
      name: "Domains",
      link: "/domain",
    },
    {
      name: "Pages",
      link: "/pages",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const renderNavLinks = () =>
    navbar.map(({ name, link }, idx) => (
      <Link
        href={link}
        key={name}
        className="text-[#121212] font-normal text-[1.5rem]"
      >
        <div
          className=" lg:mb-0 flex items-center gap-[4.5px]"
          onClick={() => setOpen(false)}
        >
          <p> {name}</p>
          {idx === 1 || idx == 2 || idx === 3 ? <ChevronDown /> : null}
        </div>
      </Link>
    ));

  return (
    <header className="w-full sticky top-0 z-[99] backdrop-blur-md bg-white px-4 md:px-8 lg:px-20 py-2 md:py-8">
      <nav className=" mx-auto py-2 md:py-2 flex items-center justify-between border-[2px] border-[#E0E2E6] rounded-[89.58px] px-2">
        <div className="">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={18}
              height={18}
              alt="Logo"
              className="w-[50px] object-contain"
            />
          </Link>
        </div>

        <div className="lg:flex items-center space-x-10 hidden">
          {renderNavLinks()}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full  w-full bg-white flex flex-col gap-3 left-6">
            {renderNavLinks()}
          </div>
        )}

        {/* Desktop Menu */}

        <div className="flex items-center space-x-3">
          <Button className="font-medium text-lg bg-[#38333F] !py-5 text-center items-center rounded-[89.58px] text-white hidden lg:flex">
            Sign In
          </Button>
          <Button className="font-medium text-lg bg-[#CB6686] !py-5 text-center items-center rounded-[89.58px] text-white hidden lg:flex">
            Get Started
          </Button>
        </div>

        <div className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};
