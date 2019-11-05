import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import api from '../../services/api';

import { Container, UsersList, PageActions, Loading } from './styles';

export default function Main() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true);

                const response = await api.get('/users', {
                    params: {
                        since: page,
                        per_page: 4,
                    },
                });

                setUsers(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, [page]);

    function handleNextPage() {
        setPage(page + 1);
    }

    function handlePreviousPage() {
        setPage(page - 1);
    }

    function renderLoading() {
        if (loading) {
            return (
                <Loader
                    type="TailSpin"
                    color="#000"
                    width={32}
                    height={32}
                    className="loading"
                />
            );
        }
    }

    return (
        <>
            {loading ? (
                <Loading>{renderLoading()}</Loading>
            ) : (
                <>
                    {users.map(user => (
                        <Container>
                            <UsersList>
                                <li key={String(user.id)}>
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                    />
                                    <div>
                                        <p>{user.id}</p>
                                        <p>{user.login}</p>
                                        <strong>
                                            <Link
                                                to={`/repository/${encodeURIComponent(
                                                    user.login
                                                )}`}
                                            >
                                                Details
                                            </Link>
                                        </strong>
                                    </div>
                                </li>
                            </UsersList>
                        </Container>
                    ))}
                    <PageActions>
                        <button
                            type="button"
                            disabled={page < 2}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </button>
                        <span>Page {page}</span>
                        <button type="button" onClick={handleNextPage}>
                            Next
                        </button>
                    </PageActions>
                </>
            )}
            ;
        </>
    );
}
