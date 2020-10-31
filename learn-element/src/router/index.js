import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import ButtonDetail from "../components/ButtonDetail";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Container_demo from "../components/Container_demo";
import Radio from "../components/Radio";
import Form from "../components/Form";
import Select from "../components/Select";
import Switch from "../components/Switchs";
import DatePickers from "../components/DatePickers";
import Forms from "../components/Forms";
import Meaasge from "../components/Meaasge";
import Tables from "../components/Tables";
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/button', component: Button,},
    {path: '/buttondetail', component: ButtonDetail},
    {path:'/link',component:Link},
    {path:'/layout',component:Layout},
    {path:'/container',component:Container},
    {path:"/Container_demo",component:Container_demo},
    {path:'/radio',component:Radio},
    {path:'/form',component:Form},
    {path:'/select',component:Select},
    {path:'/switch',component:Switch},
    {path:'/datepicker',component:DatePickers},
    {path:'/forms',component:Forms},
    {path:'/message',component:Meaasge},
    {path:'/tables',component:Tables},
  ]
})
