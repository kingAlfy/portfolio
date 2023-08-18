import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

function useMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const windowWidth = useWindowWidth();
    console.log("ww", windowWidth)
    useEffect(() => {
        if (windowWidth >= 976) {
            setIsMenuOpen(true);
            console.log("hay cambios")
            console.log(windowWidth)
        }
    }, [])


    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    console.log(isMenuOpen);
    return {
        isMenuOpen,
        openMenu,
        closeMenu,
    };
}

export default useMenu;