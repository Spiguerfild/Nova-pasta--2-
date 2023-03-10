import './style.css'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'

export function Register(){
    return(
        <>
             <header>
                <Title text='Criar Conta' />
            </header>
            <main>
                <form>
                    <input type="text" name="nome" placeholder="Nome de Usuário"/>
                    <input type="email" name="email" placeholder='E-mail' />
                    <input type="password" name="senha" placeholder="Senha"/>
                    <input type="password" name="senha" placeholder="Confirmar Senha"/>
                    <Button text='Criar Conta' type='primary' />
                </form>
            </main>
        </>
    )
}