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
                    <div className="bg-green-400 h-[10rem]"></div>
                </div>
            </Container>
        </section >
    )
}
export default CallToAction