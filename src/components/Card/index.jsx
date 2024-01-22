import React from "react";

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/40215566?v=4" />
                    <div>
                        <h4>Rafael lemes</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>projeto feito no curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }