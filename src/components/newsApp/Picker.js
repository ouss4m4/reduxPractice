import React from 'react';

export const Picker = ({onValidate, onLangChange,onCategoryChange}) => {
    const handleSubmit =(e) => {
        e.preventDefault();
        onValidate();
    }
    return(<form onSubmit={handleSubmit}>
            <label htmlFor='Language'> Language </label>
            <select onChange={onLangChange}>
                <option value="en"> English </option>
                <option value="de"> Deutsch </option>
            </select>
            <label htmlFor='category'> Category </label>
            <select onChange={onCategoryChange}>
                <option value="general"> General </option>
                <option value="sport"> Sport </option>
                <option value="business"> Business </option>
                <option value="gaming"> gaming </option>
                <option value="technology"> technology </option>
                <option value="entertainment"> entertainment </option>
            </select>
            <input type="submit" value="Get Sources"/>
        </form>
    )
}