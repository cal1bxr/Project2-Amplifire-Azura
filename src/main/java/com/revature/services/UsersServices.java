package com.revature.services;

import com.revature.models.Users;
import com.revature.repos.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsersServices {
    private UserDao userDao;

    @Autowired
    public UsersServices(UserDao userDao) {
    	super();
        this.userDao = userDao;
    }

    public List<Users> findAll(){
        return userDao.findAll();
    }

    public Users findByEmail(String email){
        return userDao.findByEmail(email).get();
    }

    public void addOrUpdateUser(Users user){
        userDao.save(user);
    }

    public void deleteUser(String email){
        Users user = (Users) findByEmail(email);
        userDao.delete(user);
    }
}