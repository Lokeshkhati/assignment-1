const TextWithEmoji = ({ emoji, text, align = 'start' }: any) => {
    return (
        <div style={{ display: 'flex', justifyContent: align }}>
            <div className="  border rounded-lg py-1 px-[10px] w-max border-[#8247ff33] flex items-center gap-2 bg-white ">
                <span >{emoji}</span>
                {/* <span style={{ emoji== '🛠' && color = '#8247ff'}}>{emoji}</span> */}
                <p className="text-[#8247ff] text-xs font-bold tracking-wider">{text}</p>

            </div>
        </div >
    )
}
export default TextWithEmoji