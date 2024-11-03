"use client";

import SearcherDashboard from "@/app/Atomic/Organisms/SearcherDashboard";
import Image from "../../Atoms/Image";
import Administration from "../../../resources/images/app/administration.png"

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center bg-gray-100 w-[86%]">
            <div className=" flex flex-col justify-center items-center text-center">
                <Image
                    url={Administration.src}
                    alt="Bienvenido al panel de administración"
                    width={600}
                    height={200}
                    classname="mb-6 rounded-full shadow-lg"
                />
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Bienvenido al Panel de Administración
                </h1>
                <p className="text-gray-600 max-w-md mx-auto">
                    Desde aquí podrás gestionar todas las configuraciones y ajustes de la plataforma. Explora las herramientas disponibles para administrar el contenido, los usuarios y las configuraciones de forma fácil y rápida.
                </p>
            </div>
        </main>
    );
}