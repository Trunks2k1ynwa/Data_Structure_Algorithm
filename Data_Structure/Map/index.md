## Map là gì

- Map trong JavaScript là một cấu trúc dữ liệu lưu trữ các cặp giá trị key-value (khóa-giá trị)
- Các key trong Map luôn luôn unique

## Khởi tạo Map

```ts
const map = new Map();
const mapWithValues = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(mapWithValues);
// Output: Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
```

## Get

```ts
console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 25
```

## Set

```ts
map.set('name', 'John');
map.set('age', 25);

console.log(map);
// Output: Map(2) { 'name' => 'John', 'age' => 25 }
```

## Has

```ts
console.log(map.has('name')); // Output: true
console.log(map.has('address')); // Output: false
```

## Delete

```ts
map.delete('age');
console.log(map);
// Output: Map(1) { 'name' => 'John' }
```

## size

- Thuộc tính size trả về số cặp khóa-giá trị trong

```ts
console.log(map.size); // Output: 1
```

## keys , values

- keys là method dùng để lấy ra iterator gồm tất cả các key trong Map

```ts
// Truy cập tất cả các keys
console.log([...myMap.keys()]);
// Output: ['name', 42, true, { model: 'Tesla' }, () => 42]
```

- values là method dùng để lấy ra iterator gồm tất cả các value trong Map

```ts
// Truy cập tất cả các values
console.log([...myMap.values()]);
// Output: ['Alice', 'Age', 'Is Active', 'Car', 'Function']
```

## Loop với Map

- Bạn có thể lặp qua các cặp khóa-giá trị trong Map bằng for...of, forEach(), hoặc các phương thức như keys(), values(), và entries().

```ts
// Lặp qua cặp key-value
for (const [key, value] of map) {
  console.log(key, value);
}

// Lặp qua các key
for (const key of map.keys()) {
  console.log(key);
}

// Lặp qua các value
for (const value of map.values()) {
  console.log(value);
}
// Lặp qua cặp [key, value] với callback.
map.forEach((value, key) => {
  console.log(key, value);
});
```

## Object.fromEntries(iterable)

- Là phương thức dùng để chuyển đổi một mảng các cặp giá trị [key, value] thành một đối tượng (Object)
- iterable: Một đối tượng có thể lặp lại, chẳng hạn như Map hoặc một mảng chứa các cặp [key, value].

```ts
const map = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York'],
]);

const obj = Object.fromEntries(map);

console.log(obj);
// Output: { name: 'John', age: 30, city: 'New York' }
```
