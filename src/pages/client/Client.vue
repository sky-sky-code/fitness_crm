<template>
  <div class="client">
    <navbar class="nav">
      <div class="client__nav">
        <div class="nav__item">
          Данные
        </div>
        <div class="nav__item">
          Абонимент
        </div>
        <div class="nav__item">
          Услуги
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
export default {
  name: "Client",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

.nav{
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
}

.client__nav{
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.nav__item{
  padding: 10px;
  transition: all 0.2s;
}

.nav__item:hover{
  background-color: #ef562f;
  color: white;
}

</style>