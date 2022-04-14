import Logo from '../../assets/Logo.svg'
import React, { useState } from 'react'

import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const [open, setOpen] = useState(false)

    const [t, i18n] = useTranslation("global")


    return(
    <nav class="relative z-10 "  >
        <div class="flex justify-between items-center mt-8">
            <div class="font-metafont1 font-normal ">
                <button onClick={() => i18n.changeLanguage("en")} className=" pl-6 text-meta-white hover:text-meta-orange hover:underline underline-offset-4 duration-500">ENG</button>
                <button onClick={() => i18n.changeLanguage("es")} className=" pl-6 text-meta-white hover:text-meta-orange hover:underline underline-offset-4 duration-500">ESP</button>
            </div>
            <img className="h-20 ml-3 md:ml-52 lg:ml-80 xl:pl-16" src={Logo} alt=""/>
¿                <div onClick={()=>setOpen(!open)} className='flex text-2xl pr-6 md:hidden'>
                <ion-icon name="menu" class="text-meta-white hover:text-meta-orange duration-500" ></ion-icon>
                </div>
            <ul onClick={()=>setOpen(!open)}  className={`md:hidden pb-12 absolute backdrop-filter backdrop-blur-lg bg-opacity-30  z-30 left-0 top-[-50px] w-full py-10 transition-all text-center align items-center duration-500 ease-in ${open ? 'visible':'invisible'}`}>
                    <li onClick={()=>setOpen(!open)} className='pl-64 text-3xl transition-all' >
                    <ion-icon  name="close" class=" text-meta-white hover:text-meta-orange md:hidden pt-10" ></ion-icon></li>
                    <li className=' text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 pb-10 pt-20'> <a href='#who'>{t("navbar.aboutUS")}</a></li>
                    <li className=' text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 py-10'><a href='#serv'>{t("navbar.services")}</a> </li>
                    <li className=' text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 pt-10 pb-40'><a href='#val'>{t("navbar.values")}</a> </li>
            </ul>
            <ul className={`hidden md:flex`}>
                    <li className='md:pr-5 lg:pr-10 text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 pb-10 pt-20'><a href='#who'>{t("navbar.aboutUS")}</a></li>
                    <li className='md:pr-5 lg:pr-10 text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 py-10'><a href='#serv'>{t("navbar.services")}</a> </li>
                    <li className='md:pr-5 lg:pr-10 text-meta-white hover:text-meta-orange hover:underline md:my-0 my-7 underline-offset-4 duration-500 md:py-0 pt-10 pb-40'> <a href='#val'>{t("navbar.values")}</a> </li>
            </ul>
        </div>
    </nav>
)}

export default Navbar;