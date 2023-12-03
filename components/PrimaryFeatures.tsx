import Image from "next/image"
import { Container } from "./Container"
import TextWithEmoji from "./TextWithEmoji"

const data = [
    {
        id: 1,
        img: '/assets/schedule.webp',
        title: 'Flexible Scheduling',
        desc: 'Stay productive with our flexible scheduling system'
    },
    {
        id: 2,
        img: '/assets/communication.webp',
        title: 'Easy Communication',
        desc: 'Stay productive with our flexible scheduling system'
    },
    {
        id: 3,
        img: '/assets/analytics.webp',
        title: 'Analytics',
        desc: 'Stay productive with our flexible scheduling system'
    },
]
const PrimaryFeatures = () => {
    return (
        <section className="flex flex-col justify-center py-15 md:py-20 md:px-[120px] bg-white">
            <Container>
                <div className="flex flex-col gap-[60px]  ">
                    <div className=" text-center">
                        <TextWithEmoji emoji='🔥' text='PREMIER FEATURES' align='center' />
                        <h2 className="mt-2  font-medium text-gray-900 text-[40px] md:text-[60px] tracking-tight leading-snug">Discover our product's
                            <span className="inline-block ml-2 text-[#fe815b]">Capabilities</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl  text-center text-lg sm:text-2xl leading-8 text-[#7f7e7d]">
                            Don't settle for mediocrity - embrace the future of management with Manage Wise.
                        </p>
                    </div>
                    <div className="grid   grid-cols-1 xl:grid-cols-2 gap-10">
                        <div className=" mx-auto max-w-2xl ">
                            <div className="bg-[#ededfa] rounded-3xl ">
                                <div className='flex flex-col gap-4 justify-center pt-[78px] pb-[35px] px-10'>
                                    <div className='bg-white w-12 h-12 rounded-[15px] flex items-center justify-center '>
                                        <span className="text-3xl">
                                            ⭐️
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl sm:text-5xl  sm:leading-tight tracking-normal">
                                            Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto max-w-2xl ring-1 ring-gray-200 rounded-3xl  ">
                            <Image src="/assets/task-management.webp" height={750} width={750} alt="img" />
                            <div className="p-10">
                                <h3 className="text-2xl font-semibold">Smart Task Management</h3>
                                <p className="text-[#7f7e7d] mt-1 sm:mt-2 text-md">
                                    Say goodbye to chaos with our smart task management system
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid   grid-cols-1 xl:grid-cols-3 gap-10">
                        {
                            data.map((item) => (<div key={item.id} className=" mx-auto max-w-2xl xl:max-w-full py-6 ring-1 ring-gray-200 rounded-3xl">
                                <Image src={item.img} height={350} width={350} alt='' />
                                <div className="px-6 mt-6">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-[#7f7e7d] mt-2 text-lg">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>))
                        }

                    </div>
                </div>
            </Container>
        </section>
    )
}
export default PrimaryFeatures