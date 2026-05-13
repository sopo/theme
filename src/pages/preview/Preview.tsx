import PreviewHeader from "./components/header"
import HeroImage from "./components/hero-image"
import TabBar from "./components/tabs"


const Preview=()=>{
    return(
        <div className="w-full mt-20 bg-neutral-100">
        <div className="flex flex-col w-xs mx-auto bg-white">
            <div className="h-60 relative">
            <PreviewHeader />
            <HeroImage />
        
            </div>
                <TabBar />
        </div>
        </div>
    )
}
export default Preview