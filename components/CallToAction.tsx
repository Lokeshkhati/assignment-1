import Image from "next/image"
import { Container } from "./Container"
import TextWithEmoji from "./TextWithEmoji"

const CallToAction = () => {
    return (
        <section>
            <Container>
                <div className=" flex gap-10 w-full bg-white ring-1 ring-gray-300 rounded-2xl">
                    <div>
                        <div className=" max-w-2xl ">
                            <TextWithEmoji emoji="👋" text="DON'T MISS OUT" />
                            <p className="mt-2 text-4xl font-semibold tracking-wide text-gray-900 sm:text-5xl">
                                Select your ideal
                                <span className=" mx-2 text-[#fe815b]">
                                    Pricing
                                </span>
                                plan
                            </p>
                        </div>
                        <div>
                            <p className=" mt-6  text-center text-lg sm:text-2xl leading-8 text-[#7f7e7d]">
                                At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                            </p>
                            <a
                                href='#'
                                className='bg-[#8347fe] text-white shadow-sm ss w-max mt-8  rounded-xl py-3 px-4  text-lg font-semibold leading-6 '
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="  border-2 rounded-lg py-1 px-[10px] w-max border-[#8247ff33] flex items-center gap-2 bg-white ">
                            <span className="text-[#8247ff] text-xl font-bold tracking-wider" > 200+</span>
                            <p className="text-gray-900 text-xl font-bold tracking-wider"> Happy Users</p>

                        </div>
                        <Image src="/assets/user.png" alt="users" height={300} width={300} />
                    </div>
                </div>
            </Container>
        </section >
    )
}
export default CallToAction