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
                    <div className="md:hidden">{isOpen ?
                        <div className="text-2xl">
                            <LuAlignJustify />
                        </div> :
                        <div className="text-2xl w-auto transition-transform duration-500 ease-in">

                            <IoMdClose />
                            <div>
                                <div className="absolute top-15 right-0">
                                    <ul className="flex gap-3 flex-col w-auto p-6 bg-primary ">
                                        <li><a href="" className="list">O que fazemos</a></li>
                                        <li><a href="" className="list">Para empresas</a></li>
                                        <li><a href="" className="list">Para profissionais</a></li>
                                        <li><a href="" className="list">Como funciona</a></li>
                                        <li><a href="" className="list1">Anunciar vaga</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    }
                    </div>
                </div>
            </header>
        </>
    )
}