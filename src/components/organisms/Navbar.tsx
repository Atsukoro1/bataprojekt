import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 pr-9 pl-9">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image 
                    className="h-[80px] w-[80px] mr-2" 
                    src="https://media.discordapp.net/attachments/1077856507867172894/1077857330621853757/IMG_2807.png?width=606&height=606" 
                    alt="Logo"
                />
            </div>
        </nav>
    )
}

export default Navbar;