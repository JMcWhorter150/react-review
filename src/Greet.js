import React from 'react';

// defaultProps is useful for error catching if values aren't included
Greet.defaultProps = {
    whom: 'Oakley'
};
export default function Greet({whom, how}) {
    return (
        <div className="card greet">
            <h1>{how} to the great {whom}</h1>
        </div>
    );
}
