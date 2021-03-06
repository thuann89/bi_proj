import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import jQuery from 'jquery';
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jQuery;

require('bootstrap-sass');
require('dcjqaccordion');
require('jquery.cookie');
require('jquery.nicescroll');

window.axios = axios;
window.Vue = Vue;

Vue.use(VueRouter);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};
