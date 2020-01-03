import React from 'react'

const AddBookItem = props => {
  return (
    <form onSubmit={ props.addBookItem }>
      <div className="form-group">
        <label>Book name</label>
        <input type="text" className="form-control" name="book" value={props.book} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Book cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Add book item </button>
    </form>
  )
}

export default AddBookItem;