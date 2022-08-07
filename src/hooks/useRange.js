import { useState } from 'react';

const useRange = () => {
    const [range, setRange] = useState(new Date());

    return [range, setRange];
};

export default useRange;