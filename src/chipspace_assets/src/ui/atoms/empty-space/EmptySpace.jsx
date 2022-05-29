import React from 'react';

function EmptySpace({ height, width }) {
    return (
        <div style={{height: height ?? '0', width: width ?? '0'}}></div>
    );
}

export default EmptySpace;