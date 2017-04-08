import React from 'react' 

export  const  Selection  =  ({ onTranslate, onSelect, onChange }) => {
    function handleSubmit(event) {
        event.preventDefault();
        onTranslate();
    }
    return (
        <form onSubmit={ handleSubmit} id="form1">
            <div className="form-group">
             <label htmlFor="language">language</label>
             <select onChange={ onSelect } >
                <option value="es">spanish</option>
                <option value="ru">russian</option>
                <option value="ar">arabic</option>
             </select>
             </div>
             <div className="form-group">
             <label htmlFor="text"> Text </label>
                <textarea className="form-control" rows="3" onChange={onChange} ></textarea>
                <input type="submit" value="Translate" className="btn btn-primary"/>
             </div>
        </form>
    )
}

