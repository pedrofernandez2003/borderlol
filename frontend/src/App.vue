<template>
  <div id="app">
    <info-usuario nombre="nombre" rango="A" foto-perfil="https://cdn.discordapp.com/attachments/480391685680005121/886014226194374766/unknown.png"></info-usuario>
    <salas></salas>
  </div>
</template>

<script>
import salas from "@/components/salas";
import infoUsuario from "@/components/infoUsuario";
export default {
  name: 'App',
  components: {
    salas,
    infoUsuario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  /*margin: 5px;*/
}

</style>
