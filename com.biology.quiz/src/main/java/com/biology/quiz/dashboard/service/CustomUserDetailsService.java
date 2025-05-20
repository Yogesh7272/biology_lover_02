package com.biology.quiz.dashboard.service;

import com.biology.quiz.dashboard.entity.StudentUser;
import com.biology.quiz.dashboard.respository.StudentUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
  private StudentUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        StudentUser user = userRepository.findByUsername(username).orElseThrow(
                ()-> new UsernameNotFoundException("User Not Found"));
        return new CustomUserDetails(user);
    }
}
