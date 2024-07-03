import React from 'react'
import './Footer.css'
import fb from '../src/assets/fb.png'
import linkedlin from '../src/assets/linkedlin.png'
import twiter from '../src/assets/twiter.png'
import instergram from '../src/assets/instergram.png'

function Footer(){
  return (
 <div className='footer'>
    <div className='footer_section'>
         <div className='footer_links'>

            <div className='footer_links_div'>
                <h4>For Students</h4>

                    <a href='https://courseweb.sliit.lk/course/view.php?id=17'>
                       <p>Student Manuals</p>
                    </a>

                    <a href = 'https://courseweb.sliit.lk/course/view.php?id=4&section=1'>
                        <p>Time Tables</p>
                    </a>

                    <a href = 'https://support.sliit.lk/kb'>
                        <p>FAQ</p>
                    </a>

            </div>

            <div className='footer_links_div'>
                <h4>Resources</h4>

                    <a href='https://www.youtube.com/@DPEducationALSubjects'>
                       <p>Online Video Collection</p>
                    </a>

                    <a href = 'https://www.doenets.lk/pastpapers'>
                        <p>Past Papers</p>
                    </a>

                    <a href = 'https://samudrabooks.com/homebooks?/G-C-E--A-L-Books'>
                        <p>Online Library</p>
                    </a>

            </div>

            <div className='footer_links_div'>
                <h4>Institute</h4>

                    <a href='http://localhost:5173/aboutus'>
                       <p>About</p>
                    </a>

                    <a href = 'https://rb.gy/yddhrw'>
                        <p>Location</p>
                    </a>

                    <a href = 'https://courseweb.sliit.lk/mod/page/view.php?id=147'>
                        <p>Shuttle Service</p>
                    </a>

            </div>

            <div className='footer_links_div'>
                <h4>Comming soon On </h4>
                  <div className='socialMedia'>
                    <p><a href='https://web.facebook.com/?_rdc=1&_rdr'><img src={fb} alt=""/></a></p>
                    <p><a href='https://lk.linkedin.com/'><img src={linkedlin} alt=""/></a></p>
                    <p><a href='https://twitter.com/i/flow/login'><img src={twiter} alt=""/></a></p>
                    <p><a href='https://www.instagram.com/accounts/login'><img src={instergram} alt=""/></a></p>
                  </div>
                </div>
              </div>
            <hr></hr>
        <div className='sb_footer_below'>
         <div className='sb_footer_copyright'>
            <p>
                @{new Date().getFullYear()} codeInn.All Right reserved
            </p>

         </div>
         <div className='sb_footer_below_links'>
            <a href="https://rb.gy/kqyuv9"><div><p>Terms & Conditions</p></div></a>
            <a href="https://en.wikipedia.org/wiki/Privacy_in_education"><div><p>Privacy</p></div></a>
            <a href="https://rb.gy/b8pi4d"><div><p>Security</p></div></a>
            <a href="https://rb.gy/j1wrly"><div><p>Cookie and Declaration</p></div></a>

         </div>

        </div>

        </div>
      
    </div>
  )
}

export default Footer;
