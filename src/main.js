import Vue from 'vue';
import App from './App.vue';
import myButton from './components/Button.vue';
import myDialog from './components/Dialog.vue';
import myInput from './components/Input.vue';
import mySwitch from './components/Switch.vue'
import myRadio from './components/Radio.vue'
import myRadioGroup from './components/RadioGroup.vue'
import myCheckbox from './components/Checkbox.vue'
import myCheckboxGroup from './components/CheckboxGroup.vue'
import myForm from './components/Form.vue'
import myFormItem from './components/FormItem.vue'
import './assets/fonts/iconfont.css';
Vue.config.productionTip = false;

Vue.component(myButton.name, myButton);
Vue.component(myDialog.name, myDialog);
Vue.component(myInput.name, myInput);
Vue.component(mySwitch.name, mySwitch);
Vue.component(myRadio.name, myRadio);
Vue.component(myRadioGroup.name, myRadioGroup);
Vue.component(myCheckbox.name, myCheckbox);
Vue.component(myCheckboxGroup.name, myCheckboxGroup);
Vue.component(myForm.name, myForm);
Vue.component(myFormItem.name, myFormItem);

new Vue({
  render: h => h(App)
}).$mount('#app');
