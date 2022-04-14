import { useTranslation } from 'react-i18next';


const Section5 = () => {
    
    const [t, i18n] = useTranslation("global")


    return(
        <section className="" id="contact">
        <div className="flex flex-col text-center mx-auto w-11/12">
            <div className="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
            <h1 className="font-metafont1 text-meta-white text-4xl font-bold mx-10">{t("section5.h1")}</h1>
            <p className="font-metafont1 text-meta-white md:text-lg pt-3 mx-10">{t("section5.p")}</p>
        </div>
        <div className="flex  justify-center mt-5">
            <form className="flex flex-col mx-auto w-9/12" action="https://formsubmit.co/info@metaone.mx" method="POST">
                <input className="my-3 border-2 placeholder:text-gray-700  h-14 border-meta-orange rounded-full bg-transparent font-metafont1 pl-5 text-meta-white focus:outline-none focus:border-meta-orange-hover" 
                type="text" placeholder={t("section5.name")} required />
                <input className="my-5 border-2 placeholder:text-gray-700  h-14 border-meta-orange rounded-full bg-transparent font-metafont1 pl-5 text-meta-white focus:outline-none focus:border-meta-orange-hover" 
                type="text" placeholder={t("section5.lname")} required />
                <input className="my-3 border-2 placeholder:text-gray-700  h-14 border-meta-orange rounded-full bg-transparent font-metafont1 pl-5 text-meta-white focus:outline-none focus:border-meta-orange-hover" 
                type="email" placeholder={t("section5.mail")} required />
                <textarea 
                className="my-3 border-2 placeholder:text-gray-700  h-48 border-meta-orange rounded-3xl bg-transparent font-metafont1 pl-5 text-meta-white focus:outline-none text-justify focus:border-meta-orange-hover" 
                name="Text1" 
                id="4" 
                cols="30" 
                rows="10"
                placeholder={t("section5.message")} required ></textarea>
                <input className="bg-meta-orange hover:bg-meta-orange-hover font-metafont1 text-meta-white w-40 h-12 rounded-xl self-end mt-4" type="submit" value={t("section5.btn")}/>
            </form>
        </div>  
    </section>

)}

export default Section5