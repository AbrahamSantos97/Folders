package com.example.ckeditorexample.demockeditorexample.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Component
@RequestMapping(value = "/")
public class MasterController {
    
    @Autowired
    private HomeController homeController;

    @GetMapping(value="/")
    public String home(Model model){
        homeController.setMasterController(this);
        return "home";
    }

    public void savedata(){
        System.out.println("se llego a la peticion y al controlador master");
    }

}
