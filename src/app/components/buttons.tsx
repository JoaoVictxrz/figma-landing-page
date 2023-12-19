import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function Button(props: { title: string, text: string }) {

    const [open, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!open)
    }
    return (
        <button className="flex flex-col text-black">
            <div className={`btn ${open ? 'open' : 'closed'}`} onClick={handleClick}>
                {open ? (
                    <div className="w-[800px] transition-transform ease-in  duration-200 font-bold text-2xl">
                        <div className="flex items-center justify-between ">
                            <h1>{props.title}</h1>
                            <LuChevronDown />
                        </div>
                    </div>
                ) : (
                    <div className="w-[800px] transition-transform ease-in duration-200 ">
                        <div className="flex items-center justify-between font-bold text-2xl border-b-primary/40 border-2 pb-4">
                            <h1>{props.title}</h1>
                            <LuChevronUp />
                        </div>
                        <div className="pt-4 text-left">
                            <h1 className="overflow-hidden">{props.text}</h1>
                        </div>
                    </div>
                )}
            </div>
        </button>
    );
}
