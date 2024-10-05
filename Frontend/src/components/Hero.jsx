import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="hero-container cursor-pointer">
      <Carousel>
        <Carousel.Item>
          <picture>
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9a260fd/homepage/HeroBanner/nav-raani-mweb-en1.jpg" media="(max-width: 767px)" />
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f2c180e/homepage/HeroBanner/nav-raani-desktop-en1.jpg" media="(min-width: 768px)" />
            <img
              className="d-block w-100"
              src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f2c180e/homepage/HeroBanner/nav-raani-desktop-en1.jpg"
              alt="Nav Raani"
            />
          </picture>
          
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8d59339e/homepage/HeroBanner/gd-mobile-wo.jpg" media="(max-width: 767px)" />
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2bb5bca4/homepage/HeroBanner/gd-desktop-wo.jpg" media="(min-width: 768px)" />
            <img
              className="d-block w-100"
              src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2bb5bca4/homepage/HeroBanner/gd-desktop-wo.jpg"
              alt="Glam Days"
            />
          </picture>
          
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0feb3e8/homepage/HeroBanner/into-eternity-mobile.jpg" media="(max-width: 767px)" />
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw534d603c/homepage/HeroBanner/into-eternity-desktop.jpg" media="(min-width: 768px)" />
            <img
              className="d-block w-100"
              src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw534d603c/homepage/HeroBanner/into-eternity-desktop.jpg"
              alt="Into Eternity"
            />
          </picture>
          
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdbd3bf5c/homepage/HeroBanner/modern-polki-mobile.jpg" media="(max-width: 767px)" />
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw912fbd40/homepage/HeroBanner/modern-polki-desktop.jpg" media="(min-width: 768px)" />
            <img
              className="d-block w-100"
              src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw912fbd40/homepage/HeroBanner/modern-polki-desktop.jpg"
              alt="Modern Polki"
            />
          </picture>
          
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw27453c40/homepage/HeroBanner/new-arrivals-mobile.jpg" media="(max-width: 767px)" />
            <source srcSet="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw408b476e/homepage/HeroBanner/new-arrivals-desktop.jpg" media="(min-width: 768px)" />
            <img
              className="d-block w-100"
              src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw408b476e/homepage/HeroBanner/new-arrivals-desktop.jpg"
              alt="New Arrivals"
            />
          </picture>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}