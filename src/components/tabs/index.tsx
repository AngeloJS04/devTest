import React, { ReactNode } from 'react'

const Tabs = ({ tabs }: { tabs: { name: string, component: ReactNode }[] }) => {
    const [selected, setSelected] = React.useState(0);

    return (
        <React.Fragment>
            <div className=" tabs tabs-boxed">
                {
                    tabs.map((tab, index) => (
                        <>
                            <a key={index} onClick={() => setSelected(index)}
                                className={` tab  ${selected === index ? ' tab-active' : ''} `} >
                                {tab.name}
                            </a>
                        </>
                    ))
                }
            </div>
            <div className="mt-4 w-8/12">{tabs[selected].component}</div>
        </React.Fragment>
    )
}
export default Tabs