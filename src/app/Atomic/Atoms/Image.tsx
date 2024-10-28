import { ImageProps } from "../../props/props"

export default function Image({url, alt, width, height,classname }: ImageProps) {
    return (
        <img src={url} alt={alt} width={width} height={height} className={classname}/>
    )
}