import { useState } from "react";
import styled from "styled-components";
import arrowRight from "../../assets/arrowRight.svg";
import { callChatGpt } from "../../services/get_api_chat_gpt";
import { BoxMessage } from "./box_message";
import {
  ButtonChat,
  HistoryChat,
  InputChat,
  InputFild,
  NavbarChat,
} from "./styles";

const ContentChatStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d0d0d0;
  position: relative;
  background-color: #00afef44;
`;

export function Chat() {
  const [inputValue, setInputValue] = useState({});
  const [messages, setMessages] = useState([]);

  async function handleMessage() {
    if (inputValue.msg.trim() !== "") {
      const response = await callChatGpt(inputValue.msg);
      const content = {
        msg: response.choices[0].message.content,
        isUser: false,
      };

      setMessages([...messages, inputValue, content]);
      setInputValue({ msg: "", isUser: true });
    }
  }

  return (
    <>
      <ContentChatStyle>
        <div className="container">
          <NavbarChat className="p-3 mt-5">
            <h3>Fale com nosso assistente, envie sua dúvida:</h3>
          </NavbarChat>
          <HistoryChat className="mt-3">
            {messages?.map((item) => (
              <BoxMessage message={item.msg} isUser={item.isUser} />
            ))}
          </HistoryChat>

          <InputChat className="p-5">
            <InputFild
              placeholder="Digite sua dúvida"
              id="inputMessageId"
              value={inputValue.msg}
              onChange={(e) =>
                setInputValue({ msg: e.target.value, isUser: true })
              }
            />
            <ButtonChat
              name="button_chat"
              type="button"
              onClick={handleMessage}
            >
              <img src={arrowRight} />
            </ButtonChat>
          </InputChat>
        </div>
      </ContentChatStyle>
    </>
  );
}
