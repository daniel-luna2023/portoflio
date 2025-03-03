import AboutMe from "@/components/about-me";
import Contact from "@/components/contacts";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
  <main className="pb-40">
    <Navbar/>
    <Introduction/>
    <AboutMe/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </main>
  );
}
