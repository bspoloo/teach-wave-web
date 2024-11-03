import Trash from "@/app/resources/svg/trash.svg";
import ModalDeleteCourse from "../Organisms/Course/ModalDeleteCourse";
import { useState } from "react";
import { DeleteProps } from "@/app/props/props";


export default function ButtonDelete({onClick}: DeleteProps) {

    return (
        <div className="flex w-full justify-end">
            <button
                className=" top-4 right-4 flex items-center justify-center p-2 bg-[#698ee7] hover:bg-[#27b6da] rounded-full transition duration-200 ease-in-out"
                aria-label="Eliminar"
                onClick={onClick}
            >
                <Trash className="w-5 h-5" />
            </button>
        </div>

    )
}