import {TextProps} from "../../props/props"


export default function Text({ textContent, className, fontFamily }: TextProps) {
    return (
        <h1 style={{ fontFamily }} className={className}>{textContent}</h1>
        // <h1 style={{ fontFamily: 'Playfair Display' }} className={className}>{textContent}</h1>
    )
}