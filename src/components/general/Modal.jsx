import React, { useEffect, useRef } from 'react';
import "../../assets/modal/style.css";

const Modal = ({ setOpenModal, item }) => {

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (ref.current === e.target) {
        setOpenModal(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
    
  }, [setOpenModal])

  return (
    <div className="modal-overlay" ref={ref}>
        <div className="modal pr">
            <button className="modal-btn" onClick={() => {setOpenModal(false)}}>x</button>
            <div className='post__item-block'>
                <div className='post__item-inner'>
                  <img className='post__item-img' src={item.img} alt={item.title}  srcSet={`${item.img} 1x, ${item.img_2x} 2x`} />
                </div>
                <span className='post__item-desc'>{item.tags}</span>
                <h2 className='post__item-title'>{item.title}</h2>
                <p className='post__item-par'>{item.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Modal;
