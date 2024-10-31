
import {Container, Button, Carousel, Row, Col} from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import photo1 from "../assets/media/slider-photo-1.jpg";
import photo2 from "../assets/media/slider-photo-2.jpg";
import photo3 from "../assets/media/slider-photo-3.jpg";
const Inauth = () =>{
    const toastify = () =>{
        toast.error('Для изменения данных обратитесь на ресепшен', {position: "bottom-right", theme:"light"});}
    return(
        <div className="container">
            <div className="cabinet">
            <h1>Личный кабинет</h1>
            <div className='inform'>
                <h2>Информация о вас</h2>
                <div className="inform-left">
                    <h4>Имя: </h4>
                    <h4>Фамилия: </h4>
                    <h4>Паспортные данные: </h4>
                    <Button onClick={toastify} variant='success' className='p-2'>Изменить данные</Button>
                    {/* <ToastContainer theme='light' position='bottom-right'/> */}
                </div>
            </div>
            <div className='history'>
        <h1>История забронированных номеров: </h1>
        <div className="cards">
            <Row>
              <Col className="lifecol ssds" md={4} >
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
    
              </Col>

            </Row>
            </div>
            </div>
            
            
            </div>
        </div>
    );
}


export default Inauth