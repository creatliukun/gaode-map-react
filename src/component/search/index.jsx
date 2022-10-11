import React, { useState } from 'react'
import { SearchBar,Space,Button } from 'antd-mobile'
import { SearchOutline, SetOutline } from 'antd-mobile-icons'

export default function Search() {
    const [icon, setIcon] = useState(null)
    return (
        <Space block direction='vertical'>
        <SearchBar  
        placeholder='请输入项目名称、设备编号' 
        icon={<SearchOutline />} 
        // icon={icon} 
        style={{
            '--padding-left': '30px',
          }}
        />
        {/* <input className="adm-input-element" placeholder="请输入项目名称、设备编号" type="search" aria-label="搜索框" value="" enterkeyhint="search"></input> */}
      </Space>
    )
}
