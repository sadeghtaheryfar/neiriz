import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router'


const ScrollToTop = () => {
    const { pathname } = useLocation();
    // const navigate = useNavigate();
    // navigate(0);

    // var a = document.getElementsByTagName("a");

    // a.forEach((btnAlert, index) => {
    //     btnAlert.addEventListener("click", function (event) {
    //         btnAlert.addEventListener("touchend", function() {
    //             this.classList.remove("active");
    //         });
    //         document.body.classList.remove("alert-tp");
    //         console.log("hi");
    //     });
    // });

    useEffect(() => {
        document.getElementById('menu-mobile').classList.remove('active-menu-mobile');
        document.getElementById('menu-mobile').classList.add('disable-menu-mobile');
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollToTop;