import React from "react";
import NavBarFixed from "../../components/Header/NavBarFixed";
import { Link } from "react-router-dom";
import "./style.css";

function LoginEmpresa() {
    return (
        <>
            <main className="upperPart">
                <NavBarFixed />
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4 d-lg-block d-md-none d-none bg-forms">

                        </div>
                        <div className="col-md-8 col-12">

                            <div className="row justify-content-center align-items-center vh-forms text-white">

                                <form className="px-2 col-lg-5 col-md-12 col-12 px-4 py-5 my-5 bg-im ">

                                    <h3 className="text-center mb-3">Login</h3>
                                    <label className="form-label" htmlFor="">E-mail:</label>
                                    <input className="form-control mb-3" type="email" name="" id="" />

                                    <label className="form-label mt-3" htmlFor="">Senha:</label>
                                    <input className="form-control" type="password" name="" id="" />

                                    <Link className="d-block my-3 mx-auto text-center link" to='/'>Esqueceu a senha ?</Link>
                                    <Link className="link" to="/empresa/area" ><button className="d-block mx-auto mt-3 btn-form">Entrar</button></Link>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default LoginEmpresa;