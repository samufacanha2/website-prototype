import React from 'react';

export default function Version({children}) {
    return ( <div>
            {children}
            <div className="version">(Em Desenvolvimento) Versão 0.5</div>
        </div>
    )
}