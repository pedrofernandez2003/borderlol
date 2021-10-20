<template>
  <div id="listaSalas">
    <h1>{{header}}</h1>
    <div id="salas">
      <ul id="tabla">
        <li v-for="sala in salas" v-bind:key="sala">
          {{sala.nombre}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    el: "#tabla",
    data: function() {
      return {
        header: "Lista de salas",
        salas: [
          {nombre:"Sala1", puntos:4321, rango:"B"},
          {nombre:"Sala2", puntos:321, rango:"D"},
          {nombre:"Sala3", puntos:10023, rango:"S"},
        ]
      };
    }
  }
</script>

<style scoped>
#listaSalas{
  background: #2c3e50;
  width: 30%;
  height: 500px;
  float: right;
  display: inline-block;
  text-align: center;
}
h1{
  margin-top: 10px;
}
#salas{
  outline: 1px solid whitesmoke;
  width: 90%;
  height: 400px;
  margin-left: 5%;
}
</style>