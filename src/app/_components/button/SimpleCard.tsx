import Link from "next/link";

const SimpleCard = (props) => {
    return <>
        <div className="text-4xl flex bg-white m-0.5 rounded-lg p-6 shadow-xl">
            {props.children}
        </div>
    </>;
}

export default SimpleCard;