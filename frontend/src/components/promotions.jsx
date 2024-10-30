import '../assets/style.css'
import {Row, Col} from 'react-bootstrap'
import promotion1 from '../assets/media/promotions-1.jpg';
import promotion2 from '../assets/media/promotions-2.jpg'
import promotion3 from '../assets/media/promotions-3.jpg'
import promotion4 from '../assets/media/promotions-4.jpg'
import promotion5 from '../assets/media/promotion-6.png';
import promotion6 from '../assets/media/promotion-7.jpg';
import promotion7 from '../assets/media/promotion-8.jpg';


const promotions = () =>{
  return(
    <section className='promotions saz'>
      <div className="container">

<h1>Акции</h1>
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
        <Col className="promotionscol">
       
       <img src={promotion5} alt="" />
         <h5>
       Ребенок до 4 лет бесплатно
     </h5>
     <a href="">Подробнее</a>
         </Col>
         <Col className="promotionscol">
       
       <img src={promotion6} alt="" />
         <h5>
       Скидка до 30% на 2024 год
     </h5>
     <a href="">Подробнее</a>
         </Col>
         <Col className="promotionscol">
       
       <img src={promotion7} alt="" />
         <h5>
       Приведи друга и получи скидку
     </h5>
     <a href="">Подробнее</a>
         </Col>
      </Row>
        








</div>
</section>
  );
}
export default promotions;