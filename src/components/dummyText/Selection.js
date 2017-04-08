import React from 'react' 

export  const  Selection  =  ({ onGenerate, onSelect, onChange }) => {
    function handleSubmit(event) {
        event.preventDefault();
        onGenerate();
    }
    return (
        <form onSubmit={ handleSubmit} className="form-inline" id="form1">
            <div className="form-group">
             <label htmlFor="format">Format</label>
             <select onChange={ onSelect } >
                <option value="p">P</option>
                <option value="ul">UL</option>
                <option value="ol">OL</option>
             </select>
             </div>
             <div className="form-group">
             <label htmlFor="elements">Number of Elements </label>
                <input type="text" placeholder="" onChange={onChange}/>
                <input type="submit" value="generate" className="btn btn-primary"/>
             </div>
        </form>
    )
}

