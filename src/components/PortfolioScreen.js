import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';

import { portfolioItems } from '../db.json';
import PortfolioItem from './PortfolioItem';
import { media, Container } from './Media';

let PortfolioScreen = () =>
    <div>
        <Container vert>
            <PortfolioGrid>
                {
                    portfolioItems.item.map((item) =>
                        <PortfolioItem item={item} />
                    )
                }
            </PortfolioGrid>
        </Container>
    </div>

export default PortfolioScreen;

let PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3.5rem;
`;