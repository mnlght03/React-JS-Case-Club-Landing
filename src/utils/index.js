export const isDesktopPredicate = () =>
    window.innerWidth > parseInt(process.env.REACT_APP_DESKTOP_VIEWPORT_THRESHOLD);
