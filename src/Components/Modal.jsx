import { forwardRef,useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import "./modal.css"
export default forwardRef(function Modal({children},ref) {
    let dialog = useRef();
    useImperativeHandle(ref,()=>{
        return {open(){
                dialog.current.showModal();
        }
    }
    })
  return (
   createPortal( <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  ,document.getElementById('modal-root'))
)
})
