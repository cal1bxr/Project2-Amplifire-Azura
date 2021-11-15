package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Favorites;
import com.revature.services.FavoritesService;

@CrossOrigin
@RestController
@RequestMapping(value="/favorites")
public class FavoritesController {

    private FavoritesService favoriteService;

    @Autowired
    public FavoritesController(FavoritesService favoriteService) {
		super();
		this.favoriteService = favoriteService;
	}

	@GetMapping("/{email}")
    public Favorites oneFavorite(@PathVariable("email") String email){
        return favoriteService.findByEmail(email);
    }

    @GetMapping
    public List<Favorites> allFavorites() {
        return favoriteService.findAll();
    }

    @PostMapping
    public ResponseEntity<Favorites> addFavorite(@RequestBody Favorites favorite){
        favoriteService.addOrUpdateFavorites(favorite);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Favorites> updateFavorite(@RequestBody Favorites favorite){
        favoriteService.addOrUpdateFavorites(favorite);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{email}")
    public  ResponseEntity<Favorites> deleteFavorite(@PathVariable("email") String email){
        favoriteService.deleteFavorites(email);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
