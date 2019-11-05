import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d5da;
    padding: 15px;
    margin: 20px auto;
    h2 {
        font-weight: normal;
    }
`;

export const UsersList = styled.ul`
    list-style: none;
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }
        div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 35px;

            p {
                margin-top: 5px;
                font-size: 20px;
                color: #999;
            }

            strong {
                line-height: 30px;
                font-size: 16px;
                a {
                    text-decoration: none;
                    color: #0366d6;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export const PageActions = styled.div`
    max-width: 700px;
    margin: auto;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    button {
        transition: opacity 0.25s ease-out;
        border-radius: 4px;
        outline: 0;
        border: 0;
        padding: 8px;
        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    }
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 180px;
`;
