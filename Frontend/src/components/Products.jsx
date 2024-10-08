import React from 'react';
import { useNavigate } from 'react-router-dom';
import EarringCollection from './reusables/EarringCollection';
import homeEarringImage from '../assets/images/home-earring.png';
import homePendantImage from '../assets/images/home-pendant.png';
import homeDiamondImage from '../assets/images/home-diamonds.png';

const Products = () => {
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        navigate(`/store#${sectionId}`);
    };

    return (
        <div className="flex flex-col items-center mt-[6.5rem] mb-[6.5rem]">
            <h1 className='text-8xl font-bold font-sans text-[#2a264e] mb-5 pb-3 text-center'>Our Collections</h1>
            <div className="flex flex-row items-center justify-around space-x-8 p-10 shadow-lg rounded-lg border-2 border-[#ffffff] max-w-8xl">
                <div onClick={() => handleNavigation('earring-collection')} className="cursor-pointer">
                    <EarringCollection
                        title="Earring Collection"
                        imageUrl={homeEarringImage}
                    />
                </div>
                <div onClick={() => handleNavigation('pendant-collection')} className="cursor-pointer">
                    <EarringCollection
                        title="Pendant Collection"
                        imageUrl={homePendantImage}
                    />
                </div>
                <div onClick={() => handleNavigation('chain-collection')} className="cursor-pointer">
                    <EarringCollection
                        title="Chain Collection"
                        imageUrl={homeDiamondImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;