import Image from "next/image";

const SimpleCard4Content = (props:any) => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center text-7xl">
            <Image src={"./img/vegan.svg"} alt={"vegan"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-xl">
            <span
                className="font-bold text-transparent bg-gradient-to-r from-green-600 via-green-200 to-green-400 inline-block bg-clip-text">Vegan</span>
        </div>
    </div>;
}

export default SimpleCard4Content;