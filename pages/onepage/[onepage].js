import React from 'react';

export const getStaticPaths = () => {
    const res = await fetch("https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name");
    const data = await res.json();

}

const onepage = () => {
    return (
        <div>
            <h1>hello bddddddd</h1>
        </div>
    );
};

export default onepage;