import Image from "next/image";

const SimpleCard9Content = () => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center">
            <Image className="" src={"/img/document.svg"} alt={"cv"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-l md:text-xl">
            <span className="font-bold inline-block">Resume</span>
        </div>
    </div>
}

export default SimpleCard9Content;