import React, { useState } from 'react';

export const TriggerLJ = () => {
    const [triggerLJ, setTriggerLJ] = useState(false);
    const triggerClick = () => {
        setTriggerLJ(true);
    }

    return triggerClick;
};