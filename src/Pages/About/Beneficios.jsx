export default function Beneficios() {
  return (
    <div className="flex flex-col gap-16 items-center py-16  bg-gradient-to-b from-khaki  to-am-terciary">
      <h3
        className=" text-3xl font-bold text-black
    "
      >
        Beneficios
      </h3>
      <div className="flex justify-center items-center gap-24 flex-wrap mx-2">
        <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
          <div className=" h-14">
            <img
              src="https://res.cloudinary.com/diotu9grj/image/upload/v1716509164/quality_dfsndb.svg"
              alt="Calidad"
              className="h-14"
            />
          </div>
          <p className="text-black text-xl font-mono">Calidad</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
        </div>
        <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
          <div className=" h-14">
            <img
              src="https://res.cloudinary.com/diotu9grj/image/upload/v1716509164/assurance_ze5ucr.svg"
              alt="Calidad"
              className="h-14"
            />
          </div>
          <p className="text-black text-xl font-mono">Garantia</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
        </div>
        <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
          <div className=" h-14">
            <img
              src="https://res.cloudinary.com/diotu9grj/image/upload/v1716509164/safe_d3vnlg.svg"
              alt="Calidad"
              className="h-14"
            />
          </div>
          <p className="text-black text-xl font-mono">Seguridad </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
        </div>
        <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
          <div className=" h-14">
            <img
              src="https://res.cloudinary.com/diotu9grj/image/upload/v1716509164/excellence_fnxtmj.svg"
              alt="Calidad"
              className="h-14"
            />
          </div>
          <p className="text-black text-xl font-mono">Excelencia</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
        </div>
      </div>
    </div>
  );
}
