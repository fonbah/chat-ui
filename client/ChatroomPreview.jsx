import React from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { ChatBubble, Message } from 'react-chat-ui';


const Wrapper = styled.div`
  cursor: pointer;
`
const getCardTitleStyle = () => ({
  display: 'flex',
  alignItems: 'center'
})

export default ({ chatroom, onEnter }) => (
  // <Paper
  //   style={{ maxWidth: 600, marginBottom: 40 }}
  //   zDepth={5}
  // >
    <Wrapper onClick={onEnter}>
      <ChatBubble
        message={new Message({id: Date.now()+Math.random(), message: chatroom.name})}
        bubbleStyles={
          {
            text: {
              fontSize: 60
            },
            chatbubble: {
              borderRadius: 70,
              padding: 40,
              marginBottom: 20
            }
          }
        }
      />
      {/* <Card>
        <CardMedia
          overlay={
            // <CardTitle
            //   title={chatroom.name}
            //   style={getCardTitleStyle()}
            // />
          }
        > */}
      {/* <img height="100%" src={chatroom.image} alt="" /> */}
      {/* <div style={{ width: '250px', height: '100px' }}></div>
        </CardMedia>
      </Card> */}
    </Wrapper>
  // </Paper>
)
