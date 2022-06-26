package com.example.ckeditorexample.demockeditorexample.controllers;

import java.util.Objects;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = {"/data"})
@ResponseBody
public class HomeController {
    
    private MasterController masterController;

    @PostMapping("/save")
    public String saveData(@RequestBody String data,Model model){
        System.out.println("se llego a la peticion del home: "+data);
        if(Objects.nonNull(masterController)){
            masterController.savedata();
            return "exito";
        }
        return "fail";
    }

    public MasterController getMasterController() {
        return masterController;
    }

    public void setMasterController(MasterController masterController) {
        this.masterController = masterController;
    }
}
