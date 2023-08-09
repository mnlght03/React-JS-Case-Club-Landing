export const isDesktopPredicate = () =>
    window.innerWidth > parseInt(process.env.REACT_APP_DESKTOP_VIEWPORT_THRESHOLD);


export const headingTextDesktop = 'xl:text-7xl';
export const bigTextMobile = 'text-3xl';
export const bigTextDesktop = 'xl:text-6xl';
export const mediumTextMobile = 'text-xl';
export const mediumTextDesktop = 'xl:text-[42px]';
export const textMobile = 'text-lg';
export const textDesktop = 'xl:text-3xl';
