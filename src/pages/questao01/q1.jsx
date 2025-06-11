import { useState } from 'react';
import { Button } from '../../components/Button/button';
import styles from './q1.module.css';

export function Questao01() {
    const [temaEscuro, setTemaEscuro] = useState(false);

    return (
        <div className={temaEscuro ? styles.temaEscuro : styles.temaClaro}>
            <h1>Questão 01</h1>
            
            <Button 
                onClick={() => setTemaEscuro(!temaEscuro)}
                title={temaEscuro ? 'Tema Claro' : 'Tema Escuro'}
                type="button"
            />
        </div>
    );
}