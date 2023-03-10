import './style.css'
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Login(){
    return(
        <>
             <header>
                <Title text="Bem Vindo de Volta  (:"/>
                
            </header>
            <main>
                <form>
                    <div className='sub-title-login'><Title text='Login' /></div>
                
                    <input type="email" name="email" placeholder="E-mail"/>
                    <input type="password" name="senha" placeholder="Senha"/>
                    <Button text="Entrar" type="primary" />
                </form>
            </main>
        </>
    )
}