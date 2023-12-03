const TextWithEmoji = ({ emoji, text, align }: any) => {
    return (
        <div >
            <div className=" mx-auto border rounded-lg py-1 px-[10px] w-max border-[#8247ff33] flex items-center gap-2 bg-white ">
                <span>{emoji}</span>
                <p className="text-[#8247ff] text-xs font-bold tracking-wider">{text}</p>

            </div>
        </div>
    )
}
export default TextWithEmoji