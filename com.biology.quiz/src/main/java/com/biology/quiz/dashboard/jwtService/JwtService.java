package com.biology.quiz.dashboard.jwtService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JwtService {

    // Use a strong, long secret key (min 256-bit)
    private final String SECRET = "y2B7E151628AED2A6ABF7158809CF4F3C9E1D1A26C3A4E7A8D1F4A3B2C6D7E8F9";

    // Generate signing key once from secret bytes
    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    private final JwtParser parser = Jwts.parserBuilder()
            .setSigningKey(key)
            .build();

    public String generatedToken(UserDetails userDetails) {
        List<String> roles = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiry
                .signWith(key, SignatureAlgorithm.HS512)  // use key and algo
                .compact();
    }

    public String extractUsername(String token) {
        Claims claims = parser.parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public boolean isTokenExpired(String token) {
        Date expiration = parser.parseClaimsJws(token).getBody().getExpiration();
        return expiration.before(new Date());
    }
}
