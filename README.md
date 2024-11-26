# **ReDrive: A Smarter Way to Utilize Parked Vehicles**

## **Table of Contents**

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Project Architecture](#project-architecture)  
5. [Phase-Wise Implementation](#phase-wise-implementation)  
   - [Phase 1: MVP - Core App Development](#phase-1-mvp---core-app-development)  
   - [Phase 2: Security and IoT Integration](#phase-2-security-and-iot-integration)  
   - [Phase 3: Scalability and Business Expansion](#phase-3-scalability-and-business-expansion)  
   - [Phase 4: Advanced Safety and Sustainability](#phase-4-advanced-safety-and-sustainability)  
6. [How to Run the Project](#how-to-run-the-project)  
7. [Future Enhancements](#future-enhancements)  

---

## **Introduction**

ReDrive is a mobile app that transforms the way parked vehicles are utilized. Instead of incurring hefty parking charges, vehicle owners can rent out their idle cars and bikes to individuals needing affordable transport solutions—such as delivery drivers, gig workers, and logistics professionals.

The app also ensures vehicle safety and user trust by leveraging advanced IoT devices, real-time tracking, and a secure payment system. As e-commerce and gig economies expand, ReDrive envisions becoming the go-to platform for shared vehicle rentals.

---

## **Features**

- **Vehicle Rentals**: Rent out parked vehicles (cars and bikes) for daily or hourly use.  
- **Secure Payments**: Revenue-sharing model for vehicle owners with safe payment gateways.  
- **Location-Based Search**: Real-time location tracking for available vehicles.  
- **IoT Integration**: Keyless entry, geofencing, and theft prevention (Phase 2).  
- **Business Accounts**: Long-term rentals and fleet management for companies (Phase 3).  
- **Advanced Safety Features**: RFID, Raspberry Pi IoT, biometric authentication, and EV support (Phase 4).  

---

## **Tech Stack**

### **Mobile App (Frontend)**
- **Flutter**: Cross-platform mobile app development.  
- **Dart**: Programming language for Flutter.  

### **Backend**
- **Node.js** with **Express.js** (for RESTful API).  
- **Socket.IO** (real-time communication).  
- **Message Queue**: Kafka/RabbitMQ for managing inter-service communication.  

### **Database**
- **MongoDB**: For flexible, schema-less data storage (users, vehicles).  
- **PostgreSQL**: For structured relational data (bookings, payments).  
- **Redis**: Real-time geofencing and session caching.  

### **Cloud & IoT**
- **AWS IoT Core**: IoT device management and data synchronization.  
- **Google Maps API**: Location services and route optimization.  
- **Firebase**: Push notifications and user analytics.  

### **Security**
- **OAuth 2.0** / **JWT**: Secure user authentication and authorization.  
- **IoT Integration**: Raspberry Pi and RFID for keyless entry and theft prevention.  

---

## **Project Architecture**

### **Phase 1: MVP Architecture**
