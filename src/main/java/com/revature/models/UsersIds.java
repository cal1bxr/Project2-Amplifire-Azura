package com.revature.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class UsersIds {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    public UsersIds() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersIds usersIds = (UsersIds) o;
        return userId == usersIds.userId;
    }

    @Override
    public String toString() {
        return "UsersIds{" +
                "userId=" + userId +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId);
    }
}
