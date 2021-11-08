package com.revature.models;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Songs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int songId;
    private String songName;
    private String songArtist;
    private String songGenre;

    @ManyToOne
    private Users user;

    public Songs(int songId, String songName, String songArtist, String songGenre, Users user) {
        this.songId = songId;
        this.songName = songName;
        this.songArtist = songArtist;
        this.songGenre = songGenre;
        this.user = user;
    }

    public Songs(String songName, String songArtist, String songGenre, Users user) {
        this.songName = songName;
        this.songArtist = songArtist;
        this.songGenre = songGenre;
        this.user = user;
    }

    public Songs() {
    }

    public int getSongId() {
        return songId;
    }

    public void setSongId(int songId) {
        this.songId = songId;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getSongArtist() {
        return songArtist;
    }

    public void setSongArtist(String songArtist) {
        this.songArtist = songArtist;
    }

    public String getSongGenre() {
        return songGenre;
    }

    public void setSongGenre(String songGenre) {
        this.songGenre = songGenre;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Songs songs = (Songs) o;
        return songId == songs.songId && songName.equals(songs.songName) && songArtist.equals(songs.songArtist) && songGenre.equals(songs.songGenre) && user.equals(songs.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(songId, songName, songArtist, songGenre, user);
    }

    @Override
    public String toString() {
        return "Songs{" +
                "songId=" + songId +
                ", songName='" + songName + '\'' +
                ", songArtist='" + songArtist + '\'' +
                ", songGenre='" + songGenre + '\'' +
                ", user=" + user +
                '}';
    }
}
