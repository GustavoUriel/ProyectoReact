import React from "react";
import "../css/Carousel.css";

export default function Carousel() {
  return (
    <div>
      <div>
        <div class="container" id="objCarousel">
          <div class="row row-content">
            <div class="col">
              <div
                id="carouselOtorgantes"
                class="carousel slide"
                data-ride="carousel"
                data-interval="1000"
              >
                <div class="carousel-inner" id="carouselDentro" role="listbox">
                  <div class="carousel-item active ">
                    <a href=".">
                      <img
                        class="d-block img-fluid"
                        src="https://dummyimage.com/200x200/9675cd/522da8.png&text=NOSOTROS"
                        alt="Nuestros socios"
                      />
                    </a>
                    <div class="carousel-caption d-none d-sm-block">
                      <h2>
                        <span class="badge badge-success">
                          Nosotros, estamos para vos
                        </span>
                      </h2>
                      <p class="d-none d-sm-block">
                        Bancos e instituciones financieras con los que
                        trabajamos
                        <br />
                        En sólo dos años más, más de 700 días brindando
                        asesoramiento de excelencia
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators" id="carouselIndicadores">
                  <li
                    data-target="#carouselOtorgantes"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselOtorgantes" data-slide-to="1"></li>
                  <li data-target="#carouselOtorgantes" data-slide-to="2"></li>
                  <li data-target="#carouselOtorgantes" data-slide-to="3"></li>
                  <li data-target="#carouselOtorgantes" data-slide-to="4"></li>
                </ol>
                <a
                  class="carousel-control-prev"
                  href="#carouselOtorgantes"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselOtorgantes"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </a>
                <button class="btn btn-danger btn-sm" id="carouselButton">
                  <span class="fa fa-pause"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
