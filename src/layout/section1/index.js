import Title from '../../assets/title.mp4'

import { useTranslation } from 'react-i18next';


const Section1 = () => {

    const [t, i18n] = useTranslation("global")


    return(
        <section className="block w-full h-[17rem]">
            <div className="text-center mt-12">
                <div className="flex flex-col text-center">
                    <div className="bg-meta-orange w-14 h-3.5 self-center mb-4"></div>
                </div>
                <div className="flex justify-center mx-auto items-center w-9/12">
                    <video muted loop autoPlay preload="none" className="hidden lg:block w-44" id="weDev" src={Title}></video>
                    <h1 className="font-metafont1 text-meta-white font-extralight  text-4xl">
                      {t("section1.h1")}
                      <span className="font-metafont1 text-meta-white font-medium" >
                           {t("section1.span")}
                      </span>
                  </h1>
                </div>
                <div className="hidden lg:block justify-center mt-7 mx-auto items-center w-9/12">
                    <h3 className="font-metafont1 text-meta-white font-normal">
                        {t("section1.h3")}
                    </h3>     
                </div>
            </div>
        </section>

)}

export default Section1