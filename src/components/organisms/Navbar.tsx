import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 pr-9 pl-9">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <Image 
                        className="h-[80px] w-[80px] mr-2" 
                        src={{
                            src: "/logo.png",
                            height: 50,
                            width: 50
                        }}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="flex-grow"/>
            <div>
                <Link href="/leaderboard">
                    <label className="text-white hover:text-gray-300">
                        Leaderboard
                    </label>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
