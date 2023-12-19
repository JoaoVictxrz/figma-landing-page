import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io"

export default function Footer() {
    return (
        <>
            <div className="bg-primary  text-white/70 w-full h-auto flex justify-between items-center p-12 px-32">
                <div className="text-xl">
                    <h1>Copyright © 2023 <span className="font-bold">MetalVagas</span></h1>
                </div>
                <div>
                    <ul className="flex gap-5 text-2xl">
                        <li><a href="https://www.facebook.com/" target="_blank"><IoLogoFacebook /></a></li>
                        <li><a href="https://web.whatsapp.com/" target="_blank"><IoLogoWhatsapp /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><IoLogoInstagram /></a></li>
                        <li><a href="https://br.linkedin.com/" target="_blank"><IoLogoLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}