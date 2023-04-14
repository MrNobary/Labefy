import styled from "styled-components";
import '../index.css'

export function PlaylistCard(props) {
    return(
        <CardContainer>
            <h3 onClick={props.changePage}>{props.nome}</h3>
            <div>
                <button onClick={() => props.deleteButton()}>Delete</button>
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div `
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 12px 0;
    width: 90%;
    padding: 12px 0;
    border-bottom:5px solid black;


    h3 {
        font-family: var(--fm-Righteous);
        letter-spacing: 5px;
        cursor: pointer;
        transition: .3s ease;

        :hover {
            letter-spacing: 10px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: end;

        p {
            font-size: 14px;
            font-weight: 500;
        }

        button {
            border: none;
            background-color: transparent;
            padding: 6px 0;
            cursor: pointer;
            :hover {
                color: var(--color-Salmon);
            }
        }
    }

    transition: 0.3s;

    :hover {
        width: 100%;
    }
`