import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo'/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src="../images/ico-facebook.png" alt='Facebook-ico' className='ico'/>
        <img src="../images/ico-instagram.png" alt='Instagram-ico' className='ico'/>
        <img src="../images/ico-tiktok.png" alt='Tiktok-ico' className='ico'/>
        <img src="../images/ico-whatsapp.png" alt='Whatsapp-ico' className='ico'/>
      </div>
    </footer>
  )
}

export default Footer
