#### Tính kế thừa

- Kế thừa đơn: JavaScript chỉ hỗ trợ kế thừa đơn, nghĩa là một lớp chỉ có thể kế thừa từ một lớp cha duy nhất.
- Ghi đè phương thức: Lớp con có thể ghi đè các phương thức từ lớp cha.
- Sử dụng lại phương thức lớp cha: Lớp con có thể sử dụng các phương thức của lớp cha thông qua từ khóa super.
- Prototype chain: Inheritance trong JavaScript được thực hiện thông qua "chuỗi prototype", nghĩa là lớp con sẽ tìm các thuộc tính và phương thức của nó trong prototype của lớp cha nếu nó không có.

#### Vidu

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Gọi constructor của lớp cha (Animal)
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."
```
