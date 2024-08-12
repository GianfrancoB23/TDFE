import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { eliminarEvento } from "../../../features/eventosSlice";
const EliminarEvento = (idEvento) => {
  const urlAPI = "https://babytracker.develotion.com/";
  const dispatch = useDispatch();
  idEvento = idEvento.idEvento;  

  const eliminar = () => {



    if (confirm("¿Confirma que desea eliminar este evento del registro?")) {
      console.log(
        `Eliminando evento ID ${idEvento} para usuario de ID ${localStorage.getItem(
          "id"
        )} con apiKEY ${localStorage.getItem("apiKey")}`
      );
      fetch(`${urlAPI}eventos.php?idEvento=${idEvento}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          apikey: localStorage.getItem("apiKey"),
          iduser: localStorage.getItem("id"),
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data);

          if (data.codigo == "200") {
            toast.success("Se ha eliminado el evento.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            console.log(data.codigo, data.mensaje);
            toast.warn(`ERROR: ${data.mensaje}.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } else {
      toast.warn("Se ha cancelado la operación.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <input
      type="button"
      className="btn btn-danger"
      onClick={eliminar}
      value="Eliminar evento "
    />
  );
};

export default EliminarEvento;
