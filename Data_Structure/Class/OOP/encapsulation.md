## 1 **Tính đóng gói (Encapsulation)**

- là một trong bốn nguyên lý quan trọng của lập trình hướng đối tượng (OOP), cùng với tính kế thừa, tính đa hình và tính trừu tượng.
- Tính đóng gói có nghĩa là việc giấu đi chi tiết cài đặt của một đối tượng và chỉ cung cấp những gì cần thiết để tương tác với đối tượng đó.
- Nó giúp bảo vệ dữ liệu bên trong đối tượng và ngăn chặn sự truy cập không an toàn từ bên ngoài.

### Mục tiêu chính của tính đóng gói:

1. **Bảo vệ dữ liệu**: Đảm bảo rằng các dữ liệu bên trong đối tượng chỉ được thay đổi bởi những phương thức mà lập trình viên cho phép.
2. **Che giấu cài đặt**: Người dùng của đối tượng chỉ cần biết cách sử dụng các phương thức và thuộc tính được công khai, không cần biết cách cài đặt bên trong.
3. **Dễ bảo trì**: Do cài đặt bên trong đối tượng bị giấu đi, nên khi cần thay đổi cài đặt, bạn chỉ cần sửa bên trong mà không lo ảnh hưởng đến mã bên ngoài.

### Cách thực hiện tính đóng gói:

#### 1. **Sử dụng các phạm vi truy cập (Access Modifiers)**

Trong các ngôn ngữ OOP như TypeScript, Java hoặc C#, chúng ta có thể sử dụng các phạm vi truy cập như `public`, `private`, và `protected` để kiểm soát sự truy cập vào các thuộc tính và phương thức của đối tượng.

- **`private`**: Chỉ có thể truy cập bên trong lớp.
- **`protected`**: Chỉ có thể truy cập từ bên trong lớp và các lớp con.
- **`public`**: Có thể truy cập từ mọi nơi.

#### Ví dụ trong TypeScript:

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Phương thức công khai để lấy tên (được đóng gói)
  public getName(): string {
    return this.name;
  }

  // Phương thức công khai để thay đổi tuổi (được đóng gói)
  public setAge(age: number): void {
    if (age > 0) {
      this.age = age;
    } else {
      console.log('Age must be positive');
    }
  }

  // Phương thức công khai để hiển thị thông tin
  public displayInfo(): void {
    console.log(`Name: ${this.getName()}, Age: ${this.age}`);
  }
}

const person = new Person('John', 30);

person.displayInfo(); // Output: Name: John, Age: 30

// Không thể truy cập trực tiếp vào thuộc tính private từ bên ngoài
// person.name = "Jane";  // Error: Property 'name' is private and only accessible within class 'Person'

// Có thể thay đổi thông qua phương thức công khai
person.setAge(35);
person.displayInfo(); // Output: Name: John, Age: 35
```

**Giải thích**:

- Ở đây, các thuộc tính `name` và `age` của lớp `Person` được khai báo là `private`, nghĩa là không thể truy cập trực tiếp từ bên ngoài lớp.
- Việc thay đổi các thuộc tính này chỉ có thể được thực hiện thông qua các phương thức `getName` và `setAge`, giúp kiểm soát quá trình thay đổi dữ liệu.
- Điều này bảo vệ đối tượng khỏi những sự can thiệp trực tiếp không an toàn và giúp quản lý việc truy cập dữ liệu dễ dàng hơn.

#### 2. **Getters và Setters**

Một cách thông dụng để áp dụng tính đóng gói là sử dụng các phương thức **getter** và **setter**. Đây là các phương thức công khai cho phép kiểm soát cách lấy và cập nhật giá trị của các thuộc tính.

```typescript
class Product {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  // Getter để lấy giá
  public getPrice(): number {
    return this.price;
  }

  // Setter để thiết lập giá, chỉ cho phép giá trị hợp lệ
  public setPrice(price: number): void {
    if (price > 0) {
      this.price = price;
    } else {
      console.log('Price must be positive');
    }
  }
}

const product = new Product(100);
console.log(product.getPrice()); // Output: 100

product.setPrice(150);
console.log(product.getPrice()); // Output: 150

product.setPrice(-50); // Output: Price must be positive
```

**Giải thích**:

- Ở đây, thuộc tính `price` của lớp `Product` được khai báo là `private`, và việc truy cập nó chỉ có thể thông qua các phương thức `getPrice` và `setPrice`.
- Các phương thức `getter` và `setter` giúp kiểm soát cách lấy và thay đổi giá trị của thuộc tính này. Setter có thể thực hiện các kiểm tra hợp lệ trước khi thay đổi giá trị.

### 3. **Che giấu chi tiết cài đặt**

Một trong những mục tiêu của tính đóng gói là **che giấu chi tiết cài đặt** của đối tượng. Người dùng chỉ cần tương tác với các phương thức công khai mà không cần biết đối tượng hoạt động như thế nào bên trong.

#### Ví dụ:

```typescript
class Account {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Phương thức công khai để gửi tiền
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log('Deposit amount must be positive');
    }
  }

  // Phương thức công khai để rút tiền
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log('Invalid withdrawal amount');
    }
  }

  // Phương thức công khai để kiểm tra số dư
  public getBalance(): number {
    return this.balance;
  }
}

const myAccount = new Account(1000);
myAccount.deposit(500); // Output: Deposited: 500
myAccount.withdraw(300); // Output: Withdrew: 300
console.log(myAccount.getBalance()); // Output: 1200
```

**Giải thích**:

- Thuộc tính `balance` là `private`, do đó chỉ có thể được thay đổi thông qua các phương thức công khai `deposit` và `withdraw`.
- Người dùng không biết cách cài đặt chi tiết của số dư tài khoản, mà chỉ tương tác qua các phương thức công khai. Điều này giúp việc kiểm soát và bảo vệ dữ liệu tốt hơn.

### Lợi ích của tính đóng gói:

- **Bảo mật dữ liệu**: Chỉ cho phép truy cập những phần cần thiết, giúp bảo vệ dữ liệu khỏi sự thay đổi không mong muốn.
- **Dễ bảo trì**: Khi cài đặt bên trong thay đổi, chỉ cần sửa trong lớp, không ảnh hưởng đến phần mã bên ngoài.
- **Giảm sự phụ thuộc**: Bằng cách ẩn chi tiết cài đặt, bạn giảm được sự phụ thuộc giữa các phần khác nhau của chương trình.

### Kết luận:

- Tính đóng gói trong OOP là việc giấu đi chi tiết cài đặt và cung cấp các phương thức công khai để tương tác với đối tượng.
- Bằng cách kiểm soát việc truy cập dữ liệu thông qua các phạm vi truy cập như `private`, `protected` và `public`, lập trình viên có thể bảo vệ dữ liệu khỏi sự truy cập không an toàn và dễ dàng thay đổi cài đặt bên trong mà không làm ảnh hưởng đến mã ngoài lớp đó.
