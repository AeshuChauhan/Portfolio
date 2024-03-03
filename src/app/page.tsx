import UserInfo from "@/components/user-info/Info";
import Sections from "@/components/Sections/Sections";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <main className="m-5 grid gap-y-5">
        {/* About Us Component */}
        <UserInfo />
        {/* Header NavBar */}
        <Sections />

        {/* <StickyScrollRevealDemo /> */}
      </main>
    </div>
  );
}
