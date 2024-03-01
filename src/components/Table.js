import React from 'react'

export default function Table({description, quantity, price, amount, list, total}) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            <table width="100%" className="mt-10">
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
                                    <td>{amount}</td>

                                </tr>
                </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className="mt-5 flex items-end justify-end text-gray-800 text-4xl font-bold">Total: {USDollar.format(total)} USD</h2>
            </div>
        </>
    )
}
