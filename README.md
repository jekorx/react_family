# react_family basic framework
### 一、技术栈 react redux react-redux redux-thunk react-router-dom asios
### 二、懒加载
```javascript
// 插件babel-plugin-syntax-dynamic-import -> syntax-dynamic-import
// .babelrc中plugins
"plugins": [
  "transform-object-rest-spread",
  "syntax-dynamic-import"
]

// 懒加载相关组件（分离打包）
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
```
### 三、react-router如果使用history模式，生产模式服务器应作出相应配置，可参考https://router.vuejs.org/en/essentials/history-mode.html
webpack
```javascript
devServer: {
  // 当使用HTML5 History API时，任意的404响应都可能需要被替代为index.html
  historyApiFallback: true,
}
```
Apache
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```
Native Node.js
```javascript
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```
