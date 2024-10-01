### 1. Object

> Đối tượng (Object) là một trong những khái niệm cốt lõi trong JavaScript. Nó cho phép chúng ta mô hình hóa các thực thể trong thế giới thực với các thuộc tính và phương thức tương ứng. Để thao tác với các đối tượng, JavaScript cung cấp cho chúng ta rất nhiều phương thức hữu ích.

### 2. Các method cơ bản

- Object.keys(obj): Trả về một mảng chứa tất cả các khóa (key) của đối tượng.

```js
// Lấy ra các key
const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age"]
```

- Object.values(obj): Trả về một mảng chứa tất cả các giá trị (value) của đối tượng.

```js
// Lấy ra các value
const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", 30]
```

- Object.entries(obj): Trả về một mảng hai chiều, mỗi phần tử là một mảng chứa cặp [key, value].

```js
// Lấy ra các cặp key-value
const entries = Object.entries(person);
console.log(entries); // Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
```

- Object.hasOwnProperty(property): Kiểm tra xem đối tượng có thuộc tính (property) được chỉ định hay không.

```js
// Kiểm tra xem có thuộc tính "age" không
console.log(person.hasOwnProperty('age')); // Output: true
```

- Object.assign(target, ...sources): Sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn vào đối tượng đích.

### 3. Các method khác

- Object.freeze(obj): Ngăn chặn việc thêm, xóa hoặc thay đổi các thuộc tính của đối tượng.
- Object.seal(obj): Ngăn chặn việc thêm hoặc xóa các thuộc tính, nhưng vẫn cho phép thay đổi giá trị của các thuộc tính hiện có.
- Object.create(proto): Tạo một đối tượng mới với một đối tượng prototype cụ thể.
- JSON.stringify(obj): Chuyển đổi một đối tượng thành một chuỗi JSON.
- JSON.parse(json): Chuyển đổi một chuỗi JSON thành một đối tượng JavaScript.

### 4. Lặp qua objects

#### 1. **For-in**

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

#### 2. **Sử dụng Object.keys và forEach**

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
```

#### 3. **Sử dụng Object.entries() và forEach()**

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

#### 4. **Vòng lặp for...of với Object.entries()**

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```
