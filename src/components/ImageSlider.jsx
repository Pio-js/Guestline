import { useState } from 'react';
import './css/ImageSlider.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    let slider = slides.map((slide, i) => {
        return (
            <div key={i} className={i === current ? 'slide-active' : 'no-slide' } >
                {i === current && (
                    <>
                        {slide}
                    </>
                )}
            </div>
        );
    });

    return (
        <div className='slider'>
            {slider}
            {
            length <= 1 ?
            null
            :
            <>
                <MdKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
                <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
            </>
            }
        </div>
    );
};

export default ImageSlider;