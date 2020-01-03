import React from 'react'

const EditBookItem = props => {
    return (
        <form autoComplete="off">
            <div className="form-group">
                <label>Título</label>
                <input type="text" className="form-control" name="book" value={props.book}
                       onChange={props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label className="text-white">Costo</label>
                <input type="number" className="form-control" name="cost" value={props.cost}
                       onChange={props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label>Descripción</label>
                <textarea className="form-control" name="description" value={props.description}
                          onChange={props.handleInputChange}></textarea>
            </div>
            <button onClick={props.updateBookItem} className="btn btn-success mt-2"> Guardar </button>
            <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2"> Cancel </button>
        </form>
    )
}

export default EditBookItem;