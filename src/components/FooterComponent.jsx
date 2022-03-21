import React from 'react'



const FooterComponent = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <footer className='footer container-fluid'>
                <h1 className='text-muted'>All Rights Reserved {date} @Fuori</h1>
            </footer>
        </div>
    )
}

export default FooterComponent