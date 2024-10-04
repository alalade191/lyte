import React from "react";

export const Features = () => {
  const features = [
    {
      header: "24/7 Customers Support 🤳🏻  ",
      sub: "At Lyte Hosting, we pride ourselves on providing exceptional customers service around the clock",
    },
    {
      header: "100% Network Up-time Guarantee 📡",
      sub: "Your business deserves the best !, and with our 100% network up time, you can trust that your online presence active",
    },
    {
      header: "Daily Backup With One Click 🔄",
      sub: "Our daily One Click Backup features ensures your website data is secured and up to date with just a click .",
    },
    {
      header: "30 Days Money Back Guarantee 💰",
      sub: "We believe in the quality and reliability of our services. That is why we offer a 30 Days Money Back Guarantee.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 px-6 lg:mt-10 mt-20">
      {features.map((list: any, idx: number) => (
        <div
          key={idx}
          className="border border-[#E0E2E6] rounded-xl px-6 pt-3 pb-7 flex flex-col gap-2 bg-[#F9FAFC] shadow-custom2"
        >
          <h3 className="font-medium text-[#212325] lg:text-lg text-base">
            {list.header}
          </h3>
          <p className="font-normal text-[#666D80] text-base max-w-[450px]">
            {list.sub}
          </p>
        </div>
      ))}
    </div>
  );
};
