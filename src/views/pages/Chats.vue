<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
      <v-col sm="10" v-if="mostrar==false" class="scrollable">
        <v-card
          elevation="2"
          shaped
          tile
        >
          <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Chat</h3>
          <v-row  > 
            <v-col  cols="12"
                    md="12"
                    >
              <v-card
                elevation="2"
                shaped
                tile
              >
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Selena</h3>
                <p class="title blue-grey--text text--darken-2 font-weight-regular">12/11/21</p>
                <v-btn @click="mostrar = true">
                  Ver chat
                </v-btn>
              </v-card>
            </v-col >
          </v-row>
        </v-card>
      </v-col>
      
      <v-col
        v-if="mostrar==true"
        sm="10" style="position: relative;">
        <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer" >
          <message :messages="messages" @imageLoad="scrollToEnd"></message>
        </div>
        <emoji-picker :show="emojiPanel" @close="toggleEmojiPanel" @click="addEmojiToMessage"></emoji-picker>
        <div class="typer">
          <input type="text" placeholder="Type here..." v-on:keyup.enter="sendMessage" v-model="content">
          <v-btn icon class="blue--text emoji-panel" @click="toggleEmojiPanel">
            <v-icon>mdi-emoticon-outline</v-icon>
          </v-btn>
          
        </div>
      </v-col>
      <v-col v-if="mostrar==true">
        <v-btn @click="mostrar = false">
                  volver
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    mostrar: false
  }),
  
  };
</script>

<style>
  .scrollable {
    overflow-y: auto;
    height: 90vh;
  }
  .typer{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    bottom: 0;
    height: 4.9rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  }
  .typer input[type=text]{
    position: absolute;
    left: 2.5rem;
    padding: 1rem;
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .chat-container{
    box-sizing: border-box;
    height: calc(100vh - 9.5rem);
    overflow-y: auto;
    padding: 10px;
    background-color: #f2f2f2;
  }
  .message{
    margin-bottom: 3px;
  }
  .message.own{
    text-align: right;
  }
  .message.own .content{
    background-color: lightskyblue;
  }
  .chat-container .username{
    font-size: 18px;
    font-weight: bold;
  }
  .chat-container .content{
    padding: 8px;
    background-color: lightgreen;
    border-radius: 10px;
    display:inline-block;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    max-width: 50%;
    word-wrap: break-word;
    }
  @media (max-width: 480px) {
    .chat-container .content{
      max-width: 60%;
    }
  }

</style>
