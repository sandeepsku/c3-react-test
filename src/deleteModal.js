import React from 'react';

const Modal = (props) => {
  const {onUserDelete} = props;
return (
  <div id="myModal" class="modal">
    <div class="modal-content">
      <p>Are you sure, you want to delete?</p>
      <button onClick={(event) => onUserDelete(event)}>Yes</button>
      <button onClick={(event) => onUserDelete(event)}>No</button>
    </div>
  </div>
  )

}


export default Modal;
