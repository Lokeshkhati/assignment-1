import Image from "next/image"
import { Container } from "./Container"
import TextWithEmoji from "./TextWithEmoji"

const reviewsData = [
    {
        id: 1,
        name: 'Alex',
        profession: "IT  Manager",
        text: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
        img: "/assets/person-1.webp"
    },
    {
        id: 2,
        name: 'Emily',
        profession: "Art Director",
        text: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
        img: "/assets/person-2.webp"
    },
    {
        id: 3,
        name: 'Sarah',
        profession: "Project Manager",
        text: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly",
        img: "/assets/person-3.webp"
    },
    {
        id: 4,
        name: 'David',
        profession: "Freelancer",
        text: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity",
        img: "/assets/person-4.webp"
    },

]

const Reviews = () => {
    return (
        <section className="bg-white ">
            <Container>
                <div className="flex flex-col gap-5 ">
                    <TextWithEmoji emoji="🧡" text="TESTIMONIALS" />
                    <h4 className="text-5xl font-bold ">
                        Hear from our <span className="text-[#fe815b]">
                            Satisfied
                        </span> clients
                    </h4>
                    <p className=" font-inter font-normal text-xl max-w-xl text-[#767575]">Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p>
                </div>
            </Container>
            {/* moving cards */}
            <div className=' flex mt-[60px] p-8'>
                {
                    reviewsData.map((review) => (
                        <div key={review.id} className=" h-max py-10 px-8 w-[350px] ring-1 rounded-3xl ring-gray-200  ">
                            <p className='text-xl font-normal'>&quot; {review.text} &quot;</p>
                            <div className='font-inter flex   items-center gap-4 mt-8'>
                                <Image src={review.img} height={60} width={60} alt="" />
                                <div className="flex flex-col" >
                                    <span className="text-lg text-gray-900">{review.name}</span>
                                    <span className="text-lg text-[#767575]">{review.profession}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Reviews