import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
// ^^ generates unique id for new items
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";



export default function TableForm({
    description, 
    setDescription,
    quantity, 
    setQuantity,
    price, 
    setPrice,
    amount, 
    setAmount,
    list,
    setList,
    total,
    setTotal
    }) {
    
    const [isEditing, setIsEditing] = useState(false);

        //submit form function
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItems = {
            id: uuidv4(),
            description: description,
            quantity: quantity,
            price: price,
            amount: amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)
    }

    //convert to USD
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // calculate amount function
    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price);
        }   
        calculateAmount(amount)
    }, [amount,price,quantity,setAmount])

    //calculate total amount of items in table
    useEffect(() => {
        let rows = document.querySelectorAll(".amount");
        let sum = 0;
        for (let i = 0; i < rows.length; i++ ){
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0: parseInt(rows[i].innerHTML);
                setTotal(sum);
            }
        }
    })

    //edit function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id ===id);
        setList(list.filter((row) => row.id !== id));
        setIsEditing(true);
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }

    //delete function
    const deleteRow = (id) => setList(list.filter((row) => row.id !== id));


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="flex flex-col md:mt-16">
                    <label htmlFor="description">Item Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder="Item description" 
                        value={description} 
                        onChange={(e)=> setDescription(e.target.value)} 
                    />
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Quantity</label>
                        <input 
                            type="text" 
                            name="quantity" 
                            id="quantity" 
                            placeholder="quantity" 
                            value={quantity} 
                            onChange={(e)=> setQuantity(e.target.value)} 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Item Price</label>
                        <input 
                            type="text" 
                            name="price" 
                            id="price" 
                            placeholder="Item price" 
                            value={price} 
                            onChange={(e)=> setPrice(e.target.value)} 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="amount">Amount</label>
                        {/* <input 
                            type="text" 
                            name="amount" 
                            id="amount" 
                            placeholder="Item amount" 
                            value={amount} 
                            onChange={(e)=> setAmount(e.target.value)} 
                        /> */}
                        <p>{amount}</p>
                    </div>
                </div>
                <button className="mb-5 bg-blue-500 font-bold py-2 px-8 text-white rounded shadow 
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
                duration-300" type="submit">
                    {isEditing ? "Save Edits" : "Add Table Item"}
                </button>
            </form>
            {/* Table items */}
 
                <table width="100%" className="mt-10 mb-10">
                    <thead>
                        <tr className="bg-gray-100 p-1">
                            <td className="font-bold">Description</td>
                            <td className="font-bold">Quantity</td>
                            <td className="font-bold">Price</td>
                            <td className="font-bold">Amount</td>
                        </tr>
                    </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id} >
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td className="amount">{amount}</td>
                                <td>
                                    <button onClick={()=>deleteRow(id)}>
                                        <BsTrash 
                                            className="text-red-500 font-bold text-xl"
                                        />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={()=>editRow(id)}>
                                        <CiEdit 
                                            className="text-green-500 font-bold text-xl"
                                        />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
                </table>
                <div>
                    <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">Total: {USDollar.format(total)} USD</h2>
                </div>
        </>
    )
}
