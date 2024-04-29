import React from 'react';

function Alert({ message, color }) {
    return (
        <div style={{ color }}>
            {message}
        </div>
    );
}

export default Alert;