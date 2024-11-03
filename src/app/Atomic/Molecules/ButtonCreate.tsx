import Create from "@/app/resources/svg/create.svg";
import ModalDeleteCourse from "../Organisms/Course/ModalDeleteCourse";
import { useState } from "react";
import { CreateProps, DeleteProps } from "@/app/props/props";


export default function ButtonCreate({text, onClick}: CreateProps) {

    return (
        <div className="flex w-full">
            <button
                className="font-semibold py-2 px-4 top-4 right-4 flex items-center justify-center p-2 bg-[#698ee7] hover:bg-[#27b6da] rounded-full transition duration-200 ease-in-out"
                aria-label={text}
                onClick={onClick}
            >
            {text}
                <Create className="w-5 h-5" />
            </button>
        </div>
    )
}