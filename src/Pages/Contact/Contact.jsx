import { useFormik } from "formik";
import { regEmail, regMessage, regName, regPhone } from "../../Utils/regExp";
import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .matches(regName, "El nombre no es válido")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .matches(regEmail, "El email no es válido")
    .required("El email es obligatorio"),
  telefono: Yup.string()
    .matches(regPhone, "El teléfono no es válido")
    .required("El teléfono es obligatorio"),
  mensaje: Yup.string()
    .matches(regMessage, "El mensaje no es válido")
    .required("El mensaje es obligatorio"),
});

export default function Contact() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Valores enviados", values);
    },
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-0 bg-gradient-to-t from-[#98ff98] to-[#40e0d0] py-10 items-center md:px-4">
      <div className="w-5/12 my-auto">
        <img
          src="https://res.cloudinary.com/diotu9grj/image/upload/v1704406019/TS4-hero_xsx5bv.jpg"
          alt=""
          className="shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center mx-auto w-80 gap-6">
        <h2 className="text-3xl font-extrabold text-pink-800 text-center">
          ¿Querés conocer más de nuestro catálogo y enterarte de nuestras
          ofertas?
          <span className="text-ros-primary"> Comunicate con nosotros.</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-2"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            iserror={touched.nombre && errors.nombre}
            {...getFieldProps("nombre")}
            className="bg-gray-800 input input-bordered input-secondary w-full max-w-xs"
          />
          {touched.nombre && errors.nombre ? (
            <div className="text-red-500 text-sm">{errors.nombre}</div>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...getFieldProps("email")}
            iserror={touched.email && errors.email}
            className="input input-bordered input-secondary w-full max-w-xs bg-gray-800"
          />
          {touched.email && errors.email ? (
            <div className="text-red-500 text-sm">{errors.email}</div>
          ) : null}
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            {...getFieldProps("telefono")}
            iserror={touched.telefono && errors.telefono}
            className="input input-bordered input-secondary w-full max-w-xs bg-gray-800"
          />
          {touched.telefono && errors.telefono ? (
            <div className="text-red-500 text-sm">{errors.telefono}</div>
          ) : null}
          <input
            type="text"
            name="mensaje"
            placeholder="Mensaje"
            iserror={touched.mensaje && errors.mensaje}
            {...getFieldProps("mensaje")}
            className="h-20 input input-bordered input-secondary w-full max-w-xs bg-gray-800"
          />
          {touched.mensaje && errors.mensaje ? (
            <div className="text-red-500 text-sm">{errors.mensaje}</div>
          ) : null}
          <button type="submit" className="btn btn-secondary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
