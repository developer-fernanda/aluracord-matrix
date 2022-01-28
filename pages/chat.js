import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { BiSend } from 'react-icons/bi';
import { FaShareSquare, FaSpider } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';




export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaMensagens] = React.useState([]);

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: `url(https://images.hdqwalls.com/download/spiderman-and-venom-4k-af-1366x768.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.transparente.fundo,
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />

                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />

                    {/* {listaDeMensagens.map((mensagemAtual) =>{
                        return(
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    console.log(event);
                                    handleNovaMensagem(mensagem);
                                }
                            }}

                            placeholder="Digite sua mensagem..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '5px',
                                backgroundColor: appConfig.theme.colors.transparente.fundo,
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />

                        <Button
                            variant='tertiary'
                            label={< BiSend />}
                            type='submit'
                            styleSheet={{
                                borderRadius: '5px',
                                backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
                                marginLeft: '10px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            buttonColors={{
                                mainColorLight: appConfig.theme.colors.transparente.buttonRed,
                            }}
                            onClick={(event) => {
                                event.preventDefault();
                                if (mensagem.length > 0) {
                                    handleNovaMensagem(mensagem);
                                }
                            }}

                        />


                    </Box>
                </Box>
            </Box>
        </Box>
    )


    function handleNovaMensagem(novaMensagem) {
        const mensagemEnviadas = {
            id: listaDeMensagens.length + 1,
            de: 'developer-fernanda',
            texto: novaMensagem,
        };
        setListaMensagens([
            mensagemEnviadas,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }

    function Header() {
        return (
            <>
                <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text variant='heading5'>
                         MIRANHA {< FaSpider />} CHAT
                    </Text>
                    <Button
                        variant='tertiary'
                        label={< FaShareSquare />}
                        href="/"
                        styleSheet={{
                            borderRadius: '5px',
                            backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
                            marginRight: '10px',
                            color: appConfig.theme.colors.neutrals[200],
                        }}
                        buttonColors={{
                            mainColorLight: appConfig.theme.colors.transparente.buttonRed,
                        }}

                    />
                </Box>
            </>
        )
    }

    function MessageList(props) {
        console.log(props);
        return (
            <Box
                tag="ul"
                styleSheet={{
                    overflowY: 'scroll',
                    wordWrap: 'word-brek',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flex: 1,
                    color: appConfig.theme.colors.neutrals["000"],
                    marginBottom: '1px',
                }}
            >
                {props.mensagens.map((mensagem) => {
                    return (
                        <Text
                            key={mensagem.id}
                            tag="li"
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '12px',
                                wordWrap: 'word-brek',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.transparente.fundo,
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '3px',
                                    //Display flex
                                    width: '100%', 
                                    marginBottom: '16px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between' 
                                }}
                            >
                                <Box>
                                    <Image
                                        styleSheet={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight: '8px',
                                        }}
                                        src={`https://github.com/${mensagem.de}.png`}
                                    />
                                    <Text tag="strong">
                                        {mensagem.de}
                                    </Text>
                                    <Text
                                        styleSheet={{
                                            fontSize: '10px',
                                            marginLeft: '8px',
                                            color: appConfig.theme.colors.neutrals[300],
                                        }}
                                        tag="span"
                                    >
                                        {(new Date().toLocaleDateString())}
                                    </Text>
                                </Box>
                             
                               
                                <Box
                                    title={`Apagar mensagem`}
                                    styleSheet={{
                                        padding: '2px 15px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>{
                                        let resposta = confirm('Deseja remover essa mensagem?')
                                        if(resposta === true){
                                            let indice = listaDeMensagens.indexOf(mensagem);
                                            //1 parametro: Indice que vou manipular 
                                            //2 parametro: Quantidade de itens que seram manipulados a partir do primeiro paramentro 
                                            //3 parametro: Setar oq vc vai colocar no lugar (não obrigatório)
                                            listaDeMensagens.splice(indice,1)
                                            //... juntar um objeto/array com o outro
                                            setListaMensagens([...listaDeMensagens])
                                        }
                                        
                                    }

                                    }
                                >
                                    {<RiDeleteBinLine/>}

                                    
                                </Box>



                            </Box>
                           
                            {mensagem.texto}
                        </Text>
                    );
                })}

            </Box>
        )
    }

}


