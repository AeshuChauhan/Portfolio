import About from "@/components/about/About";
import { NavBar } from "@/components/navbar/NavBar";
// import Image from "next/image";

export default function Home() {
  return (
    <main >
      {/* Header NavBar */}
      <NavBar />

      {/* About Us Component */}
      <About />
      <div className="divide"></div>
    </main>
  );
}
