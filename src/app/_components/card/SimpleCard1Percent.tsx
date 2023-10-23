import Image from "next/image";

const SimpleCard1Percent = (props) => {
    return <>
        <div className="flex justify-center items-center h-full w-full">
           <Image className="h-full w-full md:w-auto" src="/img/1percent.png" alt="1percentfortheplanet" height={600} width={254}></Image>
        </div>
    </>
}

export default SimpleCard1Percent;