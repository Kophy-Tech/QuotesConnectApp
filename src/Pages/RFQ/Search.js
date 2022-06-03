import React, { useCallback, useState, } from 'react'

// export const memoizedCallSearch = useCallback(
//     (inputName, inputValue, index, value, setValue) => {
//         const list = [...value];
//         list[index][inputName] = inputValue;
//         setValue(list);

//     },
//     [value],
// )


export const memoizedCallSearch = () => {


    const [valueText, setValueText] = useState([
        {
            query: '',
            description: '',
            quantity: '',
            unit: '',
            materialId: ''
        }
    ]);
    const handle = (inputName, inputValue, index) => {
        let v = value[index][inputName] = inputValue
        setValueText([...value], { v });

    }
 return [valueText, handle]
    }