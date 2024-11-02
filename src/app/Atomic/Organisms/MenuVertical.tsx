import DataUser from "../Molecules/DataUser";
import LinkMenu from "../Molecules/LinkMenu";
import ButtonLogout from "../Molecules/ButtonLogout"


export default function MenuVertical() {

    return (
        <nav className="MenuVertical bg-[#f9f9fc] w-64 p-4">
            <DataUser/>
            <h2 className="text-white text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-10">
                <LinkMenu url="" name="Usuarios"/>
                <LinkMenu url="" name="Cursos"/>
                <LinkMenu url="" name="Modulos"/>
                <LinkMenu url="" name="Enrollamientos"/>
                <LinkMenu url="" name="Tareas"/>
                <LinkMenu url="" name="Envios"/>
            </ul>
            <ButtonLogout/>
        </nav>
    );
}