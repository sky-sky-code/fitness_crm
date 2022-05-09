<template>
  <div class="menu">
    <div class="menu__item" v-for="item in menuItem" :key="name">
      <div class="menu__content">
        <div class="menu__icon"><fa :icon="item.icon" /></div>
        <div class="menu__title">{{ item.name }}</div>
      </div>
      <SidebarItemBreads :listBreads="item.listBreads"/>
    </div>
  </div>
</template>

<script>
import SidebarItemBreads from "@/components/UI/sidebar/SidebarItemBreads";
export default {
  name: "Sidebar",
  components: {SidebarItemBreads},
  data() {
    return {
      menuItem: [
        // {
        //   name: 'Занятия', icon: 'dumbbell',
        //   listBreads: [{name: 'Расписание Зала', route: ''}, {name: 'Расписание Тренера', route: ''}]
        // },
        // {
        //   name: 'Клиенты', icon: 'users',
        //   listBreads: [{name: 'Клиенты', route: ''}]
        // },
        {
          name: 'Абонемент', icon: 'list-check',
          listBreads: [{name: 'Абонименты', route: '/subscription'}]
            // {name: 'Проданные Абонименты', route: ''}]
        },
        // {
        //   name: 'Услуги', icon: 'handshake', route: '',
        //   listBreads: [{name: 'Услуги', route: ''}, {name: 'Проданные Услуги', route: ''}]
        // },
        {
          name: 'Фелиалы', icon: 'building',
          listBreads: [{name: 'Филиалы', route: '/office'}, {name: 'Залы', route: '/gymroom'}]
        },
        {
          name: 'Напрвления', icon: 'signs-post',
          listBreads: [{name: 'направления', route: '/gymlesson'}]
        },
        // {
        //   name: 'Персонал', icon: 'user',
        //   listBreads: [{name: 'Тренеры', route: ''}, {name: 'График тренеров'}, {name: 'Администраторы', route: ''}]
        // },
        // {
        //   name: 'Отчет', icon: 'chart-column',
        //   listBreads: [{name: 'Выручка', route: ''}, {name: 'Текущие Абонименты', route: ''}]
        // },
        // {
        //   name: 'Задачи', icon: 'check',
        //   listBreads: [{name: 'Задачи', route: ''}, {name: 'Задачи Клиентов', route: ''}]
        // }
      ]
    };
  }
}

</script>

<style>

.menu__item{
  margin-bottom: 15px;
  max-height: 40px;
  overflow: hidden;
  height: auto;
  transition: all 0.2s;
}

.menu__content{
  display: flex;
  justify-content: left;
  padding: 8px 12px;
  max-height: 40px;
}

.menu__icon{
  font-size: 16px;
  margin-right: 10px;
  transition: all 0.5s;
}

.menu__item:hover{
  max-height: 100%;
  box-shadow: 0px 3px 4px 0px rgba(239, 86, 47);
}

.menu__item:hover .menu__listBreads{transform: translateX(0px);}

.menu__item:hover .menu__content{
  background-color: #ef562f;
  color: white;
  border-radius: 0 3px 3px 0;
}

.menu__item:hover .menu__icon{
  margin-left: 10px;
}

.menu__title{
  font-size: 16px;
}



</style>