import React from 'react';

function Popup({
    classes = '',
    closeFn,
    bgColor = 'bg-light_black',
    topRoundMargin = false,
    children
}) {
    return (
        <div
            className='fixed bottom-0 left-0 right-0 top-0 flex justify-center bg-black/70'
            onClick={closeFn}
            style={{zIndex: '2'}}
        >
            <div
                className={
                    `w-full max-w-[2400px] h-fit fixed bottom-0 overflow-hidden  py-4 px-4 xl:px-48 xl:py-8 
                    ${bgColor} ${topRoundMargin ? 'pt-12 xl:pt-24' : ''} 
                    rounded-t-[50px] xl:rounded-t-[115px]`
                }
                onClick={e => e.stopPropagation()}
            >

                <div
                    className={`max-w-[1200px] w-full ${classes}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Popup;