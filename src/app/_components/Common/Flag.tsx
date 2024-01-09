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
                       width = 200,
                       numOfColumns = 10,
                       staggeredDelay = 100,
                       billow = 2,
                   }) {

    const friendlyWidth =
        Math.round(width / numOfColumns) * numOfColumns;

    const firstColumnDelay = numOfColumns * staggeredDelay * -1;

    return (
        <div className="flag p-5" style={{ width: friendlyWidth }}>
            {[1,2,3,4,5,6,7,8,9].map((columnIndex) => (
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
    );
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