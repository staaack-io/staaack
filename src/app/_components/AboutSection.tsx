import ServiceCard from "@/app/_components/button/ServiceCard";
import BubbleCard from "@/app/_components/button/BubbleCard";

const ServiceSection = () => {
    return <section className="bg-split-b-w h-screen">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 justify-items-center">
            <div className="col-span-2 text-2xl">
                About
            </div>
            <div>
                photo
            </div>
            <div>
                bla bla salut je suis alexis
            </div>
        </div>
        <div className="h-min-screen grid sm:grid-cols-2 lg:grid-cols-4  gap-x-3 gap-y-5 justify-items-center">
            <div className="">
                <BubbleCard count={10} image="" info="Ceci est un test"></BubbleCard>
            </div>
            <div>
                <BubbleCard count={10} image="" info="Ceci est un test2"></BubbleCard>
            </div>
            <div>
                <BubbleCard count={10} image="" info="Ceci est un test3"></BubbleCard>
            </div>
            <div>
                <BubbleCard count={10} image="" info="Ceci est un test4"></BubbleCard>
            </div>
        </div>
    </section>;
}

export default ServiceSection;