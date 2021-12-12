import React, { useState, useEffect } from 'react';
import './FHHRServerIP.css';
import SingleServerIP from './SingleServerIP';

const FHHRServerIP = () => {
    const [ipList, setIpList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ipList')
            .then(res => res.json())
            .then(data => setIpList(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl text-black">Four H HR &amp; Payroll Server IP List</h2>
                <div >
                    {
                        ipList.map(singleIP => <SingleServerIP
                            key={singleIP._id}
                            singleIP={singleIP}
                        ></SingleServerIP>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FHHRServerIP;