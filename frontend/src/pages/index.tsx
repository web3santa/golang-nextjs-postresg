import { Inter } from "next/font/google";
import CardComponent from "@/components/CardComponent";
import UserInterface from "@/components/UserInterface";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100">
      <div className="m-4">
        <UserInterface backendName="go" />
      </div>
    </main>
  );
}
