Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // Test cases
  const numbers = [1, 2, 3, 4, 5];
  
  // Test case 1: Tổng các số
  console.log(numbers.myReduce((acc, curr) => acc + curr, 0));
  // Kết quả mong đợi: 15
  
  // Test case 2: Tích các số
  console.log(numbers.myReduce((acc, curr) => acc * curr, 1));
  // Kết quả mong đợi: 120
  
  // Test case 3: Tìm số lớn nhất
  console.log(numbers.myReduce((acc, curr) => Math.max(acc, curr)));
  // Kết quả mong đợi: 5
  
  // Test case 4: Tạo object đếm số lần xuất hiện của mỗi số
  const countNumbers = [1, 2, 3, 2, 1, 3, 4, 5, 4, 1];
  console.log(countNumbers.myReduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {}));
  // Kết quả mong đợi: { '1': 3, '2': 2, '3': 2, '4': 2, '5': 1 }
  
  // Test case 5: Làm phẳng mảng 2 chiều
  const nestedArray = [[1, 2], [3, 4], [5, 6]];
  console.log(nestedArray.myReduce((acc, curr) => acc.concat(curr), []));
  // Kết quả mong đợi: [1, 2, 3, 4, 5, 6]
  
  // Test case 6: Chuỗi hóa mảng
  const words = ['Hello', 'World', '!'];
  console.log(words.myReduce((acc, curr) => `${acc} ${curr}`));
  // Kết quả mong đợi: 'Hello World !'
  
  // Test case 7: Tính tổng tuổi từ mảng object
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  console.log(people.myReduce((acc, curr) => acc + curr.age, 0));
  // Kết quả mong đợi: 90
  
  // Test case 8: Mảng trống với giá trị khởi tạo
  console.log([].myReduce((acc, curr) => acc + curr, 10));
  // Kết quả mong đợi: 10
  
  // Test case 9: Mảng một phần tử không có giá trị khởi tạo
  console.log([5].myReduce((acc, curr) => acc + curr));
  // Kết quả mong đợi: 5