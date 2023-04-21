import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    return <div>
        <div onClick={handleClick}>{selection?.label || 'Select...'}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>;
}

export default Dropdown;