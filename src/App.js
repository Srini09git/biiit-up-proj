import './App.css';
import TextEditor from './comments/TextEditor';
import StaticCont from './contentz/StaticCont';

function App() {
  return (
    <div>
      <h1>Comment (3)</h1>
      <h3>Add Comment</h3>
      <div className='title-cls'>
        <TextEditor />
      </div>
      <StaticCont />
    </div>
  );
}

export default App;
