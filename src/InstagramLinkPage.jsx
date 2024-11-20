import React from 'react';
import Slider from 'react-slick';
import './InstagramLinkPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logoImg from './assets/logo-img.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';

const InstagramLinkPage = () => {
  const phoneNumber = '5574988275987';
  const message = 'Olá! Gostaria de saber mais informações.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="link-container">
      <div className="content-container">
        <header className="link-header">
          <img src={logoImg} alt="Logo da empresa" className="logo-photo" />
          <h1>Sonho Meu Decorações<br />Bem-vindo!</h1>
        </header>
        <main className="link-main">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            WhatsApp
          </a>
        </main>
      </div>

      <aside className="company-history">
        <img src={img7} alt="Dinah Gama" className="company-photo" />
        <h2>Sobre Nós</h2>
        <p>
Com 15 anos de tradição, Sonho Meu Decorações é uma das pioneiras em nossa cidade, reconhecida por sua dedicação e qualidade. Em 2022, tivemos a honra de receber o prêmio "Profissionais do Ano", um reconhecimento ao nosso compromisso com a excelência.

Fundada por Dinah Gama, a Sonho Meu Decorações se especializa em criar ambientes inesquecíveis para festas infantis, celebrações de quinze anos, casamentos e decorações em geral. Transformamos momentos especiais em memórias eternas, trazendo o sonho de cada cliente à realidade.

Além disso, trabalhamos com projetos em 2D, permitindo que o cliente visualize sua festa antes de acontecer, garantindo que cada detalhe esteja de acordo com suas expectativas.</p>
      </aside>

      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src={img1} alt="Imagem 1" /></div>
          <div><img src={img2} alt="Imagem 2" /></div>
          <div><img src={img4} alt="Imagem 4" /></div>
          <div><img src={img5} alt="Imagem 5" /></div>
          <div><img src={img6} alt="Imagem 6" /></div>
          <div><img src={img3} alt="Imagem 3" /></div>
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>▶</div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>◀</div>
);

export default InstagramLinkPage;
