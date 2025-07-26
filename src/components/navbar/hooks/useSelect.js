import React from 'react'

export const useSelect = () => {


    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'none',
            borderColor: 'transparent',
            borderRadius: '4px',
            padding: '1px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'blue',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#3956dd' : '##FFF',
            color: state.isSelected ? '#FFF' : '#312f2b',
            '&:hover': {
                backgroundColor: '#FFF',
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '4px',
            marginTop: '0',
            backgroundColor: '#FFF'
        }),
    };

    return {
        customStyles
    }


}






