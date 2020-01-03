import React from 'react'

const AddBookItem = props => {
    return (
        <form onSubmit={props.addBookItem} autoComplete="off">
            <div className="form-group">
                <label>Título</label>
                <input type="text" className="form-control" name="book" value={props.book}
                       onChange={props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label>Costo</label>
                <input type="number" className="form-control" name="cost" value={props.cost}
                       onChange={props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label>Descripción</label>
                <textarea className="form-control" name="description" value={props.description}
                          onChange={props.handleInputChange}/>
            </div>
            <button className="btn btn-success mt-2"> Agregar</button>
        </form>
    )
}

export default AddBookItem;