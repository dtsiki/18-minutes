import React, { useMemo, useState } from 'react';

import './style.scss';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  options: Array<any>;
  selectedOption?: any;
  handleSelect: (option: any) => void;
}

const Select: React.FC<Props> = ({ label, name, placeholder, options, selectedOption, handleSelect }: Props) => {
  const [localValue, setLocalValue] = useState<any>(selectedOption.id || null);

  const changeValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLocalValue(e.target.value);

    handleSelect(e.target.value)
  }

  const renderOptions = useMemo(() => {
    return options.map((item) => {
      return (
        <option
          key={item.id}
          value={item.id}
          className='select__option'>
          {item.title}
        </option>
      );
    });
  }, [options, localValue]);

  return (
    <div className='select'>
      <label
        htmlFor={name}
        className='heading-l4'>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className='select__control'
        onChange={changeValue}
        value={localValue}>
        <option value=''>{placeholder}</option>
        {renderOptions}
      </select>
    </div>
  );
};

export default Select;
