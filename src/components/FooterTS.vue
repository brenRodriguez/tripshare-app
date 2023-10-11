<template>
    <footer>
        <div class="footer-area footer-style-two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <a class="logo">
                                <img class="logo-footer" src="png/Logo, fondo oscuro.png" alt="logo">
                            </a>
                            <p><strong>Disfruta viajar</strong></p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget pl-2">
                            <h3>Nosotros</h3>
                            <ul class="links-list">
                                <h4>Argentina</h4>
                                <li><i class="fa-solid fa-phone"></i> 15989875654</li>
                                <li><i class="fa-solid fa-envelope"></i> foro@tripshare.com</li>                            
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Social</h3>
                            <ul class="links-list">
                                <li><a href="#">Trabajá con nosotros</a></li>
                                <li><a href="#">Quiero publicitar mi negocio</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Navegación</h3>
                            <ul class="links-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Eventos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="redes-sociales">
                    <strong>Interactuá en nuestras redes</strong>
                    <div class="logos-redes">
                        <div>
                            <a href="https://twitter.com/?lang=es"> <img src="png/logo twitter.png" alt=""></a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/"> <img src="png/logo facebook.png" alt=""></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/"> <img src="png/log instagram.png" alt=""></a>
                        </div>                      

                    </div>
                </div>                
                <div class="copyright-area">
                    <ul>
                        <li><a href=""></a>Politica de Privacidad</li>
                        <li>|</li>
                        <li>Ayudando a viajeros</li>
                        <li>|</li>
                        <li>2013 - 2023</li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>

</template>

<style>
/* Footer*/

.footer-area {
  font-family: 'Montserrat', sans-serif;
    background-color:  #0c3c34;
    color: white;
    height: 100vh;
    /* text-align: center; */
}

.footer-area.footer-style-two {
  padding-top: 100px;
  padding-bottom: 0px;
}

.footer-content .logo {
  display: inline-block;
  margin-bottom: 30px;
}

.logo-footer{
  width: 200px;
  height: 200px;
  margin-left: 80px;
}

.footer-content .social-links {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.footer-content .social-links li {
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
}

.footer-content .social-links li:last-child {
  margin-right: 0;
}

.footer-content .social-links li:first-child {
  margin-left: 0;
}

.footer-content .social-links li a {
  width: 35px;
  height: 35px;
  background: #3D4354;
  color: var(--whiteColor);
  display: block;
  position: relative;
  z-index: 1;
  line-height: 36px;
  border-radius: 50%;
  font-size: 16px;
}

.single-footer-widget {
  margin-bottom: 30px;
}

.single-footer-widget .logo {
  display: inline-block;
  margin-top: -30px;
  margin-bottom: 20px;
  margin-right: 0px;
}

.single-footer-widget > p{
  font-size: 23px;
  margin-top: -60px;
  margin-right: 0px;
}

.single-footer-widget h3 {
  margin-bottom: 30px;
  margin-left: 60px;
  font-size: 20px;
  font-weight: 800;
}

.single-footer-widget > ul > h4{
  margin-bottom: 20px;
  font-weight: 800;
}

.single-footer-widget .social-links {
  padding-left: 0;
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 0;
}

.single-footer-widget .social-links li {
  display: inline-block;
  text-align: center;
  margin-left: 3px;
  margin-right: 3px;
}

.single-footer-widget .social-links li:last-child {
  margin-right: 0;
}

.single-footer-widget .social-links li:first-child {
  margin-left: 0;
}

.single-footer-widget .social-links li a {
  width: 35px;
  height: 35px;
  background: var(--whiteColor);
  color: var(--paragraphColor);
  position: relative;
  border-radius: 50%;
  line-height: 35px;
  display: block;
  font-size: 16px;
  z-index: 1;
}

.single-footer-widget .social-links li a::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 50%;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  top: 0;
  bottom: 0;
  z-index: -1;
  background: var(--gradientColor);
  opacity: 0;
  visibility: hidden;
}

.single-footer-widget .social-links li a:hover {
  color: var(--whiteColor);
}

.single-footer-widget .social-links li a:hover::before {
  opacity: 1;
  visibility: visible;
}

.single-footer-widget .links-list {
  padding-left: 0;
  width: 200px;
  margin-bottom: 0;
  margin-left: 60px;
  list-style-type: none;
}

.single-footer-widget .links-list li {
  margin-bottom: 12px;
}

.single-footer-widget .links-list li a {
  display: inline-block;
  color: var(--paragraphColor);
}

.single-footer-widget .links-list li a:hover {
  color: var(--mainColor);
}

.single-footer-widget .links-list li:last-child {
  margin-bottom: 0;
}

.single-footer-widget .newsletter-form {
  position: relative;
  margin-top: 20px;
}

.redes-sociales{
  text-align: center;
  margin-top: 60px;
}

.redes-sociales > strong {
  font-size: 20px;
}

.logos-redes {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logos-redes > div {
    margin: 40px;
}

.copyright-area{
  margin-top: 70px;
}

.copyright-area > ul{
  display: flex;
  justify-content: center;
}

.copyright-area > ul > li {
  margin: 10px;
}

/* Min width 576px to Max width 767px */
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-area.footer-style-two {
    padding-top: 80px;
  }
  .single-footer-widget h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .copyright-area {
    margin-top: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-footer-widget.pl-2 {
    padding-left: 10px;
  }
}

</style>