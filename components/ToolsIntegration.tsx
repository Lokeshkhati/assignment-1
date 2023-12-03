import Image from "next/image"
import TextWithEmoji from "./TextWithEmoji"

const ToolsIntegration = () => {
    return (
        <section className='px-6 lg:px-8 w-full bg-[#1c1c1c] pt-14 pb-[2px]'  >
            <div className='max-w-xl mx-auto'>
                <div>
                    <TextWithEmoji emoji='🛠' text='INTEGRATIONS' align='center' />
                    <p className=" text-center mt-6 text-4xl font-semibold tracking-normal leading-9 text-[#fdf2ec] sm:text-5xl">
                        Enable   <span className="text-[#fe815b]">integration
                        </span> with other popular tools and platforms
                    </p>
                    <p className=" text-center font-inter mt-6 text-lg sm:text-xl  leading-9 text-[#6e6c6c]">
                        Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                    </p>
                </div>
                <div className='mt-8'>
                    <Image src="/assets/connect-app.webp" height={600} width={600} alt="" />
                </div>
            </div>
        </section>
    )
}
export default ToolsIntegration