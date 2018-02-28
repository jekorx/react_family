# react_family basic framework

react redux react-redux redux-thunk react-router-dom asios

// react-router如果使用history模式，生产模式服务器应作出相应配置，可参照

https://router.vuejs.org/en/essentials/history-mode.html

（没错是vue-router文档，服务器配置都一样）

dynamic import

babel-plugin-syntax-dynamic-import .babelrc文件的plungins中加上"syntax-dynamic-import"

const About = (props) => (

  <Bundle load={() => import('@views/about/about')}>

    {(About) => <About {...props} />}

  </Bundle>

)

class Bundle extends Component {

  constructor(props) {

    super(props)

    this.state = {

      mod: null

    }

  }

  componentWillMount() {

    this.load(this.props)

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.load !== this.props.load) {

      this.load(nextProps)

    }

  }

  load(props) {

    this.setState({

      mod: null

    })

    //注意这里，使用Promise对象; mod.default导出默认

    props.load().then(mod => {

      this.setState({

        mod: mod.default ? mod.default : mod

      })

    })

  }

  render() {

    return this.state.mod ? this.props.children(this.state.mod) : null

  }

}
