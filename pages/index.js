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
                    font-weight:600;
                }    
            `}</style>
        </>
    );
}

// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle /> 
//             <Titulo tag="h2">Bem-vindos de volta!</Titulo>
//             <h2>Discord Alura - Spider</h2>
//         </div>
//     )
// } 
// export default HomePage

export default function PaginaInicial() {
    // const username = 'developer-fernanda';
       const [username, setUsername] = React.useState('');
       const roteamento = useRouter();
       const imagemInicial = './img/miranha-venom.jpg';


    return (
      <>
        
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'url(https://images.hdqwalls.com/download/spiderman-and-venom-4k-af-1366x768.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.transparente.fundo,
            }}
          >
      
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '250px',
                padding: '16px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
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
                }}
              >
                {username}
              </Text>
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
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
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
              {/* <input 
                  type="text" 
                  value={username}
                  onChange={function(event){
                     console.log('Usuario digitou', event.target.value)
                    //Onde está o valor?
                    const valor = event.target.value;
                    //Trocar o valor da variavel
                    //Através do React
                    setUsername(valor);
                }}  
              
              /> */}

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
  