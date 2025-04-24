import Gallery from "./components/gallery/gallery";
import MaxCard from "./components/maxCard/maxCard";
import HomePage from "./home/page";
import ShowOff from "./showoff/showOff";

export default function Home() {
  return (
    <>
      <HomePage />
      <MaxCard />
      <ShowOff />
      <Gallery />
    </>
  );
}
