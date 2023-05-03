import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/llucas30.png" alt="Foto do usuário"/>
        <div>
          <span>Bem vindo,</span>
          <strong>Lucas Curvello</strong>
        </div>
      </Profile>
    </Container>
  );
}