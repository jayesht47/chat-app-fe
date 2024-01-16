import Link from "@/node_modules/next/link";
import Image from "next/image";
import { User } from "../libs/definitions";

const ICON_DIMENSION = 34;

export default function SideNav({ user }: { readonly user: User }) {
  return (
    <div className="flex flex-col justify-center mt-3">
      <div className="bg-primary-blue w-2/5 self-center p-3 rounded-lg text-center text-white font-asap font-bold antialiased cursor-pointer">
        {user.name.charAt(0)}
      </div>
      <div className="self-center mt-10">
        <div className="flex justify-center pt-5 cursor-pointer">
          <Link href="/">
            <Image
              src="dashboard/sidenav/home-icon-inactive.svg"
              width={ICON_DIMENSION}
              height={ICON_DIMENSION}
              alt="Home icon"
            />
          </Link>
        </div>
        <div className="p-1 mt-10 rounded-lg cursor-pointer">
          <Image
            src="dashboard/sidenav/chat-icon-active.svg"
            width={ICON_DIMENSION}
            height={ICON_DIMENSION}
            alt="Home icon"
          />
        </div>
      </div>
    </div>
  );
}
