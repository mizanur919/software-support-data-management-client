import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SingleServerIP = ({ singleIP }) => {
    const { _id, ConcernName, IP } = singleIP;
    const handleCopyIPToClipboard = () => {
        const el = this.h3;
        el.select();
        document.execCommand("copy");
    }
    return (
        <>
            <div className="w-full md:w-2/2 xl:w-2/2 p-6">
                <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-300 rounded-lg shadow-xl p-2">
                    <div className="flex flex-row items-center">
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-600">{ConcernName}</h5>
                            {/* <h3 className="font-bold text-xl">{IP} </h3> */}
                            <input className="border-0 bg-transparent text-center" type="text" name="" id="" value={IP} /><br />
                            <button onClick={() => this.handleCopyIPToClipboard()}>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServerIP;