import React,{ useEffect, useState } from 'react'
import { Link }from 'react-router-dom'

const Navbar = () => {
  const link = ['Home', 'About', 'Expercence', 'Contact']
  const [isOpen, setOpen] = useStates(false)
  const targets = {
    Home : document.getElementById('home'),
    About : document.getElementById('about'),
    Expercence : document.getElementById('expercence'),
    Contact : document.getElementById('contact') 
  }
  useEffect(()=>{
  },[targets?.Contact]
  )

  const toggleroll = (evt) => {
    setOpen(!isOpen)
    evt.preventDefault()
    targets[evt.target.name]?.scrollIntoView()
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
    <>
    <div>
      <Menu/>
      <nav>
        {
          Link.map((item, index) =>{
            return <a key={index} href={`#${link}`} name={link} onLoad={setOpen} onClick={(evt)=>{
              targets[evt.target.name]?.scrollIntoView()
            setOpen(false)}
            }>{link}</a>
          })
        }
      </nav>
    </div>
    </>
  )
}

export default Navbar