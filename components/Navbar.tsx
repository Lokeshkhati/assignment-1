import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-[5rem] w-full border-b border-gray-300">
            <div className=' p-6 '>
                <Logo />
                <nav>

                </nav>
            </div>
        </div>
    )
}
export default Navbar