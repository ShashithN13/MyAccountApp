Mobile Application Development - Practical Tutorial 04

Data Transfer Between Screens and Form Handling

Department: Department of Statistics & Computer Science, University of Kelaniya

Course: Mobile Application Development

Student Name: H.M.S.N.B Herath

Student ID: PS/2022/150

Repository Name: MyAccountApp

📌 Project Overview

This project is an Expo-managed React Native multi-screen mobile application developed using file-based routing (expo-router). It demonstrates state management for user inputs, client-side validation, cross-screen parameter forwarding, dynamic data extraction, back-stack preservation, and conditional workflow enforcement.

🎯 Lab Objectives Accomplished

State Handling with useState: Capturing user inputs from TextInput elements into local component state.

Form Validation & Alerts: Using native Alert.alert() dialogs to ensure required fields are not empty and passwords match before proceeding.

Parameter Passing (router.push): Forwarding form data payloads as route parameters between screens.

Dynamic Parameter Retrieval (useLocalSearchParams): Extracting route parameters on destination screens.

Navigation Stack Management (router.back): Popping screens from the navigation stack to allow users to edit input values without clearing the form state.

Independent Practice Enhancements:

Added "Year of Birth" field and computed age based on the current calendar year.

Implemented conditional verification on the review screen that halts navigation with an Alert if the user is under 18 years of age.

📱 Application Flow & Architecture

Registration Screen (app/index.js):

Collects Username, Email, Phone Number, Password, Confirm Password, and Year of Birth.

Applies input optimization: `keyboardType="email-address"