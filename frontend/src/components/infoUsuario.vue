<template>
  <div id="perfil">
    <img :src="fotoPerfil" alt="Foto de perfil">
    <div>
      <h1>{{nombre}}</h1>
      <h3>{{rango}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoUsuario",
  props: {
    nombre: String,
    rango: String,
    fotoPerfil: String
  }
}
</script>

<style scoped>
#perfil{
  height: 10%;
  background-color: #2c3e50;
  width: 66%;
  display: inline-block;
  /*vertical-align: center;*/
  text-align: left;
}
#perfil img, #perfil div{
  display: inline-block;
  vertical-align: middle;
  /*float: left;*/
  margin-left: 20px;
}
img{
  border-radius: 50%;
  vertical-align: middle;
  width: 100px;
  height: 100px;
}
</style>