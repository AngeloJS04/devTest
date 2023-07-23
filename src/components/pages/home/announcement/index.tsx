import { useGetAnnouncementQuery } from '@/redux/rtk/announcement'
import React from 'react'

const Announcement = () => {
    const { data: announcement } = useGetAnnouncementQuery()

    return (
        <div className='relative px-2 py-4 rounded-lg h-100 bg-black/10  shadow-lg'>
            <div className='grid grid-cols-1 justify-items-center'>
                {announcement?.map((item, idx: number) => (
                    <div className="collapse bg-black/40 m-3 ">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            {idx + 1} -  {item.title}
                        </div>
                        <div className="collapse-content">
                            <span className="text-gray-500">Date: </span>
                            <span className="text-white">{new Date(item.date).toLocaleString()}</span>
                            <p className="card-text">{item.content.replace(/(<([^>]+)>)/gi, "")}</p>
                            <a href={item.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mt-2">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Announcement