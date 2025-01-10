"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ swiperInstance, containerStyles, btnStyles, iconsStyles }) => {
    
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiperInstance?.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiperInstance?.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;