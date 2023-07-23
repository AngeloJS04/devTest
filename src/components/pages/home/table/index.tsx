import React from 'react'

interface TableDataProps {
    data: any,
    columns: { title: string }[]
}

const HomeTable = ({ data, columns }: TableDataProps) => {
    return (
        <div className={`relative px-2 py-4 rounded-lg h-100 bg-black/10  shadow-lg`}>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column: { title: string }, idx: number) => (
                                <th className='capitalize text-base' key={idx}>{column.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, idx: number) => (
                            <tr key={idx} className='border-b'>
                                {Object.keys(item).map((key) => (
                                    <td key={key} >{item[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeTable