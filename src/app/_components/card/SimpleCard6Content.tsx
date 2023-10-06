const SimpleCard8Content = (props) => {
    return <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 justify-center items-center">
            <span className="text-center text-2xl lg:text-3xl font-bold">Since</span>
            <span
                className="text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">2023</span>
        </div>
    </div>;
}

export default SimpleCard8Content;