const express= require("express")

const usermodel= require("../model/NewUserModel")

const getAllUsers= async(req,res)=>{
    try {
        const users= await usermodel.find()
    } catch (error) {
        
    }
}