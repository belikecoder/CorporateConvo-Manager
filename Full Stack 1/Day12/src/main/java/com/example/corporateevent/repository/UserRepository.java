package com.example.corporateevent.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.corporateevent.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
