import { Row, Col, Button } from "react-bootstrap";
import promotion1 from "../assets/media/promotions-1.jpg";
import promotion2 from "../assets/media/promotions-2.jpg";
import promotion3 from "../assets/media/promotions-3.jpg";
import promotion4 from "../assets/media/promotions-4.jpg";
const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="container">
          <h1>Админ-панель</h1>
          <h2>Акции</h2>
          <Row className="gap-4" md={2}>
            <Col className="promotionscol">
              <img src={promotion1} alt="" />
              <h5>Новогодний банкет 2025</h5>
              <a href="">Подробнее</a>
              <Button variant="danger">Удалить</Button>
            </Col>
            <Col className="promotionscol">
              <img src={promotion2} alt="" />
              <h5>Новые корпуса 10 и 11</h5>
              <a href="">Подробнее</a>
              <Button variant="danger">Удалить</Button>
            </Col>
            <Col className="promotionscol">
              <img src={promotion3} alt="" />
              <h5>Выгодное межсезонье</h5>
              <a href="">Подробнее</a>
              <Button variant="danger">Удалить</Button>
            </Col>
            <Col className="promotionscol">
              <img src={promotion4} alt="" />
              <h5>Скидка 50% на 2025 год</h5>
              <a href="">Подробнее</a>
              <Button variant="danger">Удалить</Button>
            </Col>
            <Col className="promotionscol dob">
              <Button variant="success" className="px-4 ">
                Добавить новую акцию
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Admin;
