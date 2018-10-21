import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import * as images from '../assets/students/';


let PortfolioItem = ({ item }) =>
    <Link className="product-card-link" to={`/work/${item.slug}`} >
        <Card>
            <Img src={require(`../assets/${item.image}`)} />
            <Info>
                <Text>{item.category}</Text>
                <Title>{item.title}</Title>
            </Info>
        </Card>
    </Link>

export default PortfolioItem ;

let Img = styled.img`
    width: 100%;

    
   
    padding: 2px;
`;
let Card = styled.div`
   
    
`;
let Info = styled.div`
    position: relative;
  
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
`;
let Title = styled.h5`
    font-size: 1.7rem;
    font-weight: 800;
    margin: 0;
   
`;
let Text = styled.span`
    font-style: italic;
    color: #777777;
`;



//    border: 4px #F2E818 solid;
//     border: 4px #1B67AB  solid;
//     border-bottom: 4px #C21717 solid;
//     border-right: 4px #C21717 solid;