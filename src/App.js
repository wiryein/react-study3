import './App.css';
function Header(props) {
  console.log('props', props);
  return  <header className="App-header">
      <h1><a href="/">{props.title}</a></h1>
      </header>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>    
}

function Nav(props){
  const lis = [
    <li><a href="/read/1">html</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li><a href={`/read/${t}`}>{t}</a></li>)
  }
  return <nav>
    <ol>
    {lis}
    </ol>
  </nav>
}

function App() {
  const topics = [
    {id : 1, title : 'html', body : 'html is...'},
    {id : 2, title : 'css', body : 'css is...'},
    {id : 3, title : 'js', body : 'js is...'},
  ]

  return (
    <div className="App">
      <Header title = "REACT"></Header>
      <Nav topics = {topics}></Nav>
      <Article title = "Welcome" body = "Hello,web"></Article>
    </div>
  );
}

export default App;
