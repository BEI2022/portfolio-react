import React,{ useEffect, useState } from 'react'
import { Link }from 'react-router-dom'

const Navbar = () => {
  const link = ['Home', 'About', 'Expercence', 'Contact']
  const [isOpen, setOpen] = useStates(false)
  const taegets = {
    Home : document.getElementById('home'),
    About : document.getElementById('about'),
    Expercence : document.getElementById('expercence'),
    Contact : document.getElementById('contact') 
  }
  useEffect(()=>{
  },[taegets?.Contact]
  )

  const toggleroll = (evt) => {
    setOpen(!isOpen)
    evt.preventDefault()
    taegets[evt.target.name]?.scrollIntoView()
  }

  const Menu = () =>{

  return (
    <div>
      {
        Link.map((item, index) => { 
          return <Link to='/' key={index} name={item} onClick={toggleroll}>{item}</Link>
        })
        }
    </div>
    )
  }

  return (
    <div>Navbar</div>
  )
}

export default Navbar