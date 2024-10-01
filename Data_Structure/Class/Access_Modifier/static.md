> `static` trong class trong JavaScript và TypeScript có các đặc điểm sau:

#### 1. **Gắn với Class chứ không phải đối tượng**

- Các thành viên `static` (bao gồm thuộc tính và phương thức) được gắn liền với chính class, chứ không phải với các đối tượng được tạo ra từ class đó.
- Điều này có nghĩa là bạn có thể truy cập các thuộc tính hoặc phương thức `static` mà không cần khởi tạo đối tượng từ class.

**Ví dụ:**

```javascript
class MyClass {
  static myStaticProperty = 42;

  static myStaticMethod() {
    return 'Hello from static method!';
  }
}

// Truy cập trực tiếp thông qua class
console.log(MyClass.myStaticProperty); // 42
console.log(MyClass.myStaticMethod()); // "Hello from static method!"

// Không thể truy cập qua đối tượng
const obj = new MyClass();
console.log(obj.myStaticProperty); // undefined
console.log(obj.myStaticMethod); // undefined
```

#### 2. **Có thể dùng để chia sẻ trạng thái chung**

- Các thuộc tính `static` thường được sử dụng để chia sẻ trạng thái hoặc dữ liệu chung giữa tất cả các đối tượng của class, vì thuộc tính `static` chỉ tồn tại một bản duy nhất trên class.

**Ví dụ:**

```javascript
class Counter {
  static count = 0;

  constructor() {
    Counter.count++; // Mỗi khi tạo đối tượng mới, tăng giá trị count
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(Counter.count); // 2 (vì đã tạo 2 đối tượng)
```

#### 3. **Phương thức `static` không thể truy cập thuộc tính hoặc phương thức không phải `static`**

- Các phương thức `static` không thể truy cập trực tiếp các thuộc tính hoặc phương thức không phải `static` của class thông qua từ khóa `this`, vì `this` trong phương thức `static` không tham chiếu đến đối tượng cụ thể, mà tham chiếu đến chính class.

**Ví dụ:**

```javascript
class Example {
  nonStaticMethod() {
    return 'This is a non-static method';
  }

  static staticMethod() {
    // console.log(this.nonStaticMethod()); // Error, không thể gọi phương thức không phải static
    return 'This is a static method';
  }
}

console.log(Example.staticMethod()); // "This is a static method"
```

Tuy nhiên, bạn có thể truy cập các phương thức và thuộc tính `static` từ bên trong các phương thức `static` khác bằng cách sử dụng `this`.

**Ví dụ:**

```javascript
class Example {
  static myStaticValue = 42;

  static getStaticValue() {
    return this.myStaticValue; // Truy cập thuộc tính static thông qua this
  }
}

console.log(Example.getStaticValue()); // 42
```

#### 4. **Kế thừa các thành viên `static`**

- Các thuộc tính và phương thức `static` cũng có thể được kế

thừa bởi các class con khi thực hiện kế thừa (inheritance). Điều này có nghĩa là class con có thể truy cập và sử dụng các thuộc tính hoặc phương thức `static` của class cha, hoặc định nghĩa lại (override) chúng nếu cần.

**Ví dụ:**

```javascript
class Parent {
  static parentStaticValue = 100;

  static parentStaticMethod() {
    return 'This is a static method in Parent';
  }
}

class Child extends Parent {
  static childStaticMethod() {
    return 'This is a static method in Child';
  }
}

console.log(Child.parentStaticValue); // 100 (kế thừa từ Parent)
console.log(Child.parentStaticMethod()); // "This is a static method in Parent"
console.log(Child.childStaticMethod()); // "This is a static method in Child"
```

#### 5. **Cần được truy cập qua class**

- Các thành viên `static` phải được truy cập trực tiếp qua class, chứ không qua từ khóa `this` trong các phương thức không phải `static`, vì `this` trong các phương thức không `static` tham chiếu đến đối tượng của class chứ không phải class.

**Ví dụ:**

```javascript
class Example {
  static myStaticValue = 10;

  nonStaticMethod() {
    console.log(Example.myStaticValue); // Cần truy cập static qua class
  }
}

const instance = new Example();
instance.nonStaticMethod(); // 10
```

#### Tóm lại, đặc điểm của `static` trong class:

- Gắn với class, không gắn với đối tượng cụ thể.
- Truy cập được qua class mà không cần khởi tạo đối tượng.
- Không thể truy cập từ đối tượng của class.
- Được kế thừa bởi các class con.
- Phương thức `static` không thể truy cập trực tiếp các thành viên không phải `static`, nhưng có thể truy cập các thành viên `static` khác từ trong chính class.
