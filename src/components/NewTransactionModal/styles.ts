import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form `
    h2 {
        color: var(--text-title);
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding-inline: 1.5rem;
        height: 3.5rem;
        border-radius: 0.25rem;

        border: 0.1rem solid #d7d7d7;
        background: var(--input-background);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 0.6rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding-inline: 1.5rem;
        height: 3.5rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 500;

        transition: filter 0.4s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin-block: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor:'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3.5rem;
    border: 0.1rem solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive
     ? transparentize(0.9, colors[props.activeColor]) 
     : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.4s;

    &:hover {
        border-color: ${darken(0.8, '#d7d7d7')};
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`