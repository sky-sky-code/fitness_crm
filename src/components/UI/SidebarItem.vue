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
import SidebarItemBreads from "@/components/UI/SidebarItemBreads";
export default {
  name: "Sidebar",
  components: {SidebarItemBreads},
  data() {
    return {
      menuItem: [
        {
          name: 'Занятия', icon: 'dumbbell',
          listBreads: [{name: 'Расписание Зала', route: 'https://yandex.ru/'}, {name: 'Расписание Тренера', route: ''}]
        },
        {
          name: 'Клиенты', icon: 'users',
          listBreads: [{name: 'Клиенты', route: ''}]
        },
        {
          name: 'Абонемент', icon: 'list-check',
          listBreads: [{name: 'Абонименты', route: ''}, {name: 'Проданные Абонименты', route: ''}]
        },
        {
          name: 'Услуги', icon: 'handshake', route: '',
          listBreads: [{name: 'Услуги', route: ''}, {name: 'Проданные Услуги', route: ''}]
        },
        {
          name: 'Фелиалы', icon: 'building',
          listBreads: [{name: 'Филиалы', route: ''}, {name: 'Залы', route: ''}]
        },
        {
          name: 'Напрвления', icon: 'signs-post',
          listBreads: [{name: '', route: ''}]
        },
        {
          name: 'Персонал', icon: 'user',
          listBreads: [{name: 'Тренеры', route: ''}, {name: 'График тренеров'}, {name: 'Администраторы', route: ''}]
        },
        {
          name: 'Отчет', icon: 'chart-column',
          listBreads: [{name: 'Выручка', route: ''}, {name: 'Текущие Абонименты', route: ''}]
        },
        {
          name: 'Задачи', icon: 'check',
          listBreads: [{name: 'Задачи', route: ''}, {name: 'Задачи Клиентов', route: ''}]
        }
      ]
    };
  }
}

</script>

<style>

.menu__item{
  margin-bottom: 25px;
}

.menu__content{
  display: flex;
  justify-content: left;
  padding: 8px 12px;
  transition: all 0.2s;
}

.menu__item:hover .menu__content{
  background-color: #f1f1f1;
  border-radius: 0 3px 3px 0;
}

.menu__icon{
  transition: all 0.2s;
}

.menu__item:hover .menu__icon{
  margin-left: 10px;
}

.menu__item:hover .menu__listBreads{display: block; transform: translateX(0)}

.menu__icon{
  font-size: 16px;
  margin-right: 10px;
}

.menu__title{
  font-size: 16px;
}

.menu__item_active{
  background-color: #97229FFC;
  color: #fff;
}


</style>