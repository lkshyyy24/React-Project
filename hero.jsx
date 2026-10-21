import { section } from 'motion/react-client'
import React from 'react'
import Animated from '../components/animated'

const avatar =[
"/assets/user-1.jpeg  ",
"/assets/user-2.jpeg",
"/assets/user-3.jpeg",
"/assets/user-4.jpeg",

]

const hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url('./public/assets/heroBanner.png')] bg-cover bg-center">
      <Animated delay={0.2} y ={-40}>
        <p className="text-lg text-orange-500">WHERE FLAVORS MEET ELEGENCE .</p>
      </Animated>

      <Animated>
        <h1 className="text-4xl font-bold text-black mt-4" >
          Crafted for unforgettable moments
        </h1>
      </Animated>
      <Animated delay={0.2} x={-40} >
        <p className="text-lg text-black">Where people gather just not to eat , but to make memories .</p>
      </Animated>

      <Animated y={40}>
        <a href="#">
          <button className='text-white p-3 bg-orange-400 hover:bg-orange-300 border border-orange-300 rounded-xl m-4' >book a table</button>
        </a>
      </Animated>
      <Animated y={50}>
        <div className='flex justify-center'>
          {avatar.map((src,i)=>(
            <img key = {i} src={src} alt="guest" className="size=10 h-10 rounded-full border-2 border-white -ml-2 " /> 
          ))}
        </div>
        <div>
          <p className='text-black text-sm gap-2 p-2'>4.5/5 Reviews - 20kCustomers</p>
        </div>
      </Animated>

    </section>
  )
}

export default hero
