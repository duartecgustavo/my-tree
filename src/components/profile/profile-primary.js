import styled from "styled-components";
import { Colors } from "../../styles/design.tokens";
import Planet_Florest from "../../assets/planetFlorest.png";
import Avatar from "../../assets/avatar.svg";
import Tree from "../../assets/tree.svg";
import Medal from "../../assets/medal.svg";
import MedalBronze from "../../assets/medal_bronze.svg";
import MedalPrata from "../../assets/medal_prata.svg";
import MedalOuro from "../../assets/medal_ouro.svg";
import Progress from "../../assets/progress.svg";
import { PlantForm } from "./plant-form";
import { useState } from "react";
import { getTreeCount, postTree } from "../../services/postTree";
import { useEffect } from "react";

const ContentStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 50vh;
  padding: 50px 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  .div-infos {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .div-image {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
  }
  .div-tabs {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div-content-progress {
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const ButtonStyle = styled.button`
  background-color: white;
  height: 33%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  :hover {
    background-color: ${Colors.BLUE_MAIN};
  }
`;

const BackgroundNavbar = styled.div`
  height: 100px;

  background-color: ${Colors.BLUE_MAIN};
`;

export default function ContentProfile() {
  const [content, setContent] = useState(null);
  const [formPlant, setFormPlant] = useState(null);
  const [treeCount, setTreeCount] = useState(null);
  const [medal1, setMedal1] = useState();
  const [medal2, setMedal2] = useState();
  const contentTabs = {
    arvores: {
      title: "Plante sua primeira Árvore",
      content:
        "Bem-vindo ao seu perfil de usuário! Aqui você verá posts escritos por nossas equipes de Conteúdo e Florestal, Se você está curioso, plante sua primeira árvore! Você fará parte da nossa comunidade e terá acesso a conteúdos exclusivos.",
      button: (
        <>
          <button
            onClick={() => setFormPlant(!formPlant)}
            style={{
              backgroundColor: Colors.BLUE_MAIN,
              color: "white",
              fontSize: "18px",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
            }}
          >
            Plante uma Árvore
          </button>
        </>
      ),
    },
    medalhas: {
      medal_bronze: <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}><p style={{ fontWeight: "bold", fontSize: "18px" }}>Bronze</p><img src={MedalBronze} alt="teste" style={{ width: "100px", cursor: "cell" }} /><p style={{ fontSize: "18px" }}>10 arvores</p></div>,
      medal_prata: <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}><p style={{ fontWeight: "bold", fontSize: "18px" }}>Prata</p><img src={MedalPrata} alt="teste" style={{ width: "100px", cursor: "cell" }} /><p style={{ fontSize: "18px" }}>20 arvores</p></div>,
      medal_ouro: <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}><p style={{ fontWeight: "bold", fontSize: "18px" }}>Ouro</p><img src={MedalOuro} alt="teste" style={{ width: "100px", cursor: "cell" }} /><p style={{ fontSize: "18px" }}>30 arvores</p></div>,
    },
    progresso: "PROGRESSO",
  };

  async function fetchData() {
    try {
      const data = await getTreeCount();
      setTreeCount(data.treeCount);

      if (treeCount >= 0 && treeCount <= 5) {
        setMedal1(null);
        setMedal2(MedalBronze);
      } else if (treeCount > 5 && treeCount <= 15) {
        setMedal1(MedalBronze);
        setMedal2(MedalPrata);
      } else {
        setMedal1(MedalPrata);
        setMedal2(MedalOuro);
      }

      console.log("treeCount", treeCount);
    } catch (error) {
      console.error("Erro ao buscar depoimento:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    const body = {
      especie: e.especie,
      localPlantio: e.local,
      foto: e.foto,
      usuario: {
        id: 3
      },
      dataPlantio: new Date()
    };

    console.log("body", body);
    try {
      await postTree(body);
      fetchData();
      e.especie = "";
      e.local = "";
      e.foto = "";
    } catch (error) {
    }
  };

  return (
    <>
      <BackgroundNavbar />
      <ContentStyle className="container">
        <div className="div-infos">
          <div
            style={{
              padding: "20px",
              height: "80%",
              display: "flex",
              alignItems: "center",
              gap: 50,
            }}
          >
            <div
              style={{
                backgroundColor: Colors.BLUE_MAIN,
                padding: "10px",
                height: "fit-content",
                borderRadius: "50%",
                width: "fit-content",
              }}
            >
              <img src={Avatar} alt="teste" style={{ width: "150px" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "30px",
              }}
            >
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                Sr Cabeçca de Batata
              </p>
              <div style={{ display: "flex", gap: "40px" }}>
                <p style={{ fontSize: "18px", fontWeight: "400" }}>
                  Arvores plantadas: <b>{treeCount}</b>
                </p>
                <p style={{ fontSize: "18px", fontWeight: "400" }}>CO2 retirado em 50anos: <b>{treeCount * 1.1 * 50}toneladas</b></p>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: `1px solid ${Colors.BLUE_LIGHT2}`,
              width: "80%",
            }}
          ></div>
          <div
            style={{
              height: "20%",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "18px", fontWeight: "400" }}>0 seguidores</p>
            <p style={{ fontSize: "18px", fontWeight: "400" }}>0 seguindo</p>
          </div>
        </div>
        <div className="div-image">
          <img
            src={Planet_Florest}
            alt="teste"
            style={{
              height: "100%",
              borderRadius: "80px 0px 0px 80px",
              boxShadow: "rgba(0, 174, 239, 0.60) 0px 0px 0px 8px",
            }}
            className="img-fluid"
          />
        </div>
      </ContentStyle>
      <ContentStyle className="container">
        <div className="div-tabs">
          <div
            style={{
              width: "80%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ButtonStyle
              onClick={() => setContent(1)}
              style={{
                border: "1px solid black",
                borderRadius: "10px 10px 0px 0px",
              }}
            >
              <img src={Tree} alt="teste" style={{ width: "30px" }} />
              ARVORES
            </ButtonStyle>
            <ButtonStyle
              onClick={() => setContent(2)}
              style={{
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <img src={Medal} alt="teste" style={{ width: "30px" }} />
              MEDALHAS
            </ButtonStyle>
            <ButtonStyle
              onClick={() => setContent(3)}
              style={{
                border: "1px solid black",
                borderRadius: "0px 0px 10px 10px",
              }}
            >
              <img src={Progress} alt="teste" style={{ width: "30px" }} />
              PROGRESSO
            </ButtonStyle>
          </div>
        </div>
        <div className="div-content-progress">
          <div
            style={{
              width: "80%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {content === 1 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: 22 }}>{contentTabs.arvores.title}</p>
                    <p style={{ fontSize: 16, textAlign: "center" }}>
                      {contentTabs.arvores.content}
                    </p>
                    {contentTabs.arvores.button}
                  </div>
                ) : content === 2 ? (
                  <div style={{ display: "flex", gap: "80px" }}>
                    {contentTabs.medalhas.medal_bronze}
                    {contentTabs.medalhas.medal_prata}
                    {contentTabs.medalhas.medal_ouro}
                  </div>
                ) : (
                  <>
                    <p style={{ fontWeight: "600", fontSize: "16px" }}>Faltam X arvores para alcançar o nivel Ouro</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "30px", width: "90%" }}>
                      {
                        medal1 &&
                        <img src={medal1} alt="teste" style={{ width: "40px", cursor: "cell" }} />
                      }
                      <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <progress style={{ width: "100%", height: "40px" }} value={treeCount} max={10} />
                      </div>
                      <img src={medal2} alt="teste" style={{ width: "40px", cursor: "cell" }} />
                    </div>
                  </>
                )}
              </div>
            }
          </div>
        </div>
      </ContentStyle>
      {formPlant &&
        <ContentStyle className="container">
          <div className="div-form">
            <PlantForm onSubmit={handleSubmit} />
          </div>
        </ContentStyle>
      }
    </>
  );
}
