import { useState } from "react";
import navLogo from "../Images/KUJIARETINK RESELLERS.png";

const Nav = () => {
    const [hover, setHover] =useState(false);
    let hoverTimeout;

  const handleMouseOver = () => {
    clearTimeout(hoverTimeout);
    setHover(true);
  };

  const handleMouseOut = () => {
    hoverTimeout = setTimeout(() => {
      setHover(false);
    }, 5000); 
  };
  window.addEventListener("resize", ()=>{
    if(window.innerWidth >855 && mobileMenu === true){
        setMobileMenu(!mobileMenu)
    }

  })
    
    const [subMenu, setSubMenu]=useState(false);
    const [mobileMenu,setMobileMenu]=useState(false);
    return ( 
        <section>
            <nav>
                <div className="nav-con container">
                    <div className="logo"><img src={navLogo} alt="A logo" /></div>
                    <ul>
                        <li>Home</li>
                        <li> <a href="https://retink.io/about/">Who we are</a></li>
                        <li>How it works</li>
                        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            partnership areas <span className="dropdown"><i class="fa-solid fa-caret-down"></i></span>
                            { hover &&
                               <div className="hover-menu-con">
                                <ul>
                                    <li  style={{paddingLeft:"0.3rem"}}>Business</li>
                                    <li  style={{paddingLeft:"0.3rem"}}>Funding</li>
                                    <li  style={{paddingLeft:"0.3rem"}}>Mentors</li>
                                </ul>
                               </div>


                            }
                        </li>
                    </ul>
                    <div className="menu-icon-con" onClick={()=>setMobileMenu(!mobileMenu)}>
                        {mobileMenu?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}
                    
                    </div>
                </div>
            </nav>
            { mobileMenu &&
                <div className="mobile-menu">
                    <ul>
                        <li>Home</li>
                        <li> <a href="https://retink.io/about/">Who we are</a></li>
                        <li>How it works</li>
                        <li onClick={()=>setSubMenu(!subMenu)}>Partnership areas <span className="dropdown"><i class="fa-solid fa-caret-down"></i></span>
                            { subMenu &&
                                <div className="mobile-submenu-con">
                                    <ul>
                                        <li>Business</li>
                                        <li>Funding</li>
                                        <li>Mentors</li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            }
        </section>
     );
}
 
export default Nav;