import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { TextFieldStyle } from './styled'

import { PaperStyle, TextStyle, ButtonStyle, SpacerStyle } from '../../assets/stlyes'

export default () => (
    <Fragment>
        <PaperStyle>
            <div style={{ padding: '3%'}}>
                <TextStyle>Atualizar Usuário</TextStyle>

                <TextFieldStyle label="Nome" />
                <SpacerStyle />
                <TextFieldStyle label="Vaga" />
                <SpacerStyle />
                <TextFieldStyle label="Data de Nascimento" />
                <SpacerStyle />
                <TextFieldStyle label="Email" />
                <SpacerStyle />

                
                <Link to='/'>
                    <ButtonStyle style={{ padding: '0 100px 0 100px' }}>Atualizar</ButtonStyle>
                </Link>
            </div>
        </PaperStyle>
    </Fragment>
)