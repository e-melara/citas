import React, { useState } from "react";
import PropTypes from "prop-types";

const initialForm = {
 mascota: "",
 propietario: "",
 fecha: "",
 hora: "",
 sintomas: "",
};

const Formulario = ({ add }) => {
 const [cita, setCita] = useState(initialForm);
 const [error, setError] = useState(false);

 const handlerChange = (e) => {
  setCita({ ...cita, [e.target.name]: e.target.value });
 };

 const { mascota, propietario, fecha, hora, sintomas } = cita;

 const onSubmit = (e) => {
  e.preventDefault();
  if (
   mascota.trim() === "" &&
   propietario.trim() === "" &&
   fecha.trim() === "" &&
   hora.trim() === "" &&
   sintomas.trim() === ""
  ) {
   setError(true);
   return;
  }

  setError(false);
  cita.id = Math.floor(Math.random() * 10000000000);
  add(cita);

  setCita(initialForm);
 };

 return (
  <>
   <h2>Crear cita</h2>
   {error && <p className="alerta-error">Todos los campos son obligatorios</p>}
   <form onSubmit={onSubmit}>
    <label htmlFor="mascota">Nombre Mascota</label>
    <input
     type="text"
     name="mascota"
     className="u-full-width"
     placeholder="Nombre Mascota"
     onChange={handlerChange}
     value={mascota}
    />
    <label htmlFor="propietario">Nombre del Dueño</label>
    <input
     type="text"
     name="propietario"
     className="u-full-width"
     onChange={handlerChange}
     value={propietario}
     placeholder="Nombre del Dueño de la mascota"
    />

    <label htmlFor="fecha">Fecha</label>
    <input
     type="date"
     name="fecha"
     value={fecha}
     className="u-full-width"
     onChange={handlerChange}
    />

    <label htmlFor="hora">Hora</label>
    <input
     type="time"
     name="hora"
     value={hora}
     className="u-full-width"
     onChange={handlerChange}
    />

    <label htmlFor="sintomas">Nombre del Dueño</label>
    <textarea
     name="sintomas"
     value={sintomas}
     className="u-full-width"
     onChange={handlerChange}
    ></textarea>

    <button type="submit" className="u-full-width button-primary">
     Agregar citaz
    </button>
   </form>
  </>
 );
};

Formulario.propTypes = {
 crearCita: PropTypes.func.isRequired,
};

export default Formulario;
