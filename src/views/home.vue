<template>
  <body>
    <div class="main-container">
      <h1>¡Bienvenido/a a Trip Share! <br /> Descubre el mundo compartiendo aventuras</h1><img
        src="../assets/tripshare-main-image.jpg" />
    </div>
    <div class="about-us col-12" >
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
                <p>TripShare es una innovadora aplicación diseñada para conectar a viajeros solitarios que buscan una
                  experiencia más enriquecedora durante sus excursiones. Con TripShare, la soledad en tus viajes se
                  convierte en una oportunidad emocionante para conocer a otros aventureros que comparten tus mismos
                  destinos y pasiones por explorar el mundo.
                </p>
                <p>
                  Imagina tener la posibilidad de explorar nuevos lugares junto a compañeros de viaje que comparten tus
                  intereses. Con TripShare, puedes descubrir fácilmente a otros usuarios que se encuentran en tu misma
                  ubicación y desean participar en excursiones similares. Ya sea explorar sitios históricos, disfrutar de
                  la gastronomía local o aventurarse en actividades al aire libre, TripShare te conecta con personas
                  afines para hacer de cada viaje una experiencia inolvidable.
                </p>
                <p>La aplicación ofrece una plataforma intuitiva que te permite crear y unirte a excursiones planificadas
                  por otros usuarios, facilitando así la coordinación de actividades y la formación de grupos. ¡No más
                  viajes en solitario aburridos! Con TripShare, cada destino se convierte en una oportunidad para
                  construir nuevas amistades y compartir momentos emocionantes con compañeros de viaje que comparten tu
                  espíritu aventurero.
                </p>
                <p>Descarga TripShare hoy mismo y descubre cómo transformar tus viajes en una experiencia social y
                  enriquecedora. ¡Explora, conéctate y comparte con TripShare!
                </p>
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
                <p>La misión de TripShare es transformar la experiencia de viajar solo, conectando a viajeros con
                  intereses similares y facilitando la creación de conexiones significativas. Buscamos eliminar la soledad
                  en los viajes, permitiendo a los usuarios descubrir compañeros de aventuras, compartir experiencias y
                  crear recuerdos inolvidables. TripShare aspira a convertir cada destino en una oportunidad para
                  construir relaciones duraderas y enriquecer la vida de los viajeros solitarios a través de conexiones
                  auténticas.</p>
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
                <p>La visión de TripShare es ser la plataforma líder a nivel mundial que redefine la forma en que las
                  personas experimentan los viajes. Nos esforzamos por ser la conexión esencial para viajeros solitarios,
                  inspirándolos a explorar el mundo de manera más significativa a través de la creación de comunidades
                  temporales en cada destino. Visualizamos un futuro donde TripShare sea reconocido como el facilitador
                  clave para transformar los viajes individuales en experiencias compartidas, brindando a los usuarios la
                  posibilidad de construir relaciones significativas mientras descubren nuevos lugares. Con un enfoque
                  centrado en la innovación y la inclusión, aspiramos a ser el puente que une a los aventureros de todo el
                  mundo, transformando cada viaje en una oportunidad para el crecimiento personal y la conexión global.
                </p>
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
                <p>
                  En TripShare, la "comunidad" es más que un concepto; es el tejido que une a viajeros de todo el mundo.
                  Nuestra plataforma está impulsada por la idea de crear comunidades temporales en cada destino, donde los
                  usuarios pueden conectarse, compartir experiencias y construir relaciones auténticas. La comunidad en
                  TripShare representa la diversidad de historias, culturas y amistades que se forman a medida que los
                  viajeros solitarios se unen para explorar juntos. Es el corazón de nuestra visión de transformar cada
                  viaje en una oportunidad para pertenecer y enriquecerse a través de conexiones significativas. En
                  TripShare, la comunidad es el destino.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>

.main-container {
  width: 100%;
  max-width: 100%;
  position: relative;
}

.main-container h1 {
  font-size: 45px;
  position: absolute;
  text-align: center;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: #3F9A82;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.main-container img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.about-us {
  background-color: #074b47;
  height: 600px;
  margin: 50px;
  width: 1250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
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
