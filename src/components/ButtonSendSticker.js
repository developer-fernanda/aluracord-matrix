import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Button
        styleSheet={{
          minWidth: '42px',
          minHeight: '42px',
          fontSize: '20px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '5px',
          marginBottom: '7px',
          backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
          filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
          focus: {
            backgroundColor: appConfig.theme.colors.transparente.buttonRed,
          }
          
        }}
        label="😋"
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.transparente.fundoSticker,
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '0px',
            bottom: '50px',
            padding: '16px',
            boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.neutrals["000"],
            //   fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflowY: 'scroll',
            }}
          >
            {appConfig.stickers.map((sticker) => (
              <Text
                onClick={() => {
                  // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                tag="li" key={sticker}
                styleSheet={{
                  width: '30%',
                  borderRadius: '3px',
                  padding: '10px',
                  focus: {
                    backgroundColor: appConfig.theme.colors.transparente.fundo,
                  },
                  hover: {
                    backgroundColor: appConfig.theme.colors.transparente.buttonRed,
                  }
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}