import Image from "next/image";

const SimpleCard8Content = (props: any) => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center">
            <Image src={"/img/planet.svg"} alt={"planet"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-l md:text-xl">
            <span className="font-bold inline-block">Only remote work</span>
        </div>
    </div>
}

export default SimpleCard8Content;