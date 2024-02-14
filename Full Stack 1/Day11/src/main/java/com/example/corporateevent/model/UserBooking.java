package com.example.corporateevent.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserBooking {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String username;
    private Date bookingDate;
    private Date eventDate;
    private String description;
    private int headCount;  
    public UserBooking() {
    }

    public UserBooking(String username, Date bookingDate, Date eventDate, String description, int headCount) {
        this.username = username;
        this.bookingDate = bookingDate;
        this.eventDate = eventDate;
        this.description = description;
        this.headCount = headCount;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long bookId) {
        this.id = bookId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getHeadCount() {
        return headCount;
    }

    public void setHeadCount(int headCount) {
        this.headCount = headCount;
    }

    @Override
    public String toString() {
        return "EventBookingEntity [id=" + id + ", username=" + username + ", bookingDate=" + bookingDate
                + ", eventDate=" + eventDate + ", description=" + description + ", headCount=" + headCount + "]";
    }
}
