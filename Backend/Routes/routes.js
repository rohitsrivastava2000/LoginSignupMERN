const express=require('express');
const route=express.Router();

const {login}=require('../Controller/login');
const {signup}=require('../Controller/signup');
const {profile}=require('../Controller/Profile');
const {auth}=require('../Middleware/auth');

route.post('/signup',signup);
route.post('/login',login);
route.get('/profile',auth ,profile);

module.exports=route;
