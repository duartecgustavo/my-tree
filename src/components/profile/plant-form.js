import { useState } from "react";
import { Colors } from "../../styles/design.tokens";

export const PlantForm = ({ onSubmit }) => {
  const [especie, setEspecie] = useState("");
  const [local, setLocal] = useState("");
  const [foto, setFoto] = useState("");

  const [errors, setErrors] = useState({
    especie: "",
    local: "",
    foto: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      especie: "",
      local: "",
      foto: "",
    };

    if (!especie) {
      newErrors.especie = "O campo especie é obrigatório";
    }
    
    if (!local) {
      newErrors.local = "O campo local é obrigatório";
    }
    
    if (!foto) {
      newErrors.foto = "O campo titulo é obrigatório";
    }

    const errorMessages = Object.values(newErrors).filter((error) => error).join("\n");
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      alert(errorMessages);
    } else {
      onSubmit({ especie, local, foto });
      setEspecie("");
      setLocal("");
      setFoto("");
      setErrors({ especie: "", local: "", foto: "" });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column col-10 col-sm-8"
        style={{ display: "flex", gap: "20px" }}
      >
        <div>
          <label
            className="form-label pb-1"
            style={{ color: "black", fontSize: "18px" }}
          >
            Especie da arvore
          </label>
          <input
            type="especie"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Digite a especie da arvore.."
            value={especie}
            onChange={(e) => {
              setEspecie(e.target.value);
              setErrors({ ...errors, especie: "" });
            }}
          />
        </div>
        <div>
          <label
            className="form-label pb-1"
            style={{ color: "black", fontSize: "18px" }}
          >
            Local da arvore
          </label>
          <input
            type="local"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Digite o local da arvore.."
            value={local}
            onChange={(e) => {
              setLocal(e.target.value);
              setErrors({ ...errors, local: "" });
            }}
          />
        </div>
        <div>
          <label
            className="form-label pb-1"
            style={{ color: "black", fontSize: "18px" }}
          >
            Foto da arvore
          </label>
          <input
            type="foto"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Envie a foto da arvore.."
            value={foto}
            onChange={(e) => {
              setFoto(e.target.value);
              setErrors({ ...errors, foto: "" });
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            color: "black",
            fontWeight: "bold",
            borderRadius: "4px",
            padding: "8px 24px 8px 24px",
            width: "100%",
            backgroundColor: Colors.BLUE_MAIN,
            border: "none",
            padding: "20px"
          }}
        >
          ENVIAR ARVORE
        </button>
      </form >
    </>
  )
} 