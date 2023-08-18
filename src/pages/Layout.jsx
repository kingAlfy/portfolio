import { Outlet } from "react-router-dom";
import { Background } from "../components/Background";
import { NavBar } from "../components/NavBar";


export function Layout() {
    return (
        <div>
            <Background />
            <header>
                <NavBar />
            </header>
            <Outlet />
        </div>
    )
}