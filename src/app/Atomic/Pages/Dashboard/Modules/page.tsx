"use client";

import Searcher from "@/app/Atomic/Atoms/Searcher";


export default function Page() {

    const show = () =>{
        console.log("hla ");
    }

    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap gap-9 w-[86%]">
            <div className="w-full flex justify-center items-center bg-[#eceffc] h-[80px] ">
                <Searcher
                    type="text"
                    placeholder="Buca un Modulo"
                    classname="search-input"
                    onChange={show}
                />
            </div>
        </main>
    );
}