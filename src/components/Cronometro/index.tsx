import Butao from '../botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';


export default function cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Ecolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Butao>Começar!</Butao>
        </div>
    )
}