import styled from "styled-components";
import '../../index.css'

export const Body = styled.div`
    height: 100vh;
    background-color: var(--color-OffWhite);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 160px;
    padding: 12px 32px;
    border-bottom: 10px solid black;
    background-color: var(--color-Orange);

    h1 {
        font-family: var(--fm-Audiowide);
        font-size: 80px;
    }

    button {
        padding: 6px;
        background-color: transparent;
        border: none;
        transition: 0.3s ease;

        :hover {
            transform: scale(1.1);
            margin: 0 12px;
        }
    }
`

export const Tracklist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const NewTrack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 32px 0; 

    input {
        padding: 6px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid black;
        outline: none;
    }

    button {
        padding: 6px;
        background-color: var(--color-Orange);
        border: none;
        border-bottom: 2px solid black;
        width: 100%;
        transition: .3s ease;

        :hover {
            transform: scale(1.1);
        }
    }
`

export const ShowNewTrack = styled.button`
    margin: 32px 0;
    font-weight: 500;
    text-transform: uppercase;
    padding: 6px;
    position: relative;
    transition: .5s ease;
    background: transparent;
    border: none;
    cursor: pointer;

    :before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 0;
        background-color: var(--color-Orange);
        transition: .5s ease;
    }

    :hover {
        color: black;
        transition-delay: .5s;

        :before {
            width: 100%;
        }

        :hover:after {
            height: 100%;
            transition-delay: 0.4s;
            color: aliceblue;
        }
    }

    :after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background-color: var(--color-Orange);
        transition: .4s ease;
        z-index: -1;
    }
`