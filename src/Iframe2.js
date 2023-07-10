import React from 'react';
import './NavBar.module.css';

const Iframe = () => {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe 
                title="YouTube"
                src="https://getbootstrap.com/docs/5.3/getting-started/introduction/" 
                width="560" 
                height="315" 
                style={{border: '0'}} 
                allowFullScreen
            />
        </div>
    );
};

export default Iframe;
