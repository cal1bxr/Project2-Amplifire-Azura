package com.revature.services;

import com.revature.models.Songs;
import com.revature.repos.SongsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SongsServices {
    private SongsDao songsDao;

    @Autowired
    public SongsServices(SongsDao SongsDao) {
    	super();
        this.songsDao = SongsDao;
    }

    public List<Songs> findAll(){
        return songsDao.findAll();
    }

    public Songs findById(int id) {
        return songsDao.findById(id).get();
    }

    public List<Songs> findBySongs(String songsname){
        Optional<List<Songs>> oList = songsDao.findBySongName(songsname);
        return oList.orElseGet(ArrayList::new);
    }

    public void addOrUpdateSongs(Songs songs){
        songsDao.save(songs);
    }

    public void deleteSongs(String Songsname){
        Songs Songs = (Songs) findBySongs(Songsname);
        songsDao.delete(Songs);
    }
}
