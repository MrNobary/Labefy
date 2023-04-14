import styled from "styled-components";
import '../index.css'

export function TrackCard(props) {
    return(
        <Container>
            <div>
                <h3>{props.name}</h3>
                <p>{props.artist}</p>
            </div>
            <div className="Interact">
                <audio controls="controls">
                <source src={props.url} type="audio/mp3" />
                </audio>
            <button onClick={()=>props.deleteTrack()}>x</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    padding: 12px 6px;
    border-bottom: 5px solid black;

    .Interact {
        display: flex;
        align-items: center;
    }

    h3 {
        font-family: var(--fm-Righteous);
        letter-spacing: 5px;
        margin-bottom: 6px;
    }

    p {
        font-family: var(--fm-Montserrat);
        font-size: 16px;
    }

    audio {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom: 5px solid var(--color-Salmon);
    }

    button {
        padding: 6px;
        border: none;
        background-color: transparent;
        color: var(--color-Salmon);
        transition: .3s;

        :hover {
            margin: 0 12px;
            transform: scale(2.1);
        }
    }
`