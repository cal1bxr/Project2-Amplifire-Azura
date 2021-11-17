package com.revature.tests;

//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.nio.file.attribute.FileAttributeView;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Favorites;
import com.revature.models.Users;
import com.revature.repos.FavoritesDao;
import com.revature.repos.UserDao;
import com.revature.services.FavoritesService;
import com.revature.services.UsersServices;
import org.junit.Before;
//import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith({MockitoExtension.class})
class UsersServicesTest {
    @InjectMocks
    UsersServices usersServices;

    @Mock
    private UserDao userDao;

    @Before
    public void beforeAll() {
        MockitoAnnotations.openMocks(this);
    }
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findAll() {
        List<Users> list = new ArrayList<Users>();
        Users user1 = new Users("asd@gmail.com","asd", "dsa", "description of asd", "asd", "asd", "asd", "asd", "asd", "asd");

        list.add(user1);

        when(userDao.findAll()).thenReturn(list);

        //test
        List<Users> userList = usersServices.findAll();
        assertEquals(1, userList.size());

        verify(userDao, times(1)).findAll();
    }

    @Test
    void findByEmail() {
        Users user1 = new Users("asd@gmail.com","asd", "dsa", "description of asd", "asd", "asd", "asd", "asd", "asd", "asd");
        when(userDao.findByEmail("asd@gmail.com")).thenReturn(java.util.Optional.of(user1));

        Users returnedUser = usersServices.findByEmail("asd");
        assertEquals("asd", returnedUser.getFirstName());

    }

    @Test
    void addOrUpdateUser() {
        Users user1 = new Users("asd@gmail.com","asd", "dsa", "description of asd", "asd", "asd", "asd", "asd", "asd", "asd");

        usersServices.addOrUpdateUser(user1);

        verify(userDao, times(1)).save(user1);

    }

    @Test               
    void deleteUser() {
    }
}