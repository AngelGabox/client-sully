import Swal from "sweetalert2"

export const swal = (data) =>
   Swal.fire({
      title: data? data : "Credenciales inválidas",
      text: "Por favor introduzca credenciales válidas",
      confirmButtonText: "Aceptar",
      width: "400px",
      timer: 10000,
      timerProgressBar: true,
   })
