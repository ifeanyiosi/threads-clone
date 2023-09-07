"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              className={`bottombar_link ${isActive && "bg-[#26a7de]"}`}
              key={link.label}
              href={link.route}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {" "}
                {link.label.split(/\s+/)[0]}{" "}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
