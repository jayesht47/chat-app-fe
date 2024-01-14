import { randomUUID } from "crypto";
import { User } from "../libs/definitions";
import SideNav from "./sidenav";

export default function Dashboard() {
  const testuser: User = {
    email: "test@anymail.com",
    name: "Jayesh Thakur",
    id: "test-id-1",
  };

  return (
    <main className="flex min-h-screen">
      <div className="basis-1/12">
        <SideNav user={testuser} />
      </div>
      <div className="basis-3/12">B</div>
      <div className="basis-5/12">C</div>
      <div className="basis-3/12">D</div>
    </main>
  );
}
