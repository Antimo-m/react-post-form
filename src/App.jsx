import { useState } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialForm = {
  userName: "",
  titolo: "",
  testoBody: "",
  isPublic: false
}
//oggetto che contiene gli stati dei miei input
console.log(initialForm)

function App() {

  const [form, setForm] = useState(initialForm)
  const [submit, setSumbit] = useState({})

  function UpdateForm(event) {
    const key = event.target.name
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    setForm({
      ...form,
      [key]: value
    })
  }


  function Handlesubmit(e) {
    e.preventDefault();
    setSumbit(form)

    setForm(initialForm) //qui gestiamo la pulizia degli input una volta inviato il post
  }


  return (
    <>
      <div className="container  text-center py-5">
        <form onSubmit={Handlesubmit} className="row g-3 ">
          <div className="d-flex justify-content-center">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={UpdateForm}
              className="form-control w-25 border border-5 "
            />
          </div>


          <div className="d-flex justify-content-center">
            <label htmlFor="titolo"></label>
            <input
              id="titolo"
              type="text"
              name="titolo"
              value={form.titolo}
              onChange={UpdateForm}
              className="form-control w-25 border border-5"
            />
          </div>

          <div className="d-flex justify-content-center">
            <label htmlFor="testo"></label>
            <input
              id="testo"
              type="text"
              name="testoBody"
              value={form.testoBody}
              onChange={UpdateForm}
              className="form-control w-25 border border-5"
            />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              className="form-check-input"
              checked={form.isPublic}
              onChange={UpdateForm}
            />
            <label htmlFor="isPublic"><strong>Clicca qui per rendere il tuo post pubblico!</strong></label>

          </div>

          <div>
            <button type="submit" className="btn btn-primary w-25 mb-4 ">Invia post</button>
          </div>
        </form>

        {Object.keys(submit).length === 0 ? (
          <p>Nessun post</p>
        ) : (<div className="card">
          <h3 className="py-1">Il post da te creato</h3>
          <p><strong>Autore: </strong>{submit.userName}</p>
          <p><strong>titolo post: </strong>{submit.titolo}</p>
          <p><strong>Testo: </strong>{submit.testoBody}</p>
          <p><strong>Il tuo post è: </strong>{submit.isPublic === true ? "Pubblico" : "Privato"}</p>
        </div>)}


      </div>
    </>
  )
}

export default App
