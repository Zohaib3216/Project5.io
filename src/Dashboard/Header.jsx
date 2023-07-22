import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Inventory Management Project</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Inventory</button>
            </div>
        </header>
    )
}

export default Header