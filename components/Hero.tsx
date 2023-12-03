import Image from "next/image"
import { Container } from "./Container"
import TextWithEmoji from "./TextWithEmoji"

const Hero = () => {
    return (
        <section className="flex flex-col w-full pt-[100px] px-8 md:px-0">
            <div className=" mx-auto w-full">
                <div className=" flex flex-col items-center pb-[10px]">
                    <div>
                        <TextWithEmoji emoji='👋' text='WELCOME TO MANAGE WISE!' align='center' />
                        <div>
                            <h1 className=" text-[#1c1c1c] font-outfit text-center text-[50px] md:text-[80px] font-semibold ">Empower your business with
                                <span className="text-[#fe815b]">
                                    Strategic
                                </span>
                                insights
                            </h1>
                        </div>
                    </div>
                    <div>
                        <p>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <button>Get Started</button>
                        </div>
                        <div>
                            <button>Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center pt-[60px] pb-[100px]">
                <Image src='/assets/Hero.webp' width={1220} height={1220} alt='hero-image' />
            </div>
        </section >
    )
}
export default Hero