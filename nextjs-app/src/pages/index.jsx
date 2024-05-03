import { Header } from "@/components/Header";
import Count from "mf/components/Count";
// import HelloWorld from "mf/components/HelloWorld";

// import dynamic from "next/dynamic";
// const Count = dynamic(
//   () => import("mf/components/Count"),
//   {
//     ssr: true,
//   }
// );
// teste

export default function Home() {
  return (
  <>
    <Header />
  
    <Count />
  </>
  );
}