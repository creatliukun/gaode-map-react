import { useEffect, useState } from 'react'
import './App.css';
import Header from './component/header';
import Tabs from './pages/tabs';
import { Toast, } from "antd-mobile"

function App() {
  const [aMap, setAMap] = useState(null)

  useEffect(() => {
    const myScript0 = document.createElement('div');
    // 设置标签的src属性
    myScript0.id = "container";
    console.log(myScript0, 'myScript0')
    // 明确设置为同步加载
    // myScript0.async = false;
    // 追加到body标签的最下面
    document.body.appendChild(myScript0);

    // 组件挂载时，创建script标签
    const myScript = document.createElement('script');
    // 设置标签的src属性
    myScript.src = "https://webapi.amap.com/maps?v=1.4.15&key=76fcbbe33fdb5a663fa7ffb619bebf55";
    // 明确设置为同步加载
    myScript.async = false;
    // 追加到body标签的最下面
    document.body.appendChild(myScript);

    // 组件挂载时，创建script标签
    const myScript1 = document.createElement('script');
    // 明确设置为同步加载
    myScript1.append(
      `window._AMapSecurityConfig = {
        securityJsCode: 'f63507288c87cb8156117a995d5e29bb',
      }`
    )
    // 同步
    myScript1.async = false;

    // 追加到body标签的最下面
    document.body.appendChild(myScript1);

    // 组件挂载时，创建script标签
    const myScript2 = document.createElement('script');
    const { AMap } = window
    setAMap(AMap)
    console.log(AMap, '===window.AMap===', aMap)
    if (Object.is(AMap, aMap)) {
      console.log(AMap)
      myScript2.append(
        `var map = new ${AMap}.Map('container', {
          zoom: ${11},//级别
          center: [${116.397428}, ${39.90923}],//中心点坐标
          viewMode: '3D'//使用3D视图
        });`
      )
    } else {

    }


    // 明确设置为同步加载
    myScript2.async = false;
    // 追加到body标签的最下面
    document.body.appendChild(myScript2);
    return () => {
      // 组件即将卸载时，移除标签
      document.body.removeChild(myScript2);
      document.body.removeChild(myScript1);
      document.body.removeChild(myScript);
      document.body.removeChild(myScript0);
    };
  }, []);

  useEffect(() => {
    const { AMap } = window;
    var map = new AMap.Map('container', {
      zoom: 11,//级别
      center: [116.397428, 39.90923],//中心点坐标
      viewMode: '3D',//使用3D视图
      resizeEnable: false
    });
  })

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })
  return (
    <div className="home">
      <div className="header">
        <Header
          title={"配件安装"}
          backArrow={true}
          onBack={back}
        />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
