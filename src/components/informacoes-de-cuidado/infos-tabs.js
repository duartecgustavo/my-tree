import styled from 'styled-components';
import { Colors } from '../../styles/design.tokens';
import { useSelectedInfos } from '../../hooks/useSelectedInfos';
import { useEffect } from 'react';
import { useState } from 'react';

const ContentTabsStyle = styled.div`
    display: flex;
    align-items: center;

    background-color: #00afef44;
    margin-top: 100px;
    height: 30vh;


    .container{
        background-color: ${Colors.WHITE};
        border-radius: 10px;
        padding: 20px;
    }

    .tab{
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 0px;
    }
    .tab:hover{
        background-color: ${Colors.BLUE_LIGHT} ;
        color: white;
        cursor: pointer;
    }
`;

export default function InfosTabs() {

    const { setInfo } = useSelectedInfos();

    return (
        <ContentTabsStyle>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h5 className="tab" onClick={() => { setInfo('orquidia') }}>Cultive sua rquidia</h5>
                    <h5 className="tab" onClick={() => { setInfo('jardinagem') }}>Dicas de Jardinagem</h5>
                    <h5 className="tab" onClick={() => { setInfo('adubagem') }}>Adubagem</h5>
                    <h5 className="tab" onClick={() => { setInfo('arido') }}>Locais aridos</h5>
                    <h5 className="tab" onClick={() => { setInfo('verduras') }}>Cultive verduras</h5>
                </div>
            </div>
        </ContentTabsStyle>
    )
}