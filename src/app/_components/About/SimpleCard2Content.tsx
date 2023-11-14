const SimpleCard2Content = (props: any) => {
    return <div className="flex justify-center items-center">
        <div className="h-full w-full overflow-hidden">
            <div className="flex justify-center items-center">
                <span
                    className="text-2xl lg:text-3xl font-bold font-color-logo">Permis</span>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-2 text-3xl">
                    <div className="mr-4">🚗</div>
                    <div></div>
                    <div></div>
                    <div className="ml-3">🏍</div>
                </div>
            </div>
        </div>
    </div>;
}

export default SimpleCard2Content;