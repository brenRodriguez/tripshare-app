<script setup>
//import Novedades from '../components/Carrousel.vue'
</script>
<template>
  <body>
    <div class="about-us col-12">
        <div class="section-title">
          <h2>Sobre nosotros</h2>
        </div>
        <div class="container">
          <div class="faq-accordion accordion" id="faqAccordion">
            <div class="accordion-item">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                ¿Qué es TRIPSHARE?
              </button>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>TRIPSHARE</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Misión
              </button>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>TRIPSHARE</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Visión
              </button>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>TRIPSHARE</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour">
                Comunidad
              </button>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>TRIPSHARE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </body>
</template>

<style scoped>
.about-us {
  background-color: #074b47;
  height: 600px;
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

/* Min width 992px to Max width 1199px */
/* Min width 1200px to Max width 1399px */
/* Min width 1550px */
/*# sourceMappingURL=faq.css.map */
</style>
