import Logo from "./Logo"

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
]
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