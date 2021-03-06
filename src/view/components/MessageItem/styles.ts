// Core
import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-self: ${(props: {align: boolean}) => props?.align ? 'flex-end' : 'start'};
        width: fit-content;
        min-width: 40%;
        max-width: 60%;
        word-wrap: break-word;
        padding: 5px 5px;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        margin: 2px 10px;

    .name-block {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 10px;
            padding: 2px;
            background-color: lightgray;
            border: 0.5px solid black;
            border-radius: 2px;
            margin: 0 2px;
            cursor: pointer;
            user-select: none;
        }
    }

    .name {
        display: flex;
        justify-content: ${(props: {align: boolean}) => props?.align ? 'flex-end' : 'start'};
        align-items: center;
        font-size: 12px;
        color: ${(props: {align: boolean}) => props?.align ? 'blue' : 'red'};
    }

    .text {
        font-size: 14px;
        margin: 5px 0;
    }

    .date {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: black;
    }

    .edit-message-field {
        width: 100%;
        height: 1.5rem;
        font-size: 1rem;
        font-weight: 400;
        cursor: text;
        border-style: none none solid none;
        margin: 5px 0;

        &:focus {
            outline: none;
            border-color: blue;
            transition: 0.5s;
        }
    }

    .submit-changes-btn {
        display: inline-block;
        background-color: black;
        color: white;
        border-radius: 3px;
        margin-right: 5px;

        &:hover {
            background-color: green;
            transition: 0.5s;
        }

        &:active {
            filter: invert();
            transition: none;
        }
    }

    .decline-changes-btn {
        display: inline-block;
        background-color: black;
        color: white;
        border-radius: 3px;

        &:hover {
            background-color: red;
            transition: 0.5s;
        }

        &:active {
            filter: invert();
            transition: none;
        }
    }
`;
