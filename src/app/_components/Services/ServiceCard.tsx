import Image from "next/image";

const ServiceCard = (props: any) => {
    return <div className="relative group w-9/12 md:w-full lg:w-9/12">
        <div
            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600  blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"></div>
        <div
            className="h-full relative p-10 bg-white ring-1 ring-gray-900/5  leading-none flex items-top justify-start flex-col">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="flex justify-center m-4">
                    <Image className="pic-services-color" src={props.icon} alt={props.serviceName} width={100}
                           height={100}/></div>
                <div
                    className="text-3xl md:text-4xl text-center font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">{props.serviceName}</div>
                <div><p className="pt-8">{props.children}</p></div>
            </div>
        </div>
    </div>
}

export default ServiceCard;