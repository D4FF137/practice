import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import about from "../assets/media/about.jpg";
import "../assets/style.css";
import photo1 from "../assets/media/slider-photo-1.jpg";
import photo2 from "../assets/media/slider-photo-2.jpg";
import photo3 from "../assets/media/slider-photo-3.jpg";
import photo4 from "../assets/media/slider-photo-4.jpg";
import photo5 from "../assets/media/slider-photo-5.jpg";
import photo6 from "../assets/media/slider-photo-6.jpg";
import photo7 from "../assets/media/slider-photo-7.jpg";
import photo8 from "../assets/media/slider-photo-8.jpg";
import photo9 from "../assets/media/slider-photo-9.jpg";
import promotion1 from '../assets/media/promotions-1.jpg';
import promotion2 from '../assets/media/promotions-2.jpg'
import promotion3 from '../assets/media/promotions-3.jpg'
import promotion4 from '../assets/media/promotions-4.jpg'

const Home = () => {
  return (
    <div>
      <div className="container">
        <section className="about">
          <div className="about-left">
            <h3>О санатории</h3>
            <h2>
              Санаторно-курортный <br />
              комплекс в живописной <br />
              Алуште, Крым
            </h2>
            <h3>
              Откройте для себя Славутич: идеальное сочетание <br />
              комфорта, удобства и высококлассного ухода
            </h3>
            <p>
              «Славутич» сочетает в себе уют и комфорт высококлассного отеля с
              превосходным медицинским обслуживанием, чтобы гарантировать
              незабываемый и здоровый отдых у моря.
            </p>
            <Button variant="primary">Подробнее</Button>
          </div>

          <div className="about-right">
            <img src={about} alt="" />
          </div>
        </section>

        <section className="life">
          <h1>Проживание</h1>
          <h2>Номера с лечением или без и несколько типов питания</h2>
          <Row className="buttons">
            <Col md={2}>
              <Button>Забронировать</Button>
            </Col>
            <Col>
              <Button>Все номера</Button>
            </Col>
          </Row>
          <div className="cards">
            <Row>
              <Col className="lifecol">
                <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo1} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo2} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo3} text="First slide" />
                   
                  </Carousel.Item>
                </Carousel>
                <h4>Двухкомнатный делюкс</h4>
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
              <Col className="lifecol">
              <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo4} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo5} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo6} text="First slide" />
                   
                  </Carousel.Item>
                </Carousel>
                <h4>Двухместный бизнес</h4>
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
              <Col className="lifecol">
              <Carousel>
                  <Carousel.Item className="image">
                    <img src={photo7} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo8} text="First slide" />
                    
                  </Carousel.Item>
                  <Carousel.Item className="image">
                    <img src={photo9} text="First slide" />
                   
                  </Carousel.Item>
                </Carousel>
                <h4>Трехместный бизнес</h4>
                <h5>от 3 760 Р<span>/ночь</span></h5>
              </Col>
            </Row>
          </div>
        </section>
        <section className="promotions">
      <h1>Акции</h1>
      <h2>Позволят насладиться отдыхом и оздоровлением по привлекательным ценам</h2>
      <Row className="gap-4" md={2}>
        <Col  className="promotionscol">
        <img src={promotion1} alt="" />
    <h5>
      Новогодний банкет 2025
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
        <img src={promotion2} alt="" />
        <h5>
      Новые корпуса 10 и 11
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
        <img src={promotion3} alt="" />
        <h5>
      Выгодное межсезонье
    </h5>
    <a href="">Подробнее</a>
        </Col>
        <Col className="promotionscol">
       
      <img src={promotion4} alt="" />
        <h5>
      Скидка 50% на 2025 год
    </h5>
    <a href="">Подробнее</a>
        </Col>
      </Row>
        </section>
        <section>

        </section>
      </div>
    </div>
  );
};

export default Home;
