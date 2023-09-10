import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import Projects from "../components/projects"
import BlogSection from "../components/blog-sec"
import { SubscribeSection } from "../components/subscribe-sec"

function Dashboard(){
    return(
        <div className="bg-slate-900 text-gray-100">
        <Navbar />
        <HeroSection />
        <Projects />
        <BlogSection />
        <SubscribeSection />
        </div>
    )

}

export default Dashboard