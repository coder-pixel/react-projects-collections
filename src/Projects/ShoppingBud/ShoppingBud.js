import React, { useEffect, useState } from 'react'
import "./ShoppingBud.css"
import SingleItem from './SingleItem'

const ShoppingBud = () => {
    const [newItem, setNewItem] = useState("")
    const [itemsList, setItemsList] = useState(["sauvik"])

    const [edit, setEdit] = useState(false)
    const [editingIndex, setEditingIndex] = useState()

    const [errorMessage, setErrorMessage] = useState({
        error: false,
        message: ""
    })

    let itemsDiv = document.getElementsByClassName("singleItem")

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(item)
        if (!newItem) {
            setErrorMessage({
                error: true,
                message: "Please Enter Something!"
            })
        } else if (newItem && edit) {
            // console.log("editing...")
            // console.log(editingIndex)
            let oldItem = ""
            const editedItemsList = itemsList.map((item, index) => {
                if (index == editingIndex) {
                    console.log(item)
                    console.log(newItem)
                    oldItem = item
                    item = newItem
                    return item
                }
                return item
            })
            console.log(editedItemsList)
            setItemsList(editedItemsList)

            setErrorMessage({
                error: false,
                // message: "Updated Successfully!"
                message: `'${oldItem}' -> '${newItem}'`
            })

            setNewItem("")
            console.log(newItem)

            setEdit(false)
            itemsDiv[editingIndex].classList.remove("highlighted_singleItem")
        } else {
            setItemsList([...itemsList, newItem])
            setNewItem("")
            setErrorMessage({
                error: false,
                message: `'${newItem}' Added Successfully!`
            })
        }
    }

    useEffect(() => {
        console.log("editing...")
        console.log(editingIndex)

        if (edit) {
            
            // console.log(v[0])
            itemsDiv[editingIndex].classList.add("highlighted_singleItem")
            document.getElementById("inputEle").focus()
            setNewItem(itemsList[editingIndex])
        }
    }, [edit])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrorMessage({
                error: false,
                message: ""
            })
        }, 2000)
        return () => clearTimeout(timeout)
    }, [errorMessage])

    const deleteItem = (item_index) => {
        console.log(item_index);

        const newItemsList = itemsList.filter((item, index) => index !== item_index)

        setItemsList(newItemsList);
        setErrorMessage({
            error: true,
            message: "Item Deleted Successfully!"
        })
        setNewItem("")
    }

    return (
        <div className="shoppingBud">
            <span
                className={`shoppingBud_msg ${errorMessage.message ? (errorMessage.error ? "error show" : "show") : null}`}
            >
                {errorMessage.message}
            </span>
            <h3>Grocery Bud</h3>

            <form onSubmit={handleSubmit}>
                <input
                    id='inputEle'
                    type="text"
                    placeholder='Enter Something'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type='submit'>{edit ? "Done" : "Add"}</button>
            </form>

            <div className="shoppingList">
                {itemsList.length > 0 ?
                    (
                        <>
                            {itemsList.map((item, index) => <SingleItem key={index} index={index} singleItem={item} edit={edit} deleteItem={deleteItem} setEdit={setEdit} setEditingIndex={setEditingIndex} />)}
                            <div className="clearListDiv">Clear Items</div>
                        </>
                    )
                    :
                    (
                        <h2 className='emptyItemsList'>Nothing to show!!</h2>
                    )
                }
            </div>
        </div>
    )
}

export default ShoppingBud