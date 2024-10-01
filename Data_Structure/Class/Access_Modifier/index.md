### 1. Access Modifiers (Bộ điều chỉnh quyền truy cập):

- public: Cho phép thuộc tính hoặc phương thức được truy cập từ bất kỳ đâu.
- private: Chỉ cho phép truy cập từ bên trong class chứa nó. Không thể truy cập từ bên ngoài hoặc từ các class con.
- protected: Có thể truy cập từ bên trong class và từ các class con, nhưng không thể truy cập từ bên ngoài class.

### 2. Property Modifiers (Bộ điều chỉnh thuộc tính):

- readonly: Chỉ cho phép gán giá trị một lần, thường là trong constructor, và không cho phép thay đổi giá trị sau đó.
- Điều này tương tự như từ khóa const, nhưng áp dụng cho thuộc tính của class.

### 3. Static Modifier (Bộ điều chỉnh tĩnh):

- static: Đánh dấu thuộc tính hoặc phương thức là tĩnh, nghĩa là chúng có thể được truy cập mà không cần tạo một thể hiện (instance) của class.
- Các thuộc tính và phương thức tĩnh được chia sẻ giữa tất cả các thể hiện của class và không liên kết với bất kỳ thể hiện cụ thể nào.
- Chỉ được truy cập bằng class, không truy cập được bằng instance của class đó
