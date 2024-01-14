import Image from "next/image";
import { User } from "../libs/definitions";

export default function SideNav({ user }: { user: User }) {
  return (
    <div className="flex flex-col justify-center mt-3">
      <div className="bg-primary-blue w-2/5 text-center self-center p-3 rounded-lg text-center text-white font-normal text-xl antialiased">
        {user.name.charAt(0)}
      </div>
      <div className="self-center mt-10">
        <div className="pt-5">
          <Image
            src="dashboard/sidenav/home-icon-inactive.svg"
            width={34}
            height={34}
            alt="Home icon"
          />
        </div>
        <div className="p-1 mt-10 border-2 border-primary-blue rounded-lg ">
          <Image
            src="dashboard/sidenav/chat-icon-active.svg"
            width={34}
            height={34}
            alt="Home icon"
          />
        </div>
      </div>
    </div>
  );
}
