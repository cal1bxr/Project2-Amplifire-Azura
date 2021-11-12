package com.revature.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Artists {
    @Id
    private String artistName;

    @OneToMany
    private List<Users> user;

}
