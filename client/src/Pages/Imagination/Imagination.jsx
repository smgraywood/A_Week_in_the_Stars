import React, { useState } from 'react';
import Quotes from '../../Components/Quotes/Quotes';

function Imagination() {
    const [refreshKey, setRefreshKey] = useState(0); // State to force refresh

    const handleRefresh = () => {
        // Increment refreshKey to force re-rendering of Quotes component
        setRefreshKey(prevKey => prevKey + 1);
    };

    return (
        <div>
            <Quotes key={refreshKey} />
			<button className="imagine-button" onClick={handleRefresh}>
                Refresh Quote
            </button>
        </div>
    );
}

export default Imagination;
