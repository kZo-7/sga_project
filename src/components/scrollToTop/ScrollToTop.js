import React, { useState, useEffect } from 'react';
import { CgArrowUpO } from "react-icons/cg";

const ScrollToTop = () => {
    const [showTopButton, setShowTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='button2Top'>
            {/* <div className='button2Top-container'> */}
                {showTopButton && (
                    <CgArrowUpO
                        className='button2Top_position button2Top_style'
                        size="40"
                        onClick={goToTop}
                    />
                )}
            {/* </div> */}
        </div>
    )
};

export default ScrollToTop;