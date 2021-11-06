package com.revature.models;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Songs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int songId;
    private String songName;
    private String songArtist;
    private String songGenre;

    @ManyToMany(mappedBy = "userSongs")
    private Set<Users> users = new HashSet<Users>();
}
