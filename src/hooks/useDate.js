import { useState } from 'react';

const useDate = () => {
    const [date, setDate] = useState(new Date());
    return [date, setDate];
};

export default useDate;