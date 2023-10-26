import Image from "next/image";

const SimpleCardLogoStaaaackContent = (props:any) => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center text-7xl">
            <Image src={"./img/logo.svg"} alt={"vegan"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-xl">
            <span
                className="font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">staaack</span>
        </div>
    </div>;
}

export default SimpleCardLogoStaaaackContent;