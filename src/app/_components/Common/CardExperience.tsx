import {useState} from "react";

const CardExperience = (props: any) => {

    const [colors, setColors] = useState(['bg-cs-yellow-light', 'bg-cs-pink-light', 'bg-cs-blue-light'])
    const [color, setColor] = useState(colors[0])
    const [i, setI] = useState(1)


    return <div className={
        " " + color +
        " rounded-3xl p-5" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-[full] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 " +
        props.className
    }>
        <button className="h-full w-full" onClick={()=> {
            let nbValues = colors.length;
            console.log("----------")
            console.log("nbValues: " + nbValues)
            console.log("i: " + i)
            console.log("color: " + color)
            console.log("----------")
            if (i == nbValues ) {
                setColor(colors[0]);
                setI(1);
            } else {
                setColor(colors[i]);
                setI( i + 1);
            }
        }}></button>
        {props.children}
    </div>
}

export default CardExperience;