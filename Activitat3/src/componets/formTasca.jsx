import React, { useState } from 'react'

const FormulariTasques = ({ funcAfegirTasca }) => {

    const [textTasca, setTextTasca] = useState('');

    const enviarForm = e => {
        e.preventDefault();
        if (!textTasca.trim()) return;
        const tascaNova = {
            id: Date.now(),
            text: textTasca,
            completada: false
        };
        funcAfegirTasca(tascaNova);
        setTextTasca('');
    };

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
    }
    return (
        <form onSubmit={enviarForm} style={{ display: 'flex' }}>
        <input
            type="text"
            value={textTasca}
            onChange={canviTextTasca}
            style={{ flex: '1', marginRight: '8px', padding: '8px' }}
        />
        <button type="submit" style={{ backgroundColor: 'green', padding: '8px' }}>Agregar Tarea</button>
    </form>
    );
};

export default FormulariTasques