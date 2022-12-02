import React from 'react'
import project from '../../assets/pokedex.png'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={project} />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/111511975?v=4" />
                <div>
                    <h4>Katiana X.</h4>
                    <p>Há 13 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Pokedex - Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de HTML e CSS da plataforma DIO. <strong>Saiba mais!</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    Likes: 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
