interface ScreenSize {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}
declare const useScreenSize: () => ScreenSize;
export default useScreenSize;
