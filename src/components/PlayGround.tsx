import React from 'react';
import MineField from "./MineField";

const PlayGround: React.FC = () => {
    return (
        <div className="grid">
            <MineField/>
        </div>
    );
}

export default PlayGround;