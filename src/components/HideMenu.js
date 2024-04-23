import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.getElementById('menu-mobile').classList.remove('active-menu-mobile');
        document.getElementById('menu-mobile').classList.add('disable-menu-mobile');
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollToTop;