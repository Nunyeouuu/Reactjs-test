import React, { useEffect, useState } from "react";

function Calculator() {
  const [angka, setAngka] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [operation, setOperation] = useState();
  const operasi = angka + angka2;
  const Hasil = angka + angka2;
  const [jenis, setJenis] = useState("");

  useEffect(() => {
    if (angka < 0) {
      setAngka(0);
    }
    if (angka2 < 0) {
      setAngka2(0);
    }
    if (operasi % 2 == 0) {
      setJenis("Genap");
    } else {
      setJenis("Ganjil");
    }
  }, [angka, angka2, jenis]);
  return (
    <>
      <div className="Hasil">
        <h2>
          {angka} + {angka2} = {operasi}
        </h2>
      </div>

      <div className="">
        <p>jenis Bilangan Hasil: {jenis} </p>
      </div>
      <div className="container-btnAngka">
        <button onClick={() => setAngka(angka + 1)}>
          Tambah Angka Pertama{" "}
        </button>
        <button onClick={() => setAngka(angka - 1)}>
          Kurangi Angka Pertama{" "}
        </button>
      </div>
      <div className="container-btnAngka2">
        <button onClick={() => setAngka2(angka2 + 1)}>
          Tambah Angka Kedua
        </button>
        <button onClick={() => setAngka2(angka2 - 1)}>
          Kurangi Angka Kedua
        </button>
      </div>
    </>
  );
}

export default Calculator;
