import { ContainerMessage, MessageBox } from "./styles";
import chatGPT from '../../assets/chatGPT.svg';

export function BoxMessage(props) {

    const message = props.message
    const isUser = props.isUser

    return (
        <>
            <ContainerMessage className={isUser && "user"}>
                {
                    !isUser && <img src={chatGPT} style={{ width: "30px", height: "30px" }} alt="Seu amigo NatureAI" />
                }

                <MessageBox>
                    {message}
                </MessageBox>
            </ContainerMessage>
        </>
    );
}
