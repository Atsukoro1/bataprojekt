import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 pr-9 pl-9">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image 
                    className="h-[80px] w-[80px] mr-2" 
                    src={{
                        src: "/logo.png",
                        height: 50,
                        width: 50
                    }}
                    alt="Logo"
                />
            </div>
        </nav>
    )
}

export default Navbar;