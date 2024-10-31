import { Button, Nav, Navbar } from 'react-bootstrap';
import { publicRoutes } from '../config/routes';
import { Link } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import bg from '../assets/media/background-video.mp4'
import { useEffect } from 'react';
import logo from '../assets/media/logo.png'
import {Container} from 'react-bootstrap'
import '../assets/style.css'


const Header = observer(()=>{
    const navigate = useNavigate();
    const logout = () => {
        userStore.logoutUser();
        navigate('/');
        toast.info('Вы вышли с аккаунта!')
    }
    const allinclusive = () => {
        navigate('/live')
    }
  
      
      

    return (
        
        <div className='main-screen-full'>
             <video className='videoTag' autoPlay loop muted><source src={bg} type='video/mp4'></source></video>
        <section>
            {/* Навигационная панель */}
        <Navbar expand='lg' bg='' variant='' className='nav '>
            <div className='container'>
            <Navbar.Brand>
                <img src={logo} alt="" width={'80px'} height={'100px'}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='burger' className='text-black'>

            </Navbar.Toggle>
            <Navbar.Collapse id='burger'>
            {/* {Для гостя} */}
                
                {userStore.isAuth ? <Button type='button' variant='danger' onClick={() => {logout()}}>Выйти</Button> : <Nav className=''>
                    {publicRoutes.map((el,i)=><Nav.Link className='text-white swit' key={i} to={el.path} as={Link}>{el.name}</Nav.Link>)}
                </Nav>}
            </Navbar.Collapse>
       </div> </Navbar>
      </section>
      {/* Основной экран */}
      <section className='main-screen'>
<div className='container'>
        <div className='main-screen-top text-white'>
        <h1>Отдых и лечение <br />на берегу моря в Алуште</h1>
        <p>Программы оздоровления разработаны<br />и совершенствуются совместно с НИИ<br />имени И.М. Сеченова</p>

        </div>
        <div className="main-screen-buttons">
           <Button className='main-screen-button1'>Рассчитать стоимость</Button>
           <Button className='main-screen-button2' onClick={allinclusive}>Все включено</Button>
        </div>
        </div>
        </section>
        <section>
            
        </section>
      
      
        
      </div>
    );
})

export default Header;