import Image from "next/image";

const SimpleCardLogoStaaaackContent = (props: any) => {
    return <div className="flex flex-col w-full h-full justify-center items-center">
        <Image src={"./img/logo.svg"} alt={"vegan"} height={65} width={65}></Image>
        <div
            className="text-7xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">staaack
        </div>
    </div>;
}

export default SimpleCardLogoStaaaackContent;