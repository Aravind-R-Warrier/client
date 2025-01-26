import React from 'react'
import phone from './assets/phone.png'
import email from './assets/email.png'
import location from './assets/location.png'
import social from './assets/social.png'
import icon from './assets/icon.png'

function Footer() {
    return (
        <>
        <div className='w-100 bg-black' style={{ height: '672px', width: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="d-flex flex-column justify-content-center" style={{ width: '373px', height: '134px', border: '1px solid rgba(255, 255, 255, 1)',margin:'5px', borderRadius: '15px'}}>
                <span  className='text-center' style={{color:'rgba(7, 150, 239, 1)',lineHeight:'23.71px',fontSize:'16px',fontFamily:'oswald',fontWeight:'500',letterSpacing:'3%'}}>Connect with Us</span>
                <div className='text-center'>
                    <img style={{width:'12.18px',height:'14.63'}} src={phone} alt="phone" /><span style={{fontSize:'16px',lineHeight:'23.71px',fontWeight:'400',fontFamily:'Oswald',letterSpacing:'3%',color:'rgba(133, 120, 120, 1)',margin:'5px'}}>+91 9567843340</span>
                    <br />
                    <img style={{width:'12.18px',height:'14.63'}} src={email} alt="email" /><span style={{fontSize:'16px',lineHeight:'23.71px',fontWeight:'400',fontFamily:'Oswald',letterSpacing:'3%',color:'rgba(133, 120, 120, 1)',margin:'5px'}}>info@deepnetsoft.com</span>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center" style={{ position: 'relative', width: '373px', height: '134px', border: '1px solid rgba(255, 255, 255, 1)', margin: '5px', borderRadius: '15px' }}>
  {/* Icon positioned above the border */}
  <img src={icon} style={{
    width: '86px',
    height: '76px',
    position: 'absolute',
    top: '-38px', // Adjust this value as needed to position the icon above the border
    left: '50%',
    transform: 'translateX(-50%)', // This centers the icon horizontally
  }} alt="" />

  
  <span className='text-center' style={{
    color: 'rgba(7, 150, 239, 1)',
    lineHeight: '23.71px',
    fontSize: '16px',
    fontFamily: 'oswald',
    fontWeight: '500',
    letterSpacing: '3%',
    display: 'block',
    textAlign: 'center',
  }}>
    <span style={{
      lineHeight: '51.87px',
      fontSize: '35px',
      letterSpacing: '3%',
      fontFamily: 'oswald',
      color: 'rgba(7, 150, 239, 1)',
    }}>DEEP </span>
    <span style={{
      lineHeight: '51.87px',
      fontSize: '35px',
      letterSpacing: '3%',
      fontFamily: 'oswald',
      color: 'rgba(255, 255, 255, 1)',
    }}>NET </span>
    <span style={{
      lineHeight: '51.87px',
      fontSize: '35px',
      letterSpacing: '3%',
      fontFamily: 'oswald',
      color: 'rgba(133, 120, 120, 1)',
    }}>SOFT</span>
  </span>

 
  <div className='text-center'>
    <img style={{
      width: '86px',
      height: '12.6px',
      marginBottom: '3px'
    }} src={social} alt="social" />
  </div>
</div>



            <div className="d-flex flex-column justify-content-center" style={{ width: '373px', height: '134px', border: '1px solid rgba(255, 255, 255, 1)',margin:'5px', borderRadius: '15px' }}>
            <span  className='text-center' style={{color:'rgba(7, 150, 239, 1)',lineHeight:'23.71px',fontSize:'16px',fontFamily:'oswald',fontWeight:'500',letterSpacing:'3%'}}>Find us</span>
                <div className='text-center d-flex justify-content-center align-items-center'>
                    <img style={{width:'12.18px',height:'14.63'}} src={location} alt="location" /><div style={{fontSize:'16px',lineHeight:'23.71px',fontWeight:'400',fontFamily:'Oswald',letterSpacing:'3%',color:'rgba(133, 120, 120, 1)',margin:'7px',textAlign:'justify'}}>First floor, Geo <br />infopark, 
                         EXPY, Kakkanad</div>
                </div>
            </div>
        </div>

        {/* lastFooter */}
        <div className='w-100' style={{background:'rgba(217, 217, 217, 1)',display:'flex',color:'rgba(133, 120, 120, 1)',justifyContent:'space-evenly',alignItems:'center'}}>
        <span>© 2024 Deepnetsoft Solutions. All rights reserved.</span>
      <div> 
         <span>Terms & Conditions</span>
         <span style={{marginLeft:'95px'}}>Privacy Policy</span>
      </div>
    </div>

</>
       
    )
}

export default Footer
