package com.cognizant.Spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {
    private static final String SECRET_KEY = "secret123";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
            String[] userDetails = credentials.split(":", 2);

            if ("user".equals(userDetails[0]) && "pwd".equals(userDetails[1])) {
                String jwt = Jwts.builder()
                        .setSubject(userDetails[0])
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                        .compact();

                Map<String, String> response = new HashMap<>();
                response.put("token", jwt);
                return response;
            }
        }
        throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/ping")
    public String ping() {
        return "Server up!";
    }
}
