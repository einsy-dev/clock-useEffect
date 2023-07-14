import { useState } from "react"
import Clock from './components/Clock';
import { ClockStyle } from './styles/clock_style';

export default function App() {
  const [state, setState] = useState([])

  function OnClick(e) {
    e.preventDefault()
    const data = {
      name: e.target[0].value,
      time_zone: e.target[1].value != 0 ? e.target[1].value : 0
    }
    setState((prev) => [...prev, data])
  }

  function filterState(id) {
    setState(state.filter(el => state.indexOf(el) !== id))
  }

  return (
    <div className="main">
      <form onSubmit={OnClick}>
        <label htmlFor="name">Название</label>
        <input id="name" />
        <label htmlFor="time_zone">Временная зона</label>
        <input id="time_zone" />
        <button>Добавить</button>
      </form>
      <div className="box">
        {state?.map((el, id) => <ClockStyle key={id}><Clock key={id} data={el} onFilter={() => filterState(id)} /></ClockStyle>)}
      </div>
    </div>
  )
}
