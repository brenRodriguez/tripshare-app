<template>
  <body>
    <div class="bienvenida">
      <P>BIENVENIDOS</P>
      <br>
      <H2>TRIPSHARE</H2>
    </div>

    <div class="about-us col-12">
      <div class="section-title">
        <h2>Sobre nosotros</h2>
      </div>
      <div class="container">
        <div class="faq-accordion accordion" id="faqAccordion">
          <div class="accordion-item">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              ¿Qué es TRIPSHARE?
            </button>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque, mi eu porttitor
                  laoreet, felis dolor maximus ligula, sed vestibulum nisi mauris id sapien. Aliquam erat volutpat. Nam
                  urna nunc, lobortis et dolor efficitur, pulvinar congue ligula. Sed accumsan sem non neque venenatis
                  placerat. In hac habitasse platea dictumst. Integer at sem sed justo maximus hendrerit in eget neque.
                  Suspendisse laoreet malesuada sem, non imperdiet velit interdum nec. Integer tristique semper diam id
                  varius. Praesent tincidunt lorem ac velit iaculis, non iaculis magna gravida. Nulla facilisi. In ornare
                  fringilla fermentum. Donec vel varius massa. Donec mollis, neque ac tempus pharetra, sem nibh tempus
                  nisl, eu fermentum justo nisl non metus. Suspendisse molestie orci lacinia, varius tellus vitae, varius
                  ex.
                </p>
                <p>
                  Integer faucibus lorem sed ipsum ornare, a blandit lorem ultrices. Ut tincidunt tristique eros vitae
                  semper. Vivamus a felis arcu. Pellentesque lobortis sed lorem eu tempor. Phasellus rutrum vehicula metus
                  a aliquet. Sed finibus quam purus, vel accumsan eros dignissim eu. Nullam luctus, mi ac eleifend
                  maximus, tortor elit egestas ligula, non blandit orci odio quis tortor. Phasellus luctus vehicula
                  pretium. Fusce arcu erat, rhoncus vitae finibus eu, consequat eget orci. Aliquam finibus congue dui,
                  eget venenatis magna vulputate eu. Nam ipsum neque, interdum dignissim luctus non, feugiat vitae dui.
                  Integer sollicitudin lorem vel arcu laoreet, a faucibus augue congue. Nullam eros libero, aliquam non
                  posuere sed, rhoncus sed libero.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Misión
            </button>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p>Suspendisse potenti. Nullam luctus, nulla sit amet pellentesque scelerisque, justo libero laoreet
                  dolor, nec consectetur felis turpis eget elit. Donec luctus massa et ipsum tincidunt, sed tristique
                  nulla maximus. Ut tristique tempor suscipit. Nam vitae dui non augue suscipit vestibulum. Etiam leo leo,
                  tristique sed augue sit amet, luctus elementum enim. Fusce pretium a nunc sit amet finibus. Mauris
                  tincidunt vulputate ipsum a pellentesque. In ultricies vestibulum magna, in dictum felis auctor quis. Ut
                  in vehicula lacus. Maecenas blandit tincidunt dui, nec tincidunt magna luctus sed. In sit amet sapien ac
                  ex fringilla laoreet eu sed est. Aenean sed augue at odio tincidunt scelerisque.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Visión
            </button>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p>Nam maximus iaculis diam, ut eleifend diam pellentesque sed. In hac habitasse platea dictumst. In hac
                  habitasse platea dictumst. Cras congue lectus a lorem pellentesque, nec finibus mauris facilisis. Morbi
                  turpis enim, molestie at posuere nec, laoreet vitae diam. Duis fermentum metus vitae imperdiet eleifend.
                  Integer ac libero neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Sed egestas sapien a purus dignissim vehicula. Sed ex erat, aliquam sed ex quis, viverra
                  varius lorem. Fusce sit amet auctor sem, et pulvinar purus. Vivamus dapibus aliquet facilisis.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Comunidad
            </button>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p>Morbi vitae sem molestie, ultrices ligula eu, tristique tortor. Suspendisse arcu metus, vehicula vel
                  quam vulputate, consequat porta mauris. Aliquam eu massa ullamcorper, blandit turpis sit amet, dignissim
                  velit. Aenean ornare pharetra imperdiet. Ut posuere vestibulum sodales. Donec scelerisque, urna nec
                  feugiat blandit, lorem sem viverra lacus, non eleifend diam neque vel enim. Cras viverra pulvinar
                  consequat. Sed consequat vulputate tellus id pharetra. Pellentesque sit amet ipsum molestie, imperdiet
                  mauris sed, sollicitudin risus. Nunc non pulvinar nunc. Praesent ultrices lectus sed mattis aliquet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>

