import styled from "styled-components"
import '../index.css'

export function Header() {
    return(
        <Container>
            <div>
                <h1>Labefy</h1>
                <span>Ouça todas suas músicas favoritas em um só lugar!</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 600px;
    border-bottom: 10px solid black;
    background-color: var(--color-Orange);

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        height: 80%;

        h1 {
            font-family: var(--fm-Audiowide);
            text-transform: uppercase;
            font-size: 100px;
            letter-spacing: 10px;
        }

        span {
            font-family: var(--fm-Righteous);
            font-size: 20px;
            letter-spacing: 3px;
        }
    }
`