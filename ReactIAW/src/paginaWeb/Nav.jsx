import React from 'react'
import style from './nav.module.css'
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosPaper } from 'react-icons/io';
import { FaClipboardList } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';

function Nav() {
  return (
    <nav>
        <Link to="/" className={style.contenidonav}><FaHome />Inicio</Link> 
        <Link to="/noticias" className={style.contenidonav}><IoIosPaper />Noticias</Link>
        <Link to="/noticias/jefatura" className={style.contenidonav}><FaClipboardList />Noticias Jefatura</Link>
        <Link to="/noticias/informatica" className={style.contenidonav}><FaLaptop />Departamento Informática</Link> 
        <Link to="/noticias/otra" className={style.contenidonav}>OTRA</Link>
        <Link to="/about" className={style.contenidonav}><IoIosContact />Contacto</Link> 
    </nav>
  )
}

export default Nav