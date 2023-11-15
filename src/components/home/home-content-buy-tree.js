import styled from "styled-components";
import Alert from "../../assets/alert.svg";
import AroeiraSalsa from "../../assets/aroeira_salsa.png";
import Canafístula from "../../assets/canafistula.png";
import Cerejeira from "../../assets/cerejeira.png";
import Ipe from "../../assets/ipe.png";
import Jacaranda from "../../assets/jacaranda.png";
import ManacaDaSerra from "../../assets/manaca_da_serra.png";
import PauFerro from "../../assets/pau_ferro.png";
import Pitangueira from "../../assets/pitangueira.png";
import { Colors } from "../../styles/design.tokens";

const ContentBuyTreeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  text-align: center;
  padding: 60px 0px;
  background-color: #77e16e;

  width: 100%;

  h3 {
    margin: 50px 0px;
  }
`;

const shopTrees = [
  {
    name: "Ipê",
    description:
      "O ipê-amarelo, também conhecido em todo Brasil pode atingir 30 metros de altura e 60 centímetros de diâmetro, e é caducifólia.[1][4] A floração amarela inicia no final de agosto, a espécie é hermafrodita, a frutificação ocorre entre setembro e fevereiro, dependendo da região, árvores cultivadas começam a se reproduzir com três anos.",
    preco: "R$100",
    sementes: "10 sementes",
    img: Ipe,
  },
  {
    name: "Pitangueira",
    description:
      "As pitangueiras podem atingir entre 6 e12 m de altura, dotada de copa pouco globosa, tronco tortuoso e liso medindo de 30 a 50 cm de diâmetro. Folhas opostas, simples e brilhantes na face superior. Flores solitárias ou inflorescências de cor branca e frutos vistosos, brilhantes e sulcados.",
    preco: "R$200",
    sementes: "10 sementes",
    img: Pitangueira,
  },
  {
    name: "Aroeira Salsa",
    description:
      "Aroeira Salsa é uma planta perene que cresce até aos 15 metros. É nativa do sul do Brasil,",
    preco: "R$80",
    sementes: "10 sementes",
    img: AroeiraSalsa,
  },
  {
    name: "Canafístula",
    description:
      "Árvore de grande porte, de até 30 metros de altura, com copa ampla, globosa, ou umbeliforme e tronco cilíndrico de até 120 centímetro de diâmetro. Possui casca externa marrom-acinzentada, deiscente em pequenas placas e casca interna rosada e fibrosa.",
    preco: "R$50",
    sementes: "20 sementes",
    img: Canafístula,
  },
  {
    name: "Cerejeira",
    description:
      "O cultivo da cerejeira é realizado em regiões frias. Necessitam de 800 a 1000 horas de frio para que possam produzir satisfatoriamente em áreas com Invernos frios e chuvas.",
    preco: "R$300",
    sementes: "12 sementes",
    img: Cerejeira,
  },
  {
    name: "Pau Ferro",
    description:
      "'Pau-ferro' é uma alusão à dureza de sua madeira. Pode atingir de 12 até 28 metros",
    preco: "R$90",
    sementes: "8 sementes",
    img: PauFerro,
  },
  {
    name: "Manaca Da Serra",
    description:
      "A variedade anã, que chega a 3 metros, é muito indicada para cultivo em vasos e faz um bonito conjunto com quaresmeira e manacá-de-cheiro, seus parentes próximos, embora não tenha as folhas ásperas da primeira nem o perfume penetrante da segunda.",
    preco: "R$120",
    sementes: "5 sementes",
    img: ManacaDaSerra,
  },
  {
    name: "Jacaranda",
    description:
      "A árvore Jacarandá mede até 15 m de altura, com casca fina e acinzentada. Folhas opostas, compostas bipinada, de 10 a 25 cm de comprimento com folíolos pequenos, glabros e de bordo serreado. Flores com coloração azulado-lilás, arranjadas em inflorescências piramidais densas.",
    preco: "R$180",
    sementes: "15 sementes",
    img: Jacaranda,
  },
];

export default function HomeContentBuyTreeContainer(prop) {
  return (
    <ContentBuyTreeCard color={prop.color} className="col-12 col-sm-6 col-lg-4">
      <h3>Adquira sua arvore</h3>
      <div class="row g-5 container d-flex justify-content-center">
        <div
          className="alert alert-warning col-10"
          role="alert"
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <img src={Alert} width={22} alt="teste" className="img-fluid" />
          <b>A área de compra de arvores ainda não esta funcional</b>
        </div>
        {shopTrees.map((item) => (
          <div className="col-3 col-sm-6 col-lg-4">
            <div className="card h-100">
              <img src={item.img} className="card-img-top" alt="..." />
              <div
                className="card-body"
                style={{
                  display: "flex",
                  gap: 20,
                  flexDirection: "column",
                }}
              >
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <h5
                  className="card-title"
                  style={{
                    backgroundColor: "yellow",
                    padding: 8,
                  }}
                >
                  {item.sementes} custa {item.preco}
                </h5>
                <button
                  style={{
                    backgroundColor: Colors.BLUE_MAIN,
                    color: "white",
                    fontSize: "18px",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                  }}
                >
                  Compre esta Árvore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentBuyTreeCard>
  );
}
