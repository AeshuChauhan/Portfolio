import UserInfo from "@/components/user-info/Info";
import Sections from "@/components/Sections/Sections";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:container h-screen">
      <main className="p-5 grid md:grid-cols-12 md:gap-2 gap-y-2">
        {/* About Us Component */}
        <div className="md:col-span-5 lg:col-span-4">
          <UserInfo />
        </div>
        <div className="md:col-span-7 lg:col-span-8">

          <Sections />
        </div>

        {/* <StickyScrollRevealDemo /> */}
      </main>
    </div>
  );
}
