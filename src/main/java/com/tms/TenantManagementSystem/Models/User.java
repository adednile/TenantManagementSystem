package com.tms.TenantManagementSystem.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    protected String name;
    @Id
    public int ID;
    protected String email;
    protected String password;

    public User(String name, int ID, String email, String password) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.password = password;
    }

    public User() {
        this.name = "";
        this.ID = 0;
        this.email = "";
        this.password = "";
    }

    public boolean login(String email, String password) {
        return this.email.equals(email) && this.password.equals(password);
    }

    public void registerUser() {
        System.out.println("Registering user: " + name);
    }
}

