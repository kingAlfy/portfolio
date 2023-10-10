import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

function useMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (windowWidth >= 976) {
            setIsMenuOpen(true);
        }
    }, [])


    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return {
        isMenuOpen,
        openMenu,
        closeMenu,
    };
}

export default useMenu;