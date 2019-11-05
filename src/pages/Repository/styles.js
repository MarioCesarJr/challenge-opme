import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d5da;
    padding: 30px;
    margin: 20px auto;
`;

export const User = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #0366d6;
        font-size: 16px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const RepositoryList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    li {
        display: flex;
        justify-content: space-between;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
        & + li {
            margin-top: 10px;
        }
        div {
            margin-left: 15px;
            strong {
                font-size: 16px;
                a {
                    text-decoration: none;
                    color: #0366d6;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                span {
                    background: #eee;
                    color: #333;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    padding: 3px 4px;
                    margin-left: 10px;
                }
            }
            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;

export const PageActions = styled.div`
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
    margin-top: 150px;
`;
