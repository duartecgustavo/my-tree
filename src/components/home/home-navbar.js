import styled from "styled-components";
import { Colors } from "../../styles/design.tokens";
import { NavLink } from "react-router-dom";
import profile from "../../assets/profile.svg";

const NavbarStyle = styled.div`
  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  background-color: #00afef44;
  position: absolute;
  top: 0;

  p {
    color: ${Colors.WHITE};
    font-weight: lighter;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 2.5rem;
    color: ${Colors.WHITE};

    &:hover {
      color: ${Colors.WHITE_GRAY};
    }
  }

  .h1 {
    color: ${Colors.BLACK_GRAY};
  }

  .h1:hover {
    color: ${Colors.WHITE};
    cursor: cell;
    font-weight: bold;
  }

  .links {
    gap: 30px;
  }

  .links > a {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.5rem;
    }

    .h1 {
      font-size: 1.5rem;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyle>
      <div className="container">
        <NavLink className="h1" to="/home">
          myTree
        </NavLink>
        <div className="links">
          <NavLink to="/home/informacoes-de-cuidado">Cultivar</NavLink>
          <NavLink to="/">Login/Cadastre-se</NavLink>
          <NavLink to="/home/profile">
            <div style={{ display: "flex", gap: "6px" }}>
              Profile <img style={{ width: 36 }} src={profile} />
            </div>
          </NavLink>
        </div>
      </div>
    </NavbarStyle>
  );
}
