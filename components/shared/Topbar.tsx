import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dark } from "@clerk/themes";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <p className="text-heading3-bold text-light-1 max-xs:hidden hover:text-[#26a7de] transition ">
          Ifeanyiosi
        </p>
      </Link>

      <div className="flex items-center gap-1 ">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/logout.svg"
                  height={24}
                  width={24}
                  alt="sign in/out"
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
