import s from "./Dashboard.module.css"
import { Navbar } from "../components"

export default function Dashboard() {
    return (
        <div className={s.page}>
            <Navbar />
            <h1>Hello</h1>
        </div>
    )
}