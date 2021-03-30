import { useState } from 'react'

const AddItemCart = (value) => {
    const [item, addItem] = useState(value)

    return [item, addItem]
}

export default AddItemCart

