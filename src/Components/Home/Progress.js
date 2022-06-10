import React from 'react';

const Progress = () => {
    return (
        <div className='m-12'>
            <h2 className='text-2xl text-center font-bold mb-12'>How much I know about these languages?</h2>
            <p className='mb-4 text-center'>HTML5 || CSS || Javascript || React.js || Node.js</p>
           <div className='text-center'>
           <progress className="progress progress-success w-56" value="80" max="100"></progress>
<progress className="progress progress-success w-56" value="70" max="100"></progress>
<progress className="progress progress-success w-56" value="70" max="100"></progress>
<progress className="progress progress-success w-56" value="60" max="100"></progress>
<progress className="progress progress-success w-56" value="65" max="100"></progress>
           </div>
        </div>
    );
};

export default Progress;