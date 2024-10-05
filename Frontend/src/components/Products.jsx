import React from 'react';
import EarringCollection from './reusables/EarringCollection';
import homeEarringImage from '../assets/images/home-earring.png';
import homePendantImage from '../assets/images/home-pendant.png';
import homeDiamondImage from '../assets/images/home-diamonds.png';




export default function Products() {
return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-8xl font-bold font-sans text-[#2a264e] mb-5 pb-3'>Our Collections</h1>
        <div className="flex flex-row items-center justify-around space-x-8 p-20 shadow-lg rounded-lg border-2 border-[#ffffff] ">
            <EarringCollection
                title="Earring Collection"
                imageUrl={homeEarringImage}
            />
            <EarringCollection
                title="Pendant Collection"
                imageUrl={homePendantImage}
            />
            <EarringCollection
                title="Chain Collection"
                imageUrl={homeDiamondImage}
            />
        </div>
    </div>
);
}