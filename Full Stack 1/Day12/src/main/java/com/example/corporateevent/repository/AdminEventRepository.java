package com.example.corporateevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.corporateevent.model.AdminEvent;

public interface AdminEventRepository extends JpaRepository<AdminEvent,Long> {

}
