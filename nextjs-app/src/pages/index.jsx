import { Header } from "@/components/Header";
import dynamic from "next/dynamic";
// import  Count from "count/Count";
// import HelloWorld from "mf/components/HelloWorld";

const Count = dynamic(() => import("count/count"), {
  ssr: false, // Important: ensures it only runs on the client
});

export default function Home() {

  console.warn(Count)
  return (
  <>
    <Header />
  
    <Count />
  </>
  );
}