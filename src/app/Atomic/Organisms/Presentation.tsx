import Title from "../Molecules/Title"
import { TitleProps } from "@/app/props/props"
import { TextProps } from "@/app/props/props"
import Text from "../Atoms/Text"
import ButtonLogin from "../Molecules/ButtonLogin"
import Image from "../Atoms/Image"
import Logo from "../../resources/images/app/Logo.png"

export default function Presentation() {
    return (
        <div className="introduction flex flex-row ml-36 gap-3 flex-wrap justify-center h-screen ">
            <div className="flex flex-col gap-5 w-2/4 justify-center">
                    <Title textContent="Te gusta aprender de manera online?"
                        className='font-semibold text-[15px] text-[#092B34]'
                        fontFamily="" />

                    <Title textContent="Es hora de aprender uniendote a nuevos cursos para ampliar tu conocimiento y sabiduria en un mundo completamente basado en estudio"
                        className=' font-semibold py-2 px-4 rounded-md  text-[40px]  hover:bg-slate-200 transition duration-200'
                        fontFamily="" />
                    <Text textContent='Accede a TeachWave, tu plataforma de aprendizaje continua diseñada para estudiantes y educadores. Aquí podrás gestionar tus cursos, explorar nuevos módulos y colaborar con otros usuarios en un entorno digital intuitivo. ¡Ingresa tus credenciales para comenzar tu viaje de aprendizaje!'
                        className='font-semibold py-2 px-4 rounded-md  text-[15px] hover:bg-slate-200 transition duration-200'
                        fontFamily="" />
            </div>
            <div className=" flex flex-row justify-center items-center">
            <Image
                    url={Logo.src}
                    alt="This is the logo"
                    width={300}
                    height={100}
                    classname="" />
            </div>
        </div>
    )
}