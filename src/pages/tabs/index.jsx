import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import Search from '../../component/search'
import './index.less'

export default function Index() {
    const [currentState, setCurrentState] = useState("willInstalled")
    const tabArr = [
        { title: '待安装', key: 'willInstalled' },
        { title: '未完成', key: 'incomplete' },
        { title: '待签字', key: 'willSigned' },
        { title: '已完成', key: 'Completed' },
    ]
    const onChangeTabs = (res) => {
        console.log(res, 'res')
        setCurrentState(res)
    }
   
    return (
        <div className="XA-tabs">
            <Tabs
                onChange={onChangeTabs}
            >
                {
                    tabArr.map((item, index) => {
                        console.log(tabArr[index], 'item[index]')
                        return (
                            <Tabs.Tab className={item.key === currentState ? "XA-tab-active" : ""} title={item.title} key={item.key}>
                                <div className="XA-search">
                                    <Search />
                                </div>
                                {item.title}
                            </Tabs.Tab>
                        )
                    })
                }
            </Tabs>
        </div>

    )
}
