import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import api from '../../services/api';

import {
    Container,
    User,
    RepositoryList,
    PageActions,
    Loading,
} from './styles';

export default function Repository({ match }) {
    const { repository } = match.params;

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                const [userMatch, repositoriesMatch] = await Promise.all([
                    api.get(`/users/${repository}`),
                    api.get(`/users/${repository}/repos`, {
                        params: {
                            private: false,
                            page,
                            per_page: 3,
                        },
                    }),
                ]);

                setUser(userMatch.data);
                setRepositories(repositoriesMatch.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        load();
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
                <Container>
                    <User>
                        <Link to="/">Back to users</Link>
                        <img src={user.avatar_url} alt={user.login} />
                        <h1>{user.name}</h1>
                        <p>{user.id}</p>
                        <p>{user.login}</p>
                        <p>{user.description}</p>
                        <a href={user.html_url} target="_blank">
                            Github Profile
                        </a>
                        <p>Created at {user.created_at}</p>
                    </User>

                    <RepositoryList>
                        {repositories.map(repo => (
                            <li key={String(repo.id)}>
                                <p>{repo.id}</p>
                                <div>
                                    <strong>
                                        <a href={repo.html_url} target="_blank">
                                            {repo.name}
                                        </a>
                                    </strong>
                                </div>
                                <div />
                            </li>
                        ))}
                    </RepositoryList>

                    <PageActions>
                        <button
                            type="button"
                            disabled={page < 2}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </button>
                        <span>Page {page}</span>
                        <button
                            type="button"
                            disabled={repositories.length === 0}
                            onClick={handleNextPage}
                        >
                            Next
                        </button>
                    </PageActions>
                </Container>
            )}
        </>
    );
}

Repository.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            repository: PropTypes.string.isRequired,
        }),
    }).isRequired,
};
