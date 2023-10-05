import Link from "next/link";

const BubbleCardColor = ({info, count, image}) => {
    return   <div className="flex flex-row m-auto bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 rounded-lg ">
        <div className="flex bg-white m-0.5 rounded-lg p-6">
        <div className="my-auto">
            <div className="text-lg text-purple-300">{info}</div>
            <div className="text-4xl text-purple-100">{count}</div>
        </div>
        <div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
        </div>

        </div>
    </div>
}

export default BubbleCardColor;