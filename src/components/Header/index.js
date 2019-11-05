import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';

export default function Header() {
    return (
        <Container>
            <FaGithub color="#fff" size={40} />
        </Container>
    );
}
