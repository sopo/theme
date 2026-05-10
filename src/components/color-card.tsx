
interface ColorCardProps{
    colorName: string,
    name: string
}
const ColorCard:React.FC<ColorCardProps>=({colorName, name})=>{
    return(
        <div>
            <div className={`w-20 h-20 border rounded ${colorName}`}>
            </div>
            <h6 >{name}</h6>
        </div>
    )
}
export default ColorCard