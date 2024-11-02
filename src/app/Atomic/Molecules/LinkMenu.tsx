import { LinkMenuProps } from "@/app/props/props"

export default function LinkMenu({url, name}:LinkMenuProps){
    return(
        <div>
            <li>
                <a href={url} className="font-semibold text-[#bec9d4] hover:text-[#48484a]  p-2 rounded text-[20px]">
                        {name}
                </a>
            </li>
        </div>
    )
}