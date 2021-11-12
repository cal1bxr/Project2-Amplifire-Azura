package com.revature.controllers;

import com.revature.models.Artists;
import com.revature.services.ArtistService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value="/artists")
public class ArtistController {

    private ArtistService artistService;


    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping
    public List<Artists> allArtists() {
        return artistService.findAll();
    }

    @PostMapping
    public ResponseEntity<Artists> addArtist(@RequestBody Artists artist){
        artistService.addOrUpdateArtists(artist);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }



}
