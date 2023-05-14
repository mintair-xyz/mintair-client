import JoinWaitList from "@/components/Home/JoinWaitList";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/Home/Hero";
import MainSection from "@/components/Home/MainSection";
import Footer from "@/components/shared/Footer";

const index = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
};

export default index;
