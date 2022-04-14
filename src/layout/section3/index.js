import { useTranslation } from 'react-i18next';

import Serv from '../../assets/services.mp4'

import Product from '../../assets/misc/Product.svg';
import Design from '../../assets/misc/Design.svg';
import Mobile from '../../assets/misc/Mobile.svg';
import WebD from '../../assets/misc/Web.svg';
import QA from '../../assets/misc/QA.svg';
import DevOps from '../../assets/misc/DevOps.svg'
import Metaverse from '../../assets/misc/Metaverse.svg';
import Blockchain from '../../assets/misc/Blockchain.svg';

const Section3 = () =>{

    const [t, i18n] = useTranslation("global")


    return(
        <section className="relative w-full h-[80rem] md:h-[72rem] lg:h-[65rem] mt-11 " id='serv'>
        <video muted loop autoPlay preload="none" className="absolute top-0 left-0 w-full h-[30rem] object-cover" src={Serv}></video>
        <div className="relative z-10 ">
            <div className="flex flex-col text-center justify-center mx-auto pt-40">
                <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                <h1 className="font-metafont1 text-meta-white font-bold text-3xl md:text-4xl">{t("section3.h1")}</h1>
                <p className="font-metafont1 text-meta-white font-medium md:text-lg pt-4 w-10/12 mx-auto">
                        {t("section3.p")}
                </p>
                <p className="font-metafont1 text-meta-white font-medium md:text-lg pt-4 w-10/12 mx-auto">{t("section3.p2")} </p>
                </div>
            </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 mx-auto w-10/12 mt-40 lg:mt-72">
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={Product} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid1")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={Design} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid2")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={Mobile} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid3")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={WebD} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                     {t("section3.grid4")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={QA} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                     {t("section3.grid5")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={DevOps} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid6")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={Metaverse} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid7")}
                </p>
            </div>
            <div className="flex-row justify-center text-center ">
                <div className="flex justify-center">
                    <img src={Blockchain} alt=""/>
                </div>
                <p className="font-metafont1 text-meta-white font-medium p-5">
                    {t("section3.grid8")}
                </p>
            </div>
        </div>
    </section>
)}

export default Section3