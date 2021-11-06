package com.revature.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private int userId;
    private String username;
    private int password;
    private String email;

    @ManyToMany
    @JoinTable(name="songLikes", joinColumns=@JoinColumn(name="username"),
            inverseJoinColumns=@JoinColumn(name="songName"))
    private Set<Songs> userSongs = new HashSet<Songs>();


}
