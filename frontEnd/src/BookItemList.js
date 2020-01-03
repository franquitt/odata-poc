import React from 'react';

  const BookItemList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Título</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                props.bookItems.map((bookItem) => (
                    <tr key={bookItem.id}>
                      <td>{ bookItem.book }</td>
                      <td>{ bookItem.cost }</td>
                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editBookItem(bookItem) }>Editar</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteBookItem(bookItem.id) }>Eliminar</button>
                      </td>
                    </tr>
                )
              )
            }
        </tbody>
      </table>
    );
  }


export default BookItemList;


