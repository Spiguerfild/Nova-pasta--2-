import './style.css'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
export function Index(){
    return(
        <>
        <header>
        <Title text='Bem Vindo' />
    </header>
    <main>
        <div className="action-buttons">
           <Link to={`/Login`}>
            <Button text="LOGIN" type='primary'/>
            </Link>
            <Link to={`/Register`}>
            <Button text="CRIAR CONTA" type='primary' />
            </Link>
        </div>

    </main>
    </>
    )
}