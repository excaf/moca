import s from "./Navbar.module.css"
import { PlusIcon, SunIcon, DownloadIcon, CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import useTheme from "../../hooks/useTheme"


export default function Navbar() {
    const { toggleTheme } = useTheme()


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
                <button className={s["nav-item"]} onClick={toggleTheme}>
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