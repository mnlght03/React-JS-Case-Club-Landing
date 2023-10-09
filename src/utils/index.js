export const DESKTOP_VIEWPORT_THRESHOLD =
    process.env.REACT_APP_DESKTOP_VIEWPORT_THRESHOLD;

export const isDesktopPredicate = () =>
    window.innerWidth > parseInt(DESKTOP_VIEWPORT_THRESHOLD);

export const headingTextDesktop = 'lg:text-7xl';
export const bigTextMobile = 'text-3xl';
export const bigTextDesktop = 'lg:text-5xl';
export const mediumTextMobile = 'text-2xl';
export const mediumTextDesktop = 'lg:text-[42px]';
export const textMobile = 'text-lg';
export const textDesktop = 'lg:text-3xl';
export const smallTextMobile = 'text-md';
export const smallTextDesktop = 'lg:text-lg';
export const xsTextDesktop = 'lg:text-xs';
export const smTextDesktop = 'lg:text-sm';
export const smTextMobile = 'text-sm';
export const baseTextDesktop = 'lg:text-base';

export const openInNewTab = (url) => {
    window.open(url, '_blank').focus();
};

export const getApiImageUrl = (url) => process.env.REACT_APP_API_BASE + 'img/' + url;
