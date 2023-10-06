import Link from "next/link";

const DoubleCard = (props) => {
    return <div className="grid grid-cols-2">
        <div className="flex items-center justify-end rounded-l-3xl shadow-2xl bg-purple-700">
                <div className="absolute text-2xl text-white -rotate-90 text-center">{props.serviceName}</div>
        </div>
        <div className="flex items-center justify-center bg-white m-0.5 rounded-r-3xl p-6 shadow-2xl h-full w-full">
            {props.children}
        </div>
    </div>;
}

export default DoubleCard;