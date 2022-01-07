export default function App() {
  return (
    <>
      < MyComponent />
    </>
  )
}

function MyComponent() {
  return (
    <div >
      <h1 className="bg-danger" text-light p-3">My Chat</h1>
      <div>
        <input className="form control form-control-lg mb-1"
          type="text"
          name=""
          value="type here" />
      </div>
      <div>
        <input className="form control form-control-lg mb-1"
          type="text"
          name=""
          value="type here" />
      </div>
    </div>
  )
}