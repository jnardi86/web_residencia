import React, { useEffect } from 'react'
import reactDom from 'react-dom'
import HeaderButton from '../../../homeHeader/componentes/HeaderButton';

export const HomeFormModal = ({closeModal, titleModal, contentModal}) => {

   
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []); 

  return reactDom.createPortal(
    <div className='fixed inset-0 flex justify-center items-center w-[100%] h-[100%] bg-Black/80'>
        <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-White shadow-md rounded-xl'>
            <div className='text-xl font-montserrat font-Bold mb-1 text-Blue desktop:text-2xl'>{titleModal}</div>
            <div className='py-4 mb-4'>
              <p className='font-montserratAlternate font-Regular text-base desktop:text-lg text-Blue'>
                {contentModal}
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <HeaderButton
                className='px-6 py-2  text-White bg-Blue border-solid border-2 border-Blue hover:bg-Green hover:border-Blue rounded-2xl font-montserrat text-xl font-Semibold desktop:p-3 desktop:text-2xl'
                onClick={closeModal}
                type='button'
                label='Volver'
              />
            </div>
        </div>
    </div>,
    document.getElementById('modalForm')
  )
}

// .modal-container {
//     position: fixed;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(0, 0, 0, 0.5);
//   }
