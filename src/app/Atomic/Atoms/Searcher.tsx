import { SearcherProps } from "@/app/props/props";

export default function Searcher({ placeholder, classname, type, onChange }: SearcherProps) {
    return (
        <input
            type={type}
            id="inputField"
            name="inputField"
            placeholder={placeholder}
            className={classname}
            onChange={onChange}
        />
    );
}