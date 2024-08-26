Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // Test cases
  const numbers = [1, 2, 3, 4, 5];
  
  // Test case 1: Nhân đôi mỗi số
  console.log(numbers.myMap(num => num * 2));
  // Kết quả mong đợi: [2, 4, 6, 8, 10]
  
  // Test case 2: Bình phương mỗi số
  console.log(numbers.myMap(num => num ** 2));
  // Kết quả mong đợi: [1, 4, 9, 16, 25]
  
  // Test case 3: Chuyển số thành chuỗi
  console.log(numbers.myMap(num => num.toString()));
  // Kết quả mong đợi: ['1', '2', '3', '4', '5']
  
  const words = ['hello', 'world', 'javascript'];
  
  // Test case 4: Chuyển đổi thành chữ hoa
  console.log(words.myMap(word => word.toUpperCase()));
  // Kết quả mong đợi: ['HELLO', 'WORLD', 'JAVASCRIPT']
  
  // Test case 5: Lấy độ dài của mỗi từ
  console.log(words.myMap(word => word.length));
  // Kết quả mong đợi: [5, 5, 10]
  
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  // Test case 6: Trích xuất tên
  console.log(people.myMap(person => person.name));
  // Kết quả mong đợi: ['Alice', 'Bob', 'Charlie']
  
  // Test case 7: Sử dụng index trong callback
  console.log(numbers.myMap((num, index) => `Index ${index}: ${num}`));
  // Kết quả mong đợi: ['Index 0: 1', 'Index 1: 2', 'Index 2: 3', 'Index 3: 4', 'Index 4: 5']
  
  // Test case 8: Mảng trống
  console.log([].myMap(x => x * 2));
  // Kết quả mong đợi: []