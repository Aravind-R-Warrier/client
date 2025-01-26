import React from 'react';
import bgTwo from './assets/bg2.png';
import turkey from './assets/turkey.png';
import bottle from './assets/bottle.png';
import pizza from './assets/pizza.png';
import shrimp from './assets/shrimp.png';
import beer from './assets/beer.png';
import barbecue from './assets/barbecue.png';
import juice from './assets/juice.png';
import cocktail from './assets/cocktail.png';
import line from './assets/line.png';
import './MenuDisplay.css';

function MenuDisplay() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: `url(${bgTwo}) no-repeat center center`,
          backgroundSize: 'cover',
          height: '672px',
          width: '100%',
        }}
      >
        <div className="row h-100">
          {/* Left Column - hidden on mobile */}
          <div className="col-12 col-md-1 d-flex flex-column justify-content-start align-items-start d-none d-md-flex">
            <img
              className="mt-5"
              style={{ height: '150px', width: '150px', objectFit: 'contain' }}
              src={turkey}
              alt="Turkey"
            />
            <img
              className="mt-5"
              style={{ height: '164px', width: '156px', objectFit: 'contain' }}
              src={bottle}
              alt="Bottle"
            />
            <img
              className="mt-4"
              style={{
                height: '240px',
                width: '120.12px',
                objectFit: 'contain',
                opacity: '0.2',
              }}
              src={pizza}
              alt="Pizza"
            />
          </div>

          {/* Center Column */}
          <div className="col-12 col-md-10 d-flex align-items-center justify-content-center position-relative center column">
            <img
            className="juice"
              style={{
                position: 'absolute',
                top: '-2px',
                left: '18px',
                zIndex: 1,
                height: '281px',
                width: '190px',
              }}
              src={juice}
              alt="juice"
            />
            <img
              className="cocktail"
              style={{
                position: 'absolute',
                top: '400px', 
                left: '1012px', 
                zIndex: 1,
                height: '207px',
                width: '192px',
              }}
              src={cocktail}
              alt="cocktail"
            />
            <div
              style={{
                width: '100%',
                height: '416px',
                border: '1px solid #FFFFFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
              >
                {/* Heading Section */}
                <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  }}
>
  <img
    src={line}
    style={{ width: '68px' }}
    alt="line"
  />
  <span
    style={{
      fontSize: '50px',
      lineHeight: '74.1px',
      fontWeight: '600',
      fontFamily: 'oswald',
      color: 'rgba(255, 255, 255, 1)',
      textShadow: '3px 4px 0px #800020',
      whiteSpace: 'nowrap',
    }}
    className="heading"
  >
    BRUNCH
    <br className="d-block d-md-none" />
    COCKTAILS
  </span>
  <img
    src={line}
    style={{ width: '68px' }}
    alt="line"
  />
</div>


                {/* Item Name and Price */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-10 d-flex flex-column align-items-start item-name-price">
                    <span
                      style={{
                        fontSize: '24px',
                        lineHeight: '38.53px',
                        fontWeight: '400',
                        fontFamily: 'Oswald',
                      }}
                    >
                      CINNAMON TOAST CRUNCH........................$16
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        lineHeight: '21.82px',
                        fontFamily: 'Kelly Slab',
                        color: 'rgba(255, 255, 255, 0.75)',
                        opacity: '0.8',
                      }}
                    >
                      Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
                    </span>
                  </div>
                </div>

                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-10 d-flex flex-column align-items-start">
                    <span
                      style={{
                        fontSize: '24px',
                        lineHeight: '38.53px',
                        fontWeight: '400',
                        fontFamily: 'Oswald',
                      }}
                    >
                      CINNAMON TOAST CRUNCH........................$16
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        lineHeight: '21.82px',
                        fontFamily: 'Kelly Slab',
                        color: 'rgba(255, 255, 255, 0.75)',
                        opacity: '0.8',
                      }}
                    >
                      Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="col-12 col-md-1 d-flex flex-column justify-content-end align-items-end d-none d-md-flex">
            <img
              className="mt-5"
              style={{ height: '178.92px', width: '120.17px', objectFit: 'contain' }}
              src={shrimp}
              alt="Shrimp"
            />
            <img
              className="mt-5"
              style={{ height: '164px', width: '156px', objectFit: 'contain' }}
              src={beer}
              alt="Beer"
            />
            <img
              className="mt-5"
              style={{
                height: '240px',
                width: '120.12px',
                objectFit: 'contain',
              }}
              src={barbecue}
              alt="Barbecue"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuDisplay;
