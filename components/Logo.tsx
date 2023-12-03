import Image from "next/image"

const Logo = () => {
    return (
        <div>
            <Image src='/assets/logo.webp' height={180} width={180} alt='logo' />
        </div>
    )
}
export default Logo