import React from 'react';
import { useParams } from 'react-router';

const VeiwApplication = () => {
    const {id} = useParams()
  
    return (
        <div>
            <h4 className="text-4xl">veiw application For : {id}</h4>
        </div>
    );
};

export default VeiwApplication;