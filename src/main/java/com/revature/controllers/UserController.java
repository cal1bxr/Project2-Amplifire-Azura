package com.revature.controllers;

import com.revature.models.Users;
import com.revature.services.UsersServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/users")
public class UserController {

    private UsersServices userService;

    @Autowired
    public UserController(UsersServices userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public Users oneUser(@PathVariable("id") int id){
        return userService.findById(id);
    }

    @GetMapping
    public List<Users> allUsers() {
        return userService.findAll();
    }

    @GetMapping("/{name}")
    public List<Users> oneUser(@PathVariable("name") String username){
        return userService.findByUser(username);
    }

    @PostMapping
    public ResponseEntity<Users> addUser(@RequestBody Users user){
        userService.addOrUpdateUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Users> updateUser(@RequestBody Users user){
        userService.addOrUpdateUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/name")
    public  ResponseEntity<Users> deleteUser(@PathVariable("name") String username){
        userService.deleteUser(username);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
