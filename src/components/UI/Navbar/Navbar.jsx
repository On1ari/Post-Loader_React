import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
      <MyButton style={{color: 'white', border: '1px solid white'}} onClick={logout}>
        Выйти
      </MyButton>
      <div className='navbar__links'>
        <Link style={{color: 'white', marginRight: 10, textDecoration: 'none'}} to='/about'>О сайте</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/posts'>Посты</Link>
      </div>
  </div>
  )
}

export default Navbar