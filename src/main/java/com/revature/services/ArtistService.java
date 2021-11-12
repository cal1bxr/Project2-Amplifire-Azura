package com.revature.services;

import com.revature.models.Artists;
import com.revature.repos.ArtistDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    private ArtistDao artistsDao;

    @Autowired
    public ArtistService(ArtistDao artistDao) {
        this.artistsDao = artistsDao;
    }

    public List<Artists> findAll(){
        return artistsDao.findAll();
    }

    public void addOrUpdateArtists(Artists artists){
        artistsDao.save(artists);
    }
}
