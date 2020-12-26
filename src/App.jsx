import React, { useState, useEffect } from "react";

import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {
 let citasInitial = JSON.parse(localStorage.getItem("citas")) || [];
 const [citas, setCitas] = useState(citasInitial);
 const addCita = (cita) => {
  setCitas([...citas, cita]);
 };

 const remove = (id) => {
  const filter = citas.filter((c) => c.id !== id);
  setCitas(filter);
 };

 useEffect(() => {
  localStorage.setItem("citas", JSON.stringify(citas));
 }, [citas]);

 return (
  <>
   <h1>Administrador de Pacientes</h1>
   <div className="container">
    <div className="row">
     <div className="one-half column">
      <Formulario add={addCita} />
     </div>
     <div className="one-half column">
      {citas.length === 0 ? (
       <h2>No hay citas</h2>
      ) : (
       <h2>Administra tus citas</h2>
      )}

      {citas.map((cita) => (
       <Cita key={cita.id} cita={cita} remove={remove} />
      ))}
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
