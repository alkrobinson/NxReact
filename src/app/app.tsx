import './app.scss';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <div className="box">
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
        <div className="inner-box" onClick={addX}></div>
      </div>
    </>
  );
}

function addX(event: any) {
  const x = document.createElement('div');
  x.style.display = 'flex';
  x.style.justifyContent = 'center';
  x.style.alignItems = 'center';
  x.style.height = '100%';
  x.textContent = 'X';
  event.target.appendChild(x);
}
