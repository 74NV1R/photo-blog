import React from 'react';

const PrintComments = () => {


    const v = [
        { id: 1, name: 'sam' },
        { id: 2, name: 'ram' },
        { id: 1, name: 'pam' }
    ]

    const fil = () => {
        const filtered = v.filter(x => x.id === 1);

        return filtered.map(item => (
            <li key={item.id}>{item.name}</li>
        ))
    }

    return <ul>{fil()}</ul>
}


export default PrintComments
