import React from 'react'
import './Section.css'
import Servicio from '../Servicios/Servicios'
import Beneficio from '../Beneficios/Beneficios'
import Contacto from '../Contacto/Contacto'
import Footer from '../footer/Footer'
export default function Section() {
  return (
    <section className='section1'>
        <div className="containerInfo">
            <h1>SERVICIO DE GRÚAS Y MECÁNICOS</h1>
            <h2>El mejor servicio 24/7, chatea para encontar el problema o llama una grúa</h2>
            <a className='button1' href="">CHAT</a>
            <a className='button2' href="./Gruas">GRÚAS</a>
        </div>
          <Servicio/>
          <Beneficio/>
          <Contacto/>
          <Footer/>
    </section>
   
  )
}
