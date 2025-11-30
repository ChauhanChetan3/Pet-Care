package com.examly.springapp.dto;

public class LoginResponseDto {
    private int userId;
    private String jwtToken;
    private String username;
    private String role;

    private  String name; //name

    public LoginResponseDto() {
    }


    public LoginResponseDto(int userId, String jwtToken, String username, String role, String name) {
        this.userId = userId;
        this.jwtToken = jwtToken;
        this.username = username;
        this.role = role;
        this.name = name; //name
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    //name
    public String getName() {return name;}

    public void setName(String role) {this.name = name;}

    
    
}
