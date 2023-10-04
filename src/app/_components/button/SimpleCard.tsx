import Link from "next/link";

const SimpleCard = (props) => {
    return <>
        <div className="text-4xl flex items-center justify-center bg-white m-0.5 rounded-3xl p-6 shadow-2xl  w-full">
            {props.children}
        </div>
    </>;
}

export default SimpleCard;