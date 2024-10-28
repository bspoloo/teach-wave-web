import Presentation from "./Presentation"
import ButtonLogin from "../Molecules/ButtonLogin"

export default function Login() {

    return (
        <div className=" flex flex-col justify-between items-center">
            <Presentation />
            <ButtonLogin />
        </div>
    )
}