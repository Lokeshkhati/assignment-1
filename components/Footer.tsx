import { Container } from "./Container"
import Logo from "./Logo"

const footerNavigation = [
    { name: 'Features', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
]
const Footer = () => {
    return (
        <footer className="py-12 mt-10">

            <Container>
                <div className="flex flex-col md:flex-row items-center md:justify-between md:items-start ">
                    <Logo />
                    <ul role="list" className="mt-6 space-y-2">
                        {footerNavigation.map((item) => (
                            <li key={item.name} className="text-center md:text-left">
                                <a href={item.href} className="   text-xl leading-6 text-gray-900 ">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    <p className="mt-8 text-lg leading-5 text-gray-900  md:mt-0">
                        &copy; © 2022 ManageWise, Inc.
                    </p>
                    <div className="flex space-x-6 ">


                    </div>

                </div>
            </Container>
        </footer>
    )
}
export default Footer