.bienvenida{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}
.about-us {
  background-color: #074b47;
  height: 600px;
  margin: 50px;
  width: 1250px;
  border-radius: 10px;
  
}

.section-title {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title h2 {
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: white;
  margin-top: 40px;
}

.img-logo-about-us {
  width: 300px;
  height: 500px;
}

.faq-accordion .accordion-item {
  background-color: transparent;
  margin-bottom: 20px;
  border-radius: 0;
  border: none;
}

.faq-accordion .accordion-item .accordion-button {
  display: block;
  padding: 0 0 10px;
  text-align: start;
  -webkit-box-shadow: unset;
  box-shadow: unset;
  position: relative;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid #eeeeee;
  font-size: 18px;
  font-weight: 700;
}

.accordion-body p {
  color: white;
}

.faq-accordion .accordion-item .accordion-button::before {
  right: 0;
  bottom: 5px;
  content: "\F1AF";
  position: absolute;
  font-family: remixicon;
  color: var(--paragraphColor);
  font-size: 22px;
  font-weight: 500;
}

.faq-accordion .accordion-item .accordion-button.collapsed::before {
  content: "\EA12";
}

.faq-accordion .accordion-item .accordion-button::after {
  display: none;
}

.faq-accordion .accordion-item .accordion-body {
  padding: 20px 0 0;
}

.faq-accordion .accordion-item .accordion-body p strong {
  color: var(--blackColor);
}

.faq-accordion .accordion-item .accordion-body p a {
  color: var(--mainColor);
}

.faq-accordion .accordion-item .accordion-body p a:hover {
  text-decoration: underline;
}

.faq-accordion .accordion-item .accordion-body ul {
  margin-bottom: 15px;
}

.faq-accordion .accordion-item .accordion-body ul li {
  margin-bottom: 12px;
  color: var(--paragraphColor);
}

.faq-accordion .accordion-item .accordion-body ul li strong {
  color: var(--blackColor);
}

.faq-accordion .accordion-item .accordion-body ul li a {
  color: var(--mainColor);
}

.faq-accordion .accordion-item .accordion-body ul li a:hover {
  text-decoration: underline;
}

.faq-accordion .accordion-item .accordion-body ul li:last-child {
  margin-bottom: 0;
}

.faq-accordion .accordion-item .accordion-body ul:last-child {
  margin-bottom: 0;
}

.faq-accordion .accordion-item:last-child {
  margin-bottom: 0;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .faq-sidebar {
    padding-right: 0;
    margin-bottom: 30px;
  }

  .faq-sidebar ul {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .faq-sidebar ul li {
    padding: 8px 20px;
  }

  .faq-accordion {
    padding-left: 0;
  }

  .faq-accordion .accordion-item {
    margin-bottom: 20px;
  }

  .faq-accordion .accordion-item .accordion-button {
    font-size: 14px;
  }

  .faq-accordion .accordion-item .accordion-button::before {
    bottom: 8px;
    font-size: 16px;
  }
}

/* Min width 576px to Max width 767px */
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .faq-sidebar {
    padding-right: 0;
    margin-bottom: 30px;
  }

  .faq-sidebar ul {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .faq-sidebar ul li {
    padding: 10px 30px;
  }

  .faq-accordion {
    padding-left: 0;
  }

  .faq-accordion .accordion-item .accordion-button {
    font-size: 16px;
  }
}

</style>
