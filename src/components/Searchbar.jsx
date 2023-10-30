import Button from "@/components/Button";

const Searchbar = () => {
    return (
        <div className='fixed bottom-0 w-full bg-white p-2 cursor-pointer'>
            <Button
                cssClass="bg-amber-400 w-full text-3xl p-2 hover:bg-amber-300"
                label="Rechercher"
            />
        </div>
    )
}

export default Searchbar;