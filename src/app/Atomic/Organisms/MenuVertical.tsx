import DataUser from "../Molecules/DataUser";
import LinkMenu from "../Molecules/LinkMenu";
import ButtonLogout from "../Molecules/ButtonLogout"
import Courses from "@/app/resources/svg/courses.svg"
import Users from "@/app/resources/svg/users.svg"
import Modules from "@/app/resources/svg/modules.svg"
import Assignments from "@/app/resources/svg/assignments.svg"
import Enrollments from "@/app/resources/svg/enrollments.svg"
import Submissions from "@/app/resources/svg/submissions.svg"


export default function MenuVertical() {
    const className = " flex flex-row items-center text-blue-500";

    return (
        <nav className="MenuVertical bg-[#f9f9fc] w-[14%] p-4">
            <DataUser />
            <h2 className="text-white text-lg font-semibold mb-4 ">Menu</h2>
            <ul className="space-y-10">
                <div className={className}><Users className="w-7 h-9"/>  <LinkMenu url="/dashboard/users" name="Usuarios" /></div>
                <div className={className}><Courses className="w-7 h-9"/>  <LinkMenu url="/dashboard/courses" name="Cursos" /></div>
                <div className={className}><Modules className="w-7 h-9"/>  <LinkMenu url="/dashboard/modules" name="Modulos" /></div>
                <div className={className}><Assignments className="w-7 h-9"/>  <LinkMenu url="/dashboard/enrollments" name="Enrollamientos" /></div>
                <div className={className}><Enrollments className="w-7 h-9"/>  <LinkMenu url="/dashboard/assignments" name="Tareas" /></div>
                <div className={className}><Submissions className="w-7 h-9"/>  <LinkMenu url="/dashboard/submissions" name="Envios" /></div>

            </ul>
            <ButtonLogout />
        </nav>
    );
}