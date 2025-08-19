import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { Home } from "../pages/home"
import { PageNotFound } from "../pages/PageNotFound"
import { Estoque } from "../pages/estoque"
import { EntradaSaida } from "../pages/EntradaSaida"

export const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path="/estoque" element={<Estoque/>} />
                        <Route path="/controle" element={<EntradaSaida/>} />
                        {/* <Route path="/login" element={<Login/>} /> */}
                        {/* <Route path="/cadastroProdutos" element={<AdminPage children={<CadastroProdutos/>}/>} /> */}
                        <Route path="/*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}