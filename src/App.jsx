import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Msg
        name="Asok"
        pic="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
      />
      <Msg
        name="Bala"
        pic="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
      />
      <Msg
        name="Hari"
        pic="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
    </div>
  );
}

function Msg({pic, name}) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1>Hello, <span className="user-name">{name}</span>😎🤩👌 </h1>
    </div>
  );
}
