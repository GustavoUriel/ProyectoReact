import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-4 col-sm-2 offset-1"></div>
        <div class="col-7 col-sm-5">
          <h5>Nuestra dirección</h5>
          <address>
            Avenida Siempreviva 742
            <br />
            Springfield, Argentina
            <br />
            <i class="fa fa-phone fa-lg"></i>: +555 5555 5555
            <br />
            <i class="fa fa-fax fa-lg"></i>: +555 5555 5556
            <br />
            <i class="fa fa-envelope fa-lg"></i>:
            <a href="mailto:glevcovich@outlook.com">glevcovich@outlook.com</a>
          </address>
        </div>
        <div class="col-12 col-sm-4 align-self-center">
          <div class="text-center">
            <a
              class="btn btn-social-icon btn-google"
              href="http://google.com/+"
            >
              <i class="fa fa-google-plus"></i>
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/profile.php?id="
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              class="btn btn-social-icon btn-linkedin"
              href="http://www.linkedin.com/in/"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            <a
              class="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              class="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i class="fa fa-youtube"></i>
            </a>
            <a class="btn btn-social-icon" href="mailto:">
              <i class="fa fa-envelope-o"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <p>© Copyright 2021 Gustavo Uriel Levcovich</p>
        </div>
      </div>
    </div>
  );
}
