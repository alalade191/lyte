import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
export const Review = () => {
  const reviews = [
    {
      name: "Abdulazeez Mubarak",
      image: "/image1.svg",
      location: "📍 Lagos State, Nigeria",
      review:
        "Their hosting is very affordable and their costumer service is the best",
    },
    {
      name: "Sayles Russell",
      image: "/image2.svg",
      location: "📍 United State ",
      review:
        "I recently started using Lytehosting and so far, my experience has been positive.",
    },
    {
      name: "Code Naija Hub",
      image: "/image3.svg",
      location: "📍 FCT, Abuja, Nigeria ",
      review:
        "Trust worthy, one of the best reliable hosting company. Fast response time, with 24/7 no downtime. Good services. I must commend the company.",
    },
    {
      name: "Victor Edet",
      image: "/image4.svg",
      location: "📍 Jos State, Nigeria",
      review:
        "These guys are excellent. Excellent in customer service. I have been using other host until i found them & they have been on top of their game.s",
    },
  ];
  return (
    <section>
      <div className="bg-[url('/map.svg')] bg-contain bg-center bg">
        <div className="flex flex-col space-y-5 mt-10 px-6">
          <div className="flex items-center justify-center">
            <Button className="font-medium text-lg bg-white !py-5 text-center items-center justify-center rounded-[89.58px] text-[#666D80] border-[#E0E2E6] border">
              Our Reviews ⭐
            </Button>
          </div>
          <h3 className="font-medium lg:text-[50px] text-[25px]  text-center text-[#212325]">
            What Our Clients Says ?
          </h3>
          <p className="text-center font-normal flex items-center mx-auto lg:text-lg text-base text-[#666D80]">
            1,000+ Customers Served. 3+ Years of Experience.
          </p>
        </div>

        <section className="grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center gap-y-8 lg:mt-20 mt-10 px-6">
          {reviews?.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-5">
              <div className="flex items-center gap-6">
                <Image src={item.image} width={50} height={50} alt="user" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-[#98989A] text-xl">
                    {item.name}
                  </h3>
                  <p className="font-normal text-lg text-[#666666]">
                    {item.location}
                  </p>
                </div>
              </div>

              <section className="relative mt-6">
                <div className=" border border-[#F9FAFC] bg-[#F9FAFC] rounded-xl w-fit">
                  <p className="font-normal text-lg text-[#98989A] max-w-[280px] text-center py-8 px-5">
                    {item.review}
                  </p>
                </div>
                <div className="flex items-center gap-2 border border-[#F9FAFC] bg-[#F9FAFC] p-4 rounded-2xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Star fill="#FFCE22" className="text-[#FFCE22] w-5 h-5" />
                  <Star fill="#FFCE22" className="text-[#FFCE22] w-5 h-5" />
                  <Star fill="#FFCE22" className="text-[#FFCE22] w-5 h-5" />
                  <Star fill="#FFCE22" className="text-[#FFCE22] w-5 h-5" />
                  <Star fill="#FFCE22" className="text-[#FFCE22] w-5 h-5" />
                </div>
              </section>
            </div>
          ))}
        </section>
      </div>

      <div className="border border-[#E0E2E6] rounded-xl flex items-center gap-2 w-fit py-3 px-5 justify-center mx-auto mt-10 cursor-pointer">
        <h3 className="font-medium text-base text-[#161618]">
          See other customers reviews{" "}
        </h3>
        <div className="flex items-center">
          <Image src="/tag.svg" width={30} height={30} alt="user" />
        </div>
      </div>
    </section>
  );
};
