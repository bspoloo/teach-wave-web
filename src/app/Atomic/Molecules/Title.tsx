import Text from "../Atoms/Text"
import { TitleProps } from "@/app/props/props"

export default function Title({textContent, className,fontFamily}:TitleProps){
    return(
        <div>
            <Text textContent={textContent} className={className} fontFamily={fontFamily}/>
        </div>
    )
}