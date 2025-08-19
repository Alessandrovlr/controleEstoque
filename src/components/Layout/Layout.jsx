import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <header className="bg-gray-800 text-white p-4">
                <Link to={"/"}><h1>Controle de estoque</h1></Link>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
                <p>&copy; 2025 Central de estoque</p>
            </footer>
        </>
    )

}