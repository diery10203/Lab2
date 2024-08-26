Array.prototype.myReduceRight = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = this.length - 1;
    
    if (initialValue === undefined) {
      accumulator = this[startIndex];
      startIndex--;
    }
    
    for (let i = startIndex; i >= 0; i--) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // Test cases
  const numbers = [1, 2, 3, 4, 5];
  
  // Test case 1: Tổng các số (kết quả giống reduce thông thường)
  console.log(numbers.myReduceRight((acc, curr) => acc + curr, 0));
  // Kết quả mong đợi: 15
  
  // Test case 2: Trừ các số từ phải sang trái
  console.log(numbers.myReduceRight((acc, curr) => acc - curr));
  // Kết quả mong đợi: 5 - 4 - 3 - 2 - 1 = -5
  
  // Test case 3: Tạo mảng mới đảo ngược thứ tự
  console.log(numbers.myReduceRight((acc, curr) => {
    acc.push(curr);
    return acc;
  }, []));
  // Kết quả mong đợi: [5, 4, 3, 2, 1]
  
  // Test case 4: Tạo chuỗi từ mảng, từ phải sang trái
  const words = ['Hello', 'World', '!'];
  console.log(words.myReduceRight((acc, curr) => `${acc} ${curr}`));
  // Kết quả mong đợi: '! World Hello'
  
  // Test case 5: Làm phẳng mảng 2 chiều từ phải sang trái
  const nestedArray = [[1, 2], [3, 4], [5, 6]];
  console.log(nestedArray.myReduceRight((acc, curr) => acc.concat(curr), []));
  // Kết quả mong đợi: [5, 6, 3, 4, 1, 2]
  
  // Test case 6: Tạo object với key là index và value là phần tử, từ phải sang trái
  console.log(words.myReduceRight((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {}));
  // Kết quả mong đợi: { '2': '!', '1': 'World', '0': 'Hello' }
  
  // Test case 7: Tính tổng tuổi từ mảng object, từ phải sang trái
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  console.log(people.myReduceRight((acc, curr) => acc + curr.age, 0));
  // Kết quả mong đợi: 90 (giống với reduce thông thường)
  
  // Test case 8: Mảng trống với giá trị khởi tạo
  console.log([].myReduceRight((acc, curr) => acc + curr, 10));
  // Kết quả mong đợi: 10
  
  // Test case 9: Mảng một phần tử không có giá trị khởi tạo
  console.log([5].myReduceRight((acc, curr) => acc + curr));
  // Kết quả mong đợi: 5