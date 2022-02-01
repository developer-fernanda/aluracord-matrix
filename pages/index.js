import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';

//Componente React
//Função recebe um argumento/propriedade

function Titulo(props){
    console.log(props);
    const Tag = props.tag;
    return (
        <>
          <Tag>{props.children}</Tag>
          <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 20px;
              }    
          `}</style>
        </>
    );
}

export default function PaginaInicial() {
    // const username = 'developer-fernanda';
      const [username, setUsername] = React.useState('');
      const roteamento = useRouter();
      const imagemInicial = './img/avatar.jpg';

    return (
      <>
        
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent:'center',
            backgroundImage: 'url(./img/background.jpg)', backgroundSize: 'cover'
          }}
        >
          <Box
            styleSheet={{
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '400px',
              height: '100%',
              borderRadius: '5px', padding: '25px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.transparente.fundo,
            }}
          >
      
            {/* Photo Area */}
            <Box
              styleSheet={{
                paddingTop: '50px',
                flex: 1,
                minHeight: '240px'
              }}
            >
              <a
                href={`https://github.com/${username}`}
                target={'_blank'}
                styleSheet={{
                  textDecoration: 'none'
                }}
              >  
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                  paddingLeft:'50px', 
                  paddingRight: '50px'
                }}
                onError={function(event){
                  event.target.src = imagemInicial
                }}
                src={username.length > 2 ? `https://github.com/${username}.png` : imagemInicial}
              />

              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  fontSize: '15px',
                  padding: '3px 10px',
                  display: 'flex', 
                  justifyContent: 'center'
                }}
              >
                {username}
              </Text>
              </a>
            </Box>
            {/* Photo Area */}

            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){
                  infosDoEvento.preventDefault();
                  console.log('Alguém submit o form')
                  roteamento.push(`/chat?username=${username}`);
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '32px', padding:'20px'
              }}
            >
              <Titulo tag="h2">Bem-vindos ao MiranhaVerso!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                 value={username}
                 onChange={function(event){
                    console.log('Usuario digitou', event.target.value)
                   //Onde está o valor?
                   const valor = event.target.value;
                   //Trocar o valor da variavel
                   //Através do React
                   setUsername(valor);
                  }}  
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.transparente.buttonRed,
                    backgroundColor: appConfig.theme.colors.transparente.fundo,
                  },
                }}
              />

              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.transparente.buttonRed,
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.transparente.buttonBlack,
                }}
              />
            </Box>
            {/* Formulário */}

          </Box>
        </Box>
      </>
    );
}
  