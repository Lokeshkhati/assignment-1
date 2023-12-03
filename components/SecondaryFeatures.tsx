import Image from 'next/image'
import { Container } from './Container'
import TextWithEmoji from './TextWithEmoji'


const data = [
    {
        id: 1,
        title: 'Cross-Platform Compatibility',
        desc: "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.",
        icon: '/assets/phone.svg'
    },
    {
        id: 2,
        title: 'Stay Informed with Essential Notifications',
        desc: "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.",
        icon: '/assets/bell.svg'
    },
    {
        id: 3,
        title: 'Secure Data Encryption at all times',
        desc: "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.",
        icon: '/assets/fire.svg'
    },
]
const SecondaryFeatures = () => {
    return (
        <section className='w-full bg-[#1c1c1c] py-14' >
            <Container>
                <div className='flex flex-col  gap-[60px]'>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-5xl">
                        <TextWithEmoji emoji='🤩' text='AND MORE...' align='start' />
                        <p className=" mt-6 text-4xl font-semibold tracking-tight text-[#fdf2ec] sm:text-5xl">
                            Explore an array of features that elevate your  <span className="text-[#fe815b]">
                                Productivity</span> to new heights
                        </p>
                        <p className=" font-inter mt-6 text-xl sm:text-2xl max-w-2xl lg:max-w-xl leading-9 text-[#6e6c6c]">
                            Discover the tools that will revolutionize the way you manage and optimize your operations
                        </p>
                    </div>

                    <div className="grid mx-auto max-w-2xl xl:max-w-full  grid-cols-1 xl:grid-cols-3 gap-10 ">
                        {
                            data.map((item) => (
                                <>
                                    <div className='rounded-3xl bg-[#212121] border border-white px-8 pt-10 pb-14'>
                                        <div className='flex justify-center items-center'>
                                            <div className='bg-[#8347fe] w-16 h-16 rounded-[20px] flex justify-center items-center'>
                                                <Image src={item.icon} height={24} width={24} alt="" />
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <h2 className=' text-center text-2xl font-bold text-white'>
                                                {item.title}
                                            </h2>

                                            <p className='text-center text-xl mt-2 text-[#717171]'>
                                                {item.desc}
                                            </p>

                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div >
            </Container >
        </section >
    )
}
export default SecondaryFeatures