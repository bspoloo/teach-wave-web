import DataUser from "../Molecules/DataUser";
import LinkMenu from "../Molecules/LinkMenu";
import ButtonLogout from "../Molecules/ButtonLogout"


export default function MenuVertical() {

    return (
        <nav className="MenuVertical bg-[#f9f9fc] w-[14%] p-4">
            <DataUser/>
            <h2 className="text-white text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-10">
                <LinkMenu url="/dashboard/users" name="Usuarios"/>
                <LinkMenu url="/dashboard/courses" name="Cursos"/>
                <LinkMenu url="/dashboard/modules" name="Modulos"/>
                <LinkMenu url="/dashboard/enrollments" name="Enrollamientos"/>
                <LinkMenu url="/dashboard/assignments" name="Tareas"/>
                <LinkMenu url="/dashboard/submissions" name="Envios"/>
            </ul>
            <ButtonLogout/>
        </nav>
    );
}