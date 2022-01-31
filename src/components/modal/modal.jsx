import React, {useCallback} from 'react';
import propTypes from 'prop-types';

function Modal({onClose, hidden, children}){
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return (
    <div className='fixed inset-0 bg-gray-900/80 z-10' onClick={onClose} hidden={hidden}>
      <div className='mx-auto mt-6 w-max max-w-full bg-gray-100 shadow-xl' onClick={stopPropagation}>
        <header className='flex justify-between bg-gray-200 items-center py-5 px-6 gap-4 border-gray-600 border-b'>
          <strong className='m-0 text-lg'>Character info</strong>
          <button className="btn btn--plus rotate-45" onClick={onClose}>
						<span className="sr-only">Close</span>
					</button>
        </header>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  hidden: propTypes.bool,
  onClose: propTypes.func.isRequired,
};

export default React.memo(Modal);
