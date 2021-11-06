package com.revature.controllers;

import com.revature.models.Songs;
import com.revature.services.SongsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class SongsController {

    private SongsServices songservice;

    @Autowired
    public SongsController(SongsServices songservice) {
        this.songservice = songservice;
    }

    @GetMapping("/{id}")
    public Songs oneUser(@PathVariable("id") int id){
        return songservice.findById(id);
    }

    @GetMapping
    public List<Songs> allSongs() {
        return songservice.findAll();
    }

    @GetMapping("/{name}")
    public List<Songs> oneUser(@PathVariable("name") String username){
        return songservice.findBySongs(username);
    }

    @PostMapping
    public ResponseEntity<Songs> addUser(@RequestBody Songs user){
        songservice.addOrUpdateSongs(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Songs> updateUser(@RequestBody Songs user){
        songservice.addOrUpdateSongs(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/name")
    public  ResponseEntity<Songs> deleteUser(@PathVariable("name") String username){
        songservice.deleteSongs(username);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
