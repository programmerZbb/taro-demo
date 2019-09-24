import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

class Test extends Component {
    config: Config = {
        navigationBarTitleText: '首页'
      }
    render () {
        return (<View>我是test组件</View>)
    }
}

export default Test