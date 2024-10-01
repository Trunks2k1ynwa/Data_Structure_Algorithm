Trong file Markdown (`.md`), có nhiều cú pháp giúp định dạng văn bản và tạo ra tài liệu có cấu trúc rõ ràng. Dưới đây là các cú pháp cơ bản thường dùng:

### 1. Tiêu đề (Heading)

- Tiêu đề được tạo bằng dấu `#`. Số dấu `#` xác định cấp độ tiêu đề:

```md
# Tiêu đề cấp 1

## Tiêu đề cấp 2

### Tiêu đề cấp 3
```

### 2. Chữ in đậm và in nghiêng

- **Chữ in đậm**: Sử dụng `**` hoặc `__` để bao quanh từ.

```md
**Chữ in đậm**
**Chữ in đậm**
```

- _Chữ in nghiêng_: Sử dụng `*` hoặc `_` để bao quanh từ.

```md
_Chữ in nghiêng_
_Chữ in nghiêng_
```

- **_Chữ vừa in đậm vừa in nghiêng_**:

```md
**_Chữ in đậm và nghiêng_**
```

### 3. Danh sách

- Danh sách không thứ tự:

```md
- Mục 1
- Mục 2
  - Mục con
```

- Danh sách có thứ tự:

```md
1. Mục 1
2. Mục 2
   1. Mục con
```

### 4. Đường dẫn (Link)

- Cú pháp tạo liên kết:

```md
[Text hiển thị](URL)
```

Ví dụ:

```md
[Google](https://www.google.com)
```

### 5. Chèn hình ảnh

- Cú pháp chèn hình ảnh:

```md
![Alt text](URL hình ảnh)
```

Ví dụ:

````md
![Logo](https://example.com/logo.png)

### 6. Đoạn mã (Code)

- Đoạn mã trong dòng:

```md
`const x = 10;`
```
````

- Khối mã (Code block):

````
```js
function sayHello() {
  console.log("Hello");
}
```
````

### 7. Trích dẫn

- Trích dẫn bằng cách dùng dấu `>`:

```md
> Đây là một đoạn trích dẫn
```

### 8. Đường kẻ ngang

- Tạo đường kẻ ngang:

```md
---
```

### 9. Bảng

- Cú pháp tạo bảng:

```md
| Cột 1  | Cột 2     | Cột 3     |
| ------ | --------- | --------- |
| Hàng 1 | Giá trị 1 | Giá trị 2 |
| Hàng 2 | Giá trị 3 | Giá trị 4 |
```

### 10. Liệt kê nhiệm vụ (Task list)

- Sử dụng `- [ ]` để tạo checkbox chưa hoàn thành và `- [x]` cho checkbox đã hoàn thành:

```md
- [ ] Nhiệm vụ 1
- [x] Nhiệm vụ 2
```

### 11. Ghi chú chân trang (Footnote)

- Sử dụng `[^1]` để tạo ghi chú và định nghĩa nó ở cuối trang:

```md
Đây là một ví dụ về ghi chú[^1].

[^1]: Đây là nội dung của ghi chú.
```

Những cú pháp trên giúp bạn dễ dàng viết tài liệu có cấu trúc rõ ràng trong Markdown.
