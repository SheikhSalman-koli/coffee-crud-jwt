import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Allcoffee = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data?.data || [])
    // console.log(data.data);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                         {/* const {details, email, likedBy, name, photo,price,taste,quantity,supplier} = coffee */}
                        <tr>
                            <th>
                               No.
                            </th>
                            <th>Coffee Name</th>
                            <th>Price</th>
                            <th>Taste</th>
                            <th>Supplier</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        coffees.map((coffee, index)=> <tr key={coffee._id} index={index} coffee={coffee}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={coffee.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div> */}
                                </div>
                            </td>
                            <td>{coffee.supplier}</td>
                            <td>{coffee.price}</td>
                            <td>{coffee.taste}</td>
                            <td>{coffee.likedBy}</td>
                            {/* <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th> */}
                        </tr>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Allcoffee;