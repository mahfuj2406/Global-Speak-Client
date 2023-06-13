import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/images/image-1.jpg';
import img2 from '../../../assets/images/image-2.jpg';
import img3 from '../../../assets/images/image-3.jpg';



const Banner = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className='relative'>
                <img className='h-[400px] object-center object-cover' src={img1} />
                <div className='flex justify-center'>
                    <div className='absolute bottom-10'>
                        <button className='btn bg-gradient-to-r from-purple-600 to-pink-600'>View Classroom</button>
                        <h1 className='p-2 rounded-lg font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Korean Language class</h1>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[400px] object-center object-cover' src={img2} />
                <div className='flex justify-center'>
                    <div className='absolute bottom-10'>
                        <button className='btn bg-gradient-to-r from-purple-600 to-pink-600'>View Classroom</button>
                        <h1 className='p-2 rounded-lg font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Chinese Language class</h1>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[400px] object-center object-cover' src={img3} />
                <div className='flex justify-center'>
                    <div className='absolute bottom-10'>
                        <button className='btn bg-gradient-to-r from-purple-600 to-pink-600'>View Classroom</button>
                        <h1 className='p-2 rounded-lg font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>English Language class</h1>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;