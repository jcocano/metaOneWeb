import { useTranslation } from 'react-i18next';


const Section2 = () =>  {
    
    const [t, i18n] = useTranslation("global")


    return(        
        <section className="w-10/12 mx-auto h-[41rem] sm:h-[31rem] md:h-[21rem] lg:h-[12rem]" id="who">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-10/12"> 
            <div className="text-center mb-5">
                <div className="flex justify-center">
                    <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                </div>
                <h3 className="font-metafont1 text-meta-white font-semibold text-xl">{t("section2.goal")}</h3>
                <p className="font-metafont1 text-meta-white font-normal pt-1">
                    {t("section2.goal-text")}
                </p>
            </div>
            <div className="text-center  mb-5">
                <div className="flex justify-center">
                    <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                </div>
                <h3 className="font-metafont1 text-meta-white font-semibold text-xl">{t("section2.mission")}</h3>
                <p className="font-metafont1 text-meta-white font-normal pt-1">
                    {t("section2.mission-text")}
                </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 text-center mb-5">
                <div className="flex-row justify-center">
                    <div className="flex justify-center">
                        <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                    </div>
                    <h3 className="font-metafont1 text-meta-white font-semibold text-xl">{t("section2.vision")}</h3>
                     <p className="font-metafont1 text-meta-white font-normal pt-1">
                    {t("section2.vision-text")}
                </p>
                </div>
            </div>
        </div>
    </section>


)}

export default Section2