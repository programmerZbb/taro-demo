import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

class Child extends Component {
    componentWillMount() {
        
    }
    componentWillReceiveProps(nextPops) {
        console.log("更新了 props")
    }
    shouldComponentUpdate(nextPops, nextstate) {
        console.log("是否应该更新组件执行")
        return true
    }
    cl() {
        this.props.Test()
    }
    render() {
        console.log("执行了render函数---"+this.props.name)
        let name: string = this.props.name
        let {obj} = this.props
        return (<View onClick={this.cl.bind(this)}>我是子组件{name}{obj.key[0].name}</View>)
    }
}

Child.defaultProps={
    obj: {key:[{name: "aaa"}]}
}
export default Child