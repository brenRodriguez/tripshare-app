<template>
    <div class="novedades">
            
            <div id="carouselExampleCaptions" class="carousel slide">
                <h2 class="tendencias-titulo">Descubrí nuestras<strong>Novedades</strong></h2>
                <!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="https://mipayo.com/blog/comprar-cripto-con-payoneer/">
                            <img class="blog" src="png/últimas novedades 1.png" class="d-block w-50" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://mipayo.com/blog/como-operar-con-un-exchanger/">
                            <img class="blog" src="png/últimas novedades 2.png" class="d-block w-50" alt="...">
                        </a>                    
                    </div>
                    <div class="carousel-item">
                        <a href="https://mipayo.com/blog/como-uso-la-tarjeta-payoneer-en-uruguay/">
                            <img class="blog" src="png/últimas novedades 3.png" class="d-block w-50" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://mipayo.com/blog/como-uso-la-tarjeta-payoneer-en-uruguay/">
                            <img class="blog" src="png/últimas novedades 4.png" class="d-block w-50" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://mipayo.com/blog/como-uso-la-tarjeta-payoneer-en-uruguay/">
                            <img class="blog" src="png/últimas novedades 5.png" class="d-block w-50" alt="...">
                        </a>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>

                <!-- #carouselExampleCaptions -->
                <!-- <div id="carouselExampleDark" class="carousel carousel-dark slide"></div>
                #carouselExampleDark -->
            </div>
        </div>

</template>

<style scoped>
    .carousel-inner {
  border-radius: 30px;
}

.novedades{
    width: 800px;
    height: 300px;
    margin: 120px 80px 150px 300px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;   
}

.blog {
  width: 800px;
  height: 300px;
}

.tendencias-titulo {
  font-size: 50px;
  padding: 20px;
}

 .carousel-control-prev{
  background: linear-gradient(270deg, rgba(77, 155, 154, 0) 0%, #4D9B9A 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;
  margin-top: 109px; 
}

.carousel-control-prev-icon {
  margin-top: 0px;
  margin-left: -40px;
}

.carousel-control-next{
  background: linear-gradient(90deg, rgba(77, 155, 154, 0) 0%, #4D9B9A 100%);
  border-radius: 25px;
  margin-top: 109px;
}

.carousel-control-next-icon {
  margin-top: 0px;
  margin-left: 40px;
}

</style>
