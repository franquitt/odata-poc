import React from 'react'

const EditBookItem = props => {
  return (
    <form>
      <div className="form-group">
        <label>Book name</label>
        <input type="text" className="form-control" name="book" value={props.book} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Book cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateBookItem } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditBookItem;