import { Container } from './Container'
import TextWithEmoji from './TextWithEmoji'

const SecondaryFeatures = () => {
    return (
        <section className='w-full bg-[#1c1c1c]'>
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-5xl">
                    <TextWithEmoji emoji='🤩' text='AND MORE...' align='start' />
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-[#fdf2ec] sm:text-5xl">
                        Explore an array of features that elevate your  <span className="text-[#fe815b]">
                            Productivity</span> to new heights
                    </p>
                    <p className="mt-6 text-xl sm:text-2xl max-w-2xl lg:max-w-xl leading-9 text-[#6e6c6c]">
                        Discover the tools that will revolutionize the way you manage and optimize your operations
                    </p>
                </div>

                <div className='flex gap-10'>
                    <div>
                        <div>
                            {/* icon */}
                        </div>
                        <div>
                            <div>
                                <span>Cross-Platform Compatibility</span>
                            </div>
                            <div>
                                <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default SecondaryFeatures