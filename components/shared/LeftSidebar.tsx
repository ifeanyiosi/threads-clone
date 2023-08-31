import React from "react";
import {sidebarLinks} from '@/constants'
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => (
          <Link className="leftsidebar_link" key={link.label} href={link.route}>
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            <p className="text-light-1 max-lg:hidden"> {link.label} </p>
          </Link>
        ))}
      </div>
      s
    </section>
  );
};

export default LeftSidebar;
