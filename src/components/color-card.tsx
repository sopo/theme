
interface ColorCardProps{
    name: string,
    color: string,
    text: string,
    id: number

}
const ColorCard:React.FC<ColorCardProps>=({name, color, text,})=>{
    return(
        <div className="relative">
            <div className={`w-60 h-20 rounded ${color}`}>
            </div>
            <h6 className={`font-bold p-2 absolute bottom-0 z-10 ${text}`}>{name}</h6>
        </div>
    )
}
export default ColorCard