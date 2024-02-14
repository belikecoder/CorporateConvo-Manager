package com.example.corporateevent.model;

import java.sql.Date;

import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserPayment {
@Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String name;
private double totalAmount;
private double amountPaying;
private double remainingAmount;
private Date paymentDate;
private String paymentMode;


public int getId() {
    return id;
}


public void setId(int id) {
    this.id = id;
}


public String getName() {
    return name;
}


public void setName(String name) {
    this.name = name;
}


public double getTotalAmount() {
    return totalAmount;
}


public void setTotalAmount(double totalAmount) {
    this.totalAmount = totalAmount;
}


public double getAmountPaying() {
    return amountPaying;
}


public void setAmountPaying(double amountPaying) {
    this.amountPaying = amountPaying;
}


public double getRemainingAmount() {
    return remainingAmount;
}


public void setRemainingAmount(double remainingAmount) {
    this.remainingAmount = remainingAmount;
}


public Date getPaymentDate() {
    return paymentDate;
}


public void setPaymentDate(Date paymentDate) {
    this.paymentDate = paymentDate;
}


public String getPaymentMode() {
    return paymentMode;
}


public void setPaymentMode(String paymentMode) {
    this.paymentMode = paymentMode;
}
public UserPayment()
{
    
}


public UserPayment(int id, String name, double totalAmount, double amountPaying, double remainingAmount,
        Date paymentDate, String paymentMode) {
    this.id = id;
    this.name = name;
    this.totalAmount = totalAmount;
    this.amountPaying = amountPaying;
    this.remainingAmount = remainingAmount;
    this.paymentDate = paymentDate;
    this.paymentMode = paymentMode;
}


@Override
public String toString() {
    return "UserPayment [id=" + id + ", name=" + name + ", totalAmount=" + totalAmount + ", amountPaying="
            + amountPaying + ", remainingAmount=" + remainingAmount + ", paymentDate=" + paymentDate + ", paymentMode="
            + paymentMode + "]";
}



}
