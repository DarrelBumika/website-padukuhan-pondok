import Hero from "@/components/module/Home/Hero";
import Profile from "@/components/module/Home/Profile";
import Sambutan from "@/components/module/Home/Sambutan";
import Organization from "@/components/module/Home/Organization";
import Potention from "@/components/module/Home/Potention";
import News from "@/components/module/Home/News";
import Closing from "@/components/module/Home/Closing";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Hero />
      <Profile />
      <Sambutan />
      <Organization />
      <Potention />
      <News />
      <Closing />
    </div>
  );
}

export default HomePage;