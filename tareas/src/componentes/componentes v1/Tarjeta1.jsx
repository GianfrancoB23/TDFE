import React from 'react'

const Tarjeta1 = ({id, title, completed}) => {
    return (
        <div className="tarjeta">
            <input type="checkbox" id={`list${id}`} defaultChecked={completed} className="checkbox" />
            <label className="checkLabel" htmlFor={`list${id}`}>
                {title}
            </label>
        </div>
    )
}

export default Tarjeta1