import { Container } from "./Container"
import TextWithEmoji from "./TextWithEmoji";


const Faqs = () => {
    return (
        <section className="bg-white w-full pt-[150px] pb-[120px]">
            <Container>
                <div className='flex flex-wrap gap-[10px]'>
                    <div className=" flex flex-col gap-[20px]  max-w-[350px] ">
                        <TextWithEmoji emoji='🙋‍♀️' text='
FAQ' align='start' />
                        <p className="  text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Need
                            <span className=" block mx-2 md:mx-0 text-[#fe815b]">
                                Answers?</span>
                        </p>
                        <p className=" font-inter  text-lg sm:text-xl leading-9 text-[#6e6c6c]">
                            Check out our most commonly asked questions below to find the information you need.
                        </p>
                    </div>
                    <div className=" flex-1 bg-red-500 h-[30rem] w-[60%] max-w-full ">

                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Faqs