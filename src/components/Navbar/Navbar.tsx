import s from "./Navbar.module.css"
import { PlusIcon, SunIcon, DownloadIcon, CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

export default function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s["nav-group"]}>
                <button className={s["nav-item"]}>
                    <PlusIcon />
                </button>
            </div>
            <div className={s["nav-group"]}>
                <button className={s["nav-item"]}>
                    <CalendarIcon />
                </button>
                <button className={s["nav-item"]}>
                    <DownloadIcon />
                </button>
                <button className={s["nav-item"]}>
                    <SunIcon />
                </button>
            </div>
            <div className={s["nav-group"]}>
                <button className={s["nav-item"]}>
                    <ArrowLeftIcon />
                </button>
                <button className={s["nav-item"]}>
                    <ArrowRightIcon />
                </button>
            </div>
        </nav>
    )
}