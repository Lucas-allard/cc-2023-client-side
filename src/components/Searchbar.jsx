'use client'
import Button from "@/components/Button";
import {useState} from "react";
import Input from "@/components/Input";

const Searchbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive((prev) => !prev)
    }
    return (
        <>
            {isActive &&
            <form className='w-full min-h-screen bg-black p-2'>
                <Input
                    placeholder={"Rechercher par mot-clé"}
                    cssClass='w-full border-2 border-slate-300 text-white p-3 focus:outline-none focus:ring-0'
                />
            </form>
            }
            <div className='fixed bottom-0 w-full bg-white p-2 cursor-pointer'>
                <Button
                    cssClass="bg-amber-400 w-full text-3xl p-2 hover:bg-amber-300"
                    label="Rechercher"
                    formAction={toggleActive}
                />
            </div>
        </>
    )
}

export default Searchbar;