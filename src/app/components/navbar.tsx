import { LuAlignJustify } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react"

export function NavBar() {

    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className="bg-primary w-full h-28 p-12 flex justify-between items-center border-b-2 border-secondary/50">
                <div>
                    <span className="text-2xl">LOGO</span>
                </div>
                <div className="" onClick={handleClick}>
                    <div className="hidden md:flex">
                        <ul className="flex gap-3">
                            <li><a href="" className="list">O que fazemos</a></li>
                            <li><a href="" className="list">Para empresas</a></li>
                            <li><a href="" className="list">Para profissionais</a></li>
                            <li><a href="" className="list">Como funciona</a></li>
                            <li><a href="" className="list1">Anunciar vaga</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}