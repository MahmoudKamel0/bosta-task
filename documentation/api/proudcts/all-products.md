# API Project Documentation: FakeStoreAPI with Custom Pagination

## 1. Introduction

This document outlines an API project built on top of FakeStoreAPI for product data. It focuses on a custom backend endpoint designed to
efficiently handle pagination, making it easier to display large datasets in frontend applications.

---

## 2. FakeStoreAPI Overview

FakeStoreAPI offers free, pseudo-real e-commerce data. This project primarily utilizes the products endpoint.

- **Base URL**: [https://fakestoreapi.com](https://fakestoreapi.com)
- **Products Endpoint**: `/products`
- **Supports:** `limit` and `sort` parameters

---

## 3. Pagination Fundamentals

Pagination divides large datasets into smaller, manageable pages, enhancing both performance and user experience by loading data in chunks.

**Benefits:**

- **Improved Performance:** Reduces the amount of data transferred over the network.
- **Enhanced User Experience:** Enables faster loading and more responsive interfaces.
- **Efficient Resource Usage:** Reduces strain on both client and server.

---

## 4. Custom Pagination Endpoint: `/api/products`

A custom backend endpoint `/api/products` has been developed to offer flexible pagination that extends beyond FakeStoreAPI's native
capabilities. This endpoint fetches and processes data from FakeStoreAPI for paginated display.

**Endpoint Purpose:**

- Determine total items for a query.
- Calculate total pages based on the page size.
- Return a specific slice of data for the requested page.

**Endpoint Functionality:**

- **Total Item Count:** Fetches and counts all items from FakeStoreAPI.
- **Page Count Calculation:** Calculates `totalPages` by dividing total items by `itemsPerPage`.
- **Data Slicing:** Extracts the relevant subset of data based on `pageNumber` and `itemsPerPage`.

---

## 5. Implementation Notes

This custom endpoint can be implemented using any backend framework. The general procedure is as follows:

1. **Receive** `pageNumber` and `itemsPerPage` as input.
2. **Fetch** all necessary data from FakeStoreAPI.
3. **Calculate** the total item count and number of pages.
4. **Slice** the data for the requested page.

**Example (Conceptual):**

- **Request:** `GET /api/products?page=2&limit=10`
- **Backend Logic:**
    1. Fetch all products from `https://fakestoreapi.com/products`.
    2. Count total products.
    3. Calculate `totalPages = ceil(totalProducts / 10)`.
    4. Slice products from index `(2-1)*10` to `2*10 - 1`.
    5. Return sliced products along with `totalProducts` and `totalPages`.

---

## 6. Conclusion

This project provides an effective, extensible solution for pagination with external APIs like FakeStoreAPI—especially in scenarios where
native options are limited. The custom backend endpoint enables greater control over data presentation, resulting in optimized,
user-friendly applications that are adaptable across various datasets and frontend frameworks.
