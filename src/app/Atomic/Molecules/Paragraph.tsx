import Text from "../Atoms/Text"
import { TextProps } from "@/app/props/props"

export default function Paragraph({textContent, className,fontFamily}:TextProps){
    return(
        <div>
            <Text textContent={textContent} className={className} fontFamily={fontFamily}/>
        </div>
    )
}