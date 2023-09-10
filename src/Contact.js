import React from 'react'

const Contact = () => {
  return (
  <>
  <div className="main-contact">

<h2 className='contact-heading'>feel free to Contact Us</h2>
   
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56337.284891655116!2d76.06997282159479!3d28.052572501386575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5dccc290669%3A0xb8c594abbb4a77a3!2sNarnaul%2C%20Haryana%20123001!5e0!3m2!1sen!2sin!4v1683258690404!5m2!1sen!2sin" width="100%" height="500" style={{border:"0px"}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 
    </div>

    <div className="contact-form">

<form action="https://formspree.io/f/xqkonyyv" method='POST' className='my-contact-form'>


  <p><input type="text" name='username' placeholder='Username'  required autoComplete='off' /></p>
<p><input type="email" name='Email' placeholder='Email'  required  autoComplete='off'/></p>
<p><textarea placeholder='Write here anything' rows="10" cols="30" required autoComplete='off'></textarea></p>
<p><input type="submit" value="Send" className='btn-secondary'/></p>
</form>


    </div>
 
    </> )
 
   
}

export default Contact