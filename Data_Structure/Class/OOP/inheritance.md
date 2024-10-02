#### Tính kế thừa

- Kế thừa đơn: JavaScript chỉ hỗ trợ kế thừa đơn, nghĩa là một lớp chỉ có thể kế thừa từ một lớp cha duy nhất.
- Ghi đè phương thức: Lớp con có thể ghi đè các phương thức từ lớp cha.
- Sử dụng lại phương thức lớp cha: Lớp con có thể sử dụng các phương thức của lớp cha thông qua từ khóa super.
- Prototype chain: Inheritance trong JavaScript được thực hiện thông qua "chuỗi prototype", nghĩa là lớp con sẽ tìm các thuộc tính và phương thức của nó trong prototype của lớp cha nếu nó không có.

#### Vidu

```js
// Lớp cha Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log('Animal makes a sound');
  }
}

// Lớp con Dog kế thừa từ Animal
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Gọi constructor của lớp cha
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

// Tạo đối tượng Dog
const myDog = new Dog('Buddy', 3, 'Golden Retriever');

// Truy cập thuộc tính và phương thức từ cả lớp cha và lớp con
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Animal makes a sound
myDog.bark(); // Output: Woof!
```
