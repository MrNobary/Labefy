import styled from "styled-components";
import '../../index.css'

export const Body = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: var(--color-OffWhite);
    padding-bottom: 100px;
`

export const Topfield = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin: 32px 0;
    padding: 12px;
    border-bottom: 5px solid black;

    .newPlaylist {
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
    }

    .addPlaylist {
        font-weight: 400;
        text-transform: uppercase;
        padding: 6px;
        background: transparent;
        border: 1px solid var(--color-Orange);
        background-color: var(--color-Orange);
        cursor: pointer;

        :hover {
            padding-right: 10px;
            text-align: center;
        }
    }

    input {
        padding: 6px;
        border: 1px solid var(--color-Orange);
        background-color: var(--color-Orange);
        color: black;
        outline: none;
        border-right: 1px solid black;
    }
`

export const Biblioteca = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
`