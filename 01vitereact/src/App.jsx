import Chai from "./Chai"

function App() {
  const username = "chai aur code"
    /* evaluation expression {} */
    /* yaha par js nhi hai yaha par js ka final outcome jo evaluate ho gya hai vo likhte hai  */
  return (
    <>
    <Chai/>
    <h1>Chai aur react {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App

// jsx me ek hi element return kar sakte hai to ya to div me return ya fir fragement me kar do khlai <> </>