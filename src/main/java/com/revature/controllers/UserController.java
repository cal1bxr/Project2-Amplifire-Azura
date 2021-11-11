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

    @GetMapping(value="/{email}")
    public Users oneUser(@PathVariable("email") String email){
        return userService.findByEmail(email);
    }

    @GetMapping
    public List<Users> allUsers() {
        return userService.findAll();
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

    @DeleteMapping(value="/{email}")
    public  ResponseEntity<Users> deleteUser(@PathVariable("email") String email){
        userService.deleteUser(email);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
