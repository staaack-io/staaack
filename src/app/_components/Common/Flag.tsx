import React from 'react';

function Flag({
                  colors = [
                      '#EF2F3E',
                      '#EF2F3E',
                      '#EF2F3E',
                      '#FFFFFF',
                      '#FFFFFF',
                      '#FFFFFF',
                      '#00A4E0',
                      '#00A4E0',
                      '#00A4E0'
                  ],
                  width = 170,
                  numOfColumns = 10,
                  staggeredDelay = 100,
                  billow = 2,
              }) {

    const friendlyWidth =
        Math.round(width / numOfColumns) * numOfColumns;

    const firstColumnDelay = numOfColumns * staggeredDelay * -1;

    return <div className={
        " rounded-3xl" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 "
    }>
        <div className="rounded-3xl flag" style={{width: "100%", height: "100%"}}>
        {/*<div className="flag p-5" style={{width: friendlyWidth}}>*/}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((columnIndex) => (
                <div
                    key={columnIndex}
                    className="column"
                    style={{
                        // @ts-ignore
                        '--billow': columnIndex * billow + 'px',
                        background: generateGradientString(colors),
                        animationDelay:
                            firstColumnDelay + columnIndex * staggeredDelay + 'ms',
                    }}
                />
            ))}
        </div>
    </div>
}

function generateGradientString(colors: any) {
    const numOfColors = colors.length;
    const segmentHeight = 100 / numOfColors;

    const gradientStops = colors.map((color: any, index: any) => {
        const from = index * segmentHeight;
        const to = (index + 1) * segmentHeight;

        return `${color} ${from}% ${to}%`;
    });

    return `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
}

export default Flag;