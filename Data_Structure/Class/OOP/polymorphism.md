#### 1. Đa hình (Polymorphism)

> Tính đa hình cho phép các đối tượng thuộc các lớp khác nhau có thể được xử lý qua một giao diện chung, mặc dù cách thực thi có thể khác nhau. Điều này giúp mã nguồn dễ bảo trì, mở rộng và giảm sự phụ thuộc chặt chẽ giữa các lớp

#### 2. Đa hình thông qua kế thừa (Inheritance-based Polymorphism)

- Trong TypeScript, kế thừa là cách phổ biến nhất để thực hiện tính đa hình.
- Một lớp con có thể kế thừa từ lớp cha và ghi đè các phương thức để cung cấp logic riêng của nó.

```ts
class Animal {
  makeSound(): void {
    console.log('Some generic animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  animal.makeSound(); // Dog: Woof!, Cat: Meow!
});
```

#### 3. Đa hình giao diện (Interface Polymorphism)

- TypeScript hỗ trợ giao diện (interface), cho phép các lớp khác nhau tuân thủ cùng một giao diện, từ đó thực hiện tính đa hình.
- Điều này đặc biệt hữu ích để đảm bảo rằng các đối tượng khác nhau có cùng các phương thức nhưng có cách thực thi khác nhau.

```ts
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive(): void {
    console.log('Driving a car...');
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log('Riding a bike...');
  }
}

function startVehicle(vehicle: Vehicle): void {
  vehicle.drive();
}

const car: Vehicle = new Car();
const bike: Vehicle = new Bike();

startVehicle(car); // Driving a car...
startVehicle(bike); // Riding a bike...
```

#### 4. Đa hình dựa trên phương thức (Method Overriding và Method Overloading)

- Method Overloading (Nạp chồng phương thức) là một tính năng được hỗ trợ trực tiếp trong TypeScript, cho phép định nghĩa nhiều phiên bản của cùng một phương thức nhưng với số lượng hoặc kiểu tham số khác nhau.
- Trong JavaScript thuần, điều này không tồn tại mà chỉ có thể giả lập qua các kiểm tra kiểu tham số.

```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.add('Hello, ', 'world!')); // Output: Hello, world!
```
