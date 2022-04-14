import { useTranslation } from 'react-i18next';


import Valores from '../../assets/valores.mp4'
import Carroucel from '../carroucel'


const Section4 = () =>{

    const [t, i18n] = useTranslation("global")
    
    return(
        <section className="relative w-full h-[46rem] md:h-[45rem] lg:h-[45rem] -mt-8 md:-mt-24 lg:-mt-5 " id='val'>
        <video muted loop autoPlay preload="none" className="absolute top-0 left-0 w-full h-[45rem] object-cover" src={Valores}></video>
        <div>
            <div className="relative z-10">
                <div className="flex flex-col text-center justify-center mx-auto w-9/12 pt-44">
                    <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                    <h1 className="font-metafont1 text-meta-white font-bold text-3xl md:text-4xl">{t("section4.h1")}</h1>
                    <p className="font-metafont1 text-meta-white font-medium md:text-lg pt-4">
                            {t("section4.p")}
                    </p>
                </div>
            </div>
            <div className="absolute w-full pt-28 md:pt-16">
            <Carroucel />
            </div>
        </div>
    </section>
)}

export default Section4