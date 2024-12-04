import { LifeBuoy, Search, Settings } from "lucide-react";
import { Logo } from "./Logo";
import { NaviItem } from "./NaviItem";
import { BarChart2, CheckSquare, Flag, Home, Layers2, Layers3, User, User2, User2Icon, UserCircle2, UserMinus2, UserPlus2, UsersIcon } from "lucide-react";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
            <Logo />

            <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <Search className="h-5 w-5 text-zinc-500" />

                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500" placeholder="Search" />
            </div>

            <nav className="space-y-0.5">
                <NaviItem title="Home" icon={Home} />
                <NaviItem title="Dashboard" icon={BarChart2} />
                <NaviItem title="Projects" icon={Layers3} />
                <NaviItem title="Task" icon={CheckSquare} />
                <NaviItem title="Reporting" icon={Flag} />
                <NaviItem title="Users" icon={UsersIcon} />
            </nav>

            <div className="mt-auto flex flex-col gap-6 ">
                <nav className="space-y-0.5">
                    <NaviItem title="Suport" icon={LifeBuoy} />
                    <NaviItem title="Settings" icon={Settings} />
                </nav>

                <UsedSpaceWidget />
            </div>
        </aside>
    )   
}