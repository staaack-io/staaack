import Image from "next/image";

const SimpleCard9Content = (props) => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center text-7xl">
            <Image className="" src={"./document.svg"} alt={"cv"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-xl">
            <span className="font-bold inline-block">Resume</span>
        </div>
    </div>
}

export default SimpleCard9Content;