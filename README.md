# 🌍 APPDEV1 Angular Project – Supplier Management System

## 🎯 Sustainable Development Goal (SDG)
**SDG 12: Responsible Consumption and Production**

---

## 📌 Project Overview
This project is a Single Page Application (SPA) built using Angular. It simulates a simple Supplier Management System that allows users to view, edit, and manage supplier information through a structured and interactive interface.

The system demonstrates key Angular concepts such as routing, services, dependency injection, event binding, and two-way data binding.

---

## 🌱 Why SDG 12?
We chose **SDG 12: Responsible Consumption and Production** because it focuses on improving resource efficiency and promoting sustainable business practices.

In real-world applications, supplier management systems play an important role in ensuring that organizations source materials responsibly, track supplier performance, and reduce waste in production and logistics processes.

This project reflects those ideas by simulating how companies can organize supplier data in a structured and efficient way.

---

## 🧩 Features

- 📋 Supplier List View (Displays 10 mock suppliers)
- 🔍 View Supplier Details via parameterized routing
- ✏️ Editable Supplier Information Form
- 🔄 Two-way data binding using `[(ngModel)]`
- 💾 Save updates to shared service data
- ↩️ Navigation back to supplier list
- 🧠 State management using Angular Service

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML
- CSS

---

## 🧭 Application Flow

1. User lands on **Suppliers List Page**
2. Data is fetched from `SupplierService`
3. Clicking **View** navigates to `/suppliers/:id`
4. Supplier details are loaded using route parameters
5. User edits supplier data using form inputs
6. Clicking **Save** updates the service data
7. User returns to updated supplier list

---

## 👥 Group Members

- Sean Raymond De Guzman Ballug
- [Member 2 Full Name]
- [Member 3 Full Name]
- [Member 4 Full Name]

---

## 🚀 How to Run the Project

```bash
npm install
ng serve
