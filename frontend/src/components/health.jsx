import '../assets/style.css'
import { Button, Carousel, Row, Col } from 'react-bootstrap'

import card1 from '../assets/media/med-programms-1.png'
import card2 from '../assets/media/med-programms-2.jpg'
import card3 from '../assets/media/med-programms-3.jpg'
import card4 from '../assets/media/med-programms-4.png'
import advantages1 from '../assets/media/advantages-1.svg'
import advantages2 from '../assets/media/advantages-2.svg'
import advantages3 from '../assets/media/advantages-3.svg'
import advantages4 from '../assets/media/advantages-4.svg'
import advantages5 from '../assets/media/advantages-5.svg'
import advantages6 from '../assets/media/advantages-6.svg'
import doctor1 from '../assets/media/vrach-1.jpg'
import doctor2 from '../assets/media/vrach-2.jpg'
import doctor3 from '../assets/media/vrach-3.jpg'
import doctor4 from '../assets/media/vrach-4.jpg'

const Health = () =>{
  return(
    <section className='health-section'>
      <div className="container">
        <div className="med-programms">
          <div className="med-programms-top">
    <h2>Медицинские программы</h2>
    <p>

Оздоровительные программы разрабатываются и совершенствуются в сотрудничестве с НИИ физиотерапии, медицинской климатологии и реабилитации имени Сеченова.
</p>
</div>
<div className="med-programms-cards">
  <Row>
    
    <Col md={2}className='med-programms-card'>
    <h1 className='ccc'>Стройный силуэт <br />Здоровое тело</h1>
    <img src={card1} alt="" />
    <p>Системный подход программы за короткий период позволяет получить ощутимый результат сразу после прохождения курса</p>
    </Col>
    
    <Col  md={2}className='med-programms-card'>
    <h1>Лечение сердечных заболеваний</h1>
    <img src={card3} alt="" />
    <p>Здоровье сердца: комплексный подход к восстановлению и профилактике</p>
    </Col>
    
    <Col md={2}className='med-programms-card'>
    <h1>Лечение опорных систем</h1>
    <img src={card4} alt="" />
    <p>Целостный подход к восстановлению функций опорно-двигательного аппарата</p>
    </Col>

    <Col md={2}className='med-programms-card'>
    <h1>Лечение органов дыхания</h1>
    <img src={card2} alt="" />
    <p>Комплексный подход к восстановлению и укреплению органов дыхания</p>
    </Col>

  </Row>
</div>
</div>

<section className="advantages">
    <h1>Преимущества санатория</h1>
    <Row>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages1} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Лечение и медицина</h4>
      <p>Оздоровительные программы разрабатываются и совершенствуются в сотрудничестве с НИИ</p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages2} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Бассейн с подогревом</h4>
      <p>Оснащен всем необходимым для приятного семейного отдыха </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages3} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Обширная территория</h4>
      <p>Целый реликтовый парк и множество троп для неспешных прогулок </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages4} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Развлечения и анимация</h4>
      <p>Концертные программы для родителей и увлекательная детская анимация </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages5} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Ежедневные экскурсии</h4>
      <p>Наши гости могут наслаждаться природой и достопримечательностями </p>
    </div>
    
      </div>
      </Col>
      <Col md={4}>
      <div className="advantages-column">
    <div className="advantages-column-left"><img src={advantages6} alt="" /></div>
    <div className="advantages-column-right">
      <h4>Трёхразовое питание</h4>
      <p> Разнообразное и здоровое питание, по системе “Шведский стол” </p>
    </div>
    
      </div>
      </Col>
    </Row></section>

    <section className='our-doctors'>
    <h1>Наши специалисты</h1>
    <Row>
      <Col md={2}className='doctor-card'>
      <h4>Врач-терапевт</h4>
      <img src={doctor1} alt="" />
      <h5>Гришанов Андрей</h5>
      </Col>

      <Col md={2}className='doctor-card'>
      <h4>Врач-терапевт</h4>
      <img src={doctor2} alt="" />
      <h5>Мамбетова Диляра</h5>
      </Col>

      <Col md={2}className='doctor-card'>
      <h4>Медицинская сестра</h4>
      <img src={doctor3} alt="" />
      <h5>Гапотченко Наталия</h5>
      </Col>

      <Col md={2}className='doctor-card'>
      <h4>Врач УЗД</h4>
      <img src={doctor4} alt="" />
      <h5>Кокорев Глеб</h5>
      </Col>
    </Row>
    </section>
      </div>

    </section>

  );
}
export default Health