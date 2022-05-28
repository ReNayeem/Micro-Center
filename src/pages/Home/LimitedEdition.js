import React from 'react';
import './LimitedEdition.css'

const LimitedEdition = () => {
    return (
        <div className='limited-edition'>
            <div className='container'>
                <h1 className='limited-edition-h1'>Give way!</h1>
                <hr className='limited-edition-hr' />
                <p>Just purchase any product once for entry!</p>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <div className='limited-edition-detail text-start'>
                        <h1>eXcross V8 <span className='text-white'>*Limited Edition</span></h1>
                        <p><span className='text-white'>Minimum supported components:</span></p>
                        <p><span className='text-white'>Processor:</span> AMD Ryzen 7 5700G</p>
                        <p><span className='text-white'>Speed:</span> 8 core 3.8 gigahertz</p>
                        <p><span className='text-white'>RAM:</span> 32GB Corsair Platinum</p>
                        <p><span className='text-white'>GPU:</span> SLR NVIDIA GeForce RTX 3070 <span className='text-white'>X</span> 2</p>
                        <p><span className='text-white'>Storage:</span> 2TB NVME SSD</p>
                    </div>
                    <img className='limited-edition-image' src="Resources/limitedEdition.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LimitedEdition;