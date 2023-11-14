import Image from "next/image";

const SimpleCardLogoStaaaackContent = (props: any) => {
    return <div className="flex flex-col w-full h-full justify-center items-center">
        <Image src={"/img/logo.png"} alt={"vegan"} height={65} width={65}></Image>
        <div
            className="text-7xl font-bold font-color-logo">staaack
        </div>
    </div>;
}

export default SimpleCardLogoStaaaackContent;