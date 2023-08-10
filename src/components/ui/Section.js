import React from 'react';

export default function Section({
    classes = '',
    bgColor = 'bg-transparent',
    rounded = false,
    topRoundMargin = false,
    roundFill = 'bg-black',
    children = null,
    ...props
}) {
    return (
        <div className='w-full flex justify-center bg-black'>
            <div className={`w-full max-w-[2400px] ${roundFill}`}>
                <div
                    className={`w-full max-w-[2400px] overflow-hidden flex justify-center py-4 px-4 xl:px-48 xl:py-8 ${bgColor}
                    ${ rounded ? 'rounded-t-[50px] xl:rounded-t-[115px]' : '' }
                    ${ topRoundMargin ? 'pt-12 xl:pt-24' : '' }`
                    }
                >
                    <div
                        className={`max-w-[1200px] w-full ${classes}`}
                        {...props}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
