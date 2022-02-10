const { positiveSum, opposite, removeChar, repeatStr } = require('../index');
// Или без использования Деструктуризации:
// const operations = require('../operations');
// const sum = operations.sum;
// const difference = operations.difference;
// const product = operations.product;
// const quotient = operations.quotient;

describe('Jest test learning', function () {
  let num;// заводим переменную
  let str;
  let arr;
  let count;

  beforeEach(function () {
  // задаем базовое значение переменной(значение, которое первым будет передано в тест)
    num = -5;
    str = 'Privet, Movsar';
    arr = [1,-6,7,-24,64,31,-7];
    count = 3;
  });

  describe('Testing', function () {//запуск внутренних тестов(ВСЕХ!!)
    test('SumOfPositives', function () {//запуск теста по функции SumOfPositives
      expect(positiveSum(arr)).toEqual(103);//expect = ожидается, что при подаче массива arr в функцию PositiveSum результатом будет 103.
      expect(positiveSum(arr)).not.toEqual(66)//Второй вложенный тест в SumOfPositives.Если 1 из 2 подтестов не будет завершен успешно, то весь тест завален.
    });
    test('GetOppositeNumber', function () {
      expect(opposite(num)).toEqual(5);//какой результат выдаст функция при подаче тестового параметра
      num = 0
      expect(opposite(num)).toEqual(0)
      num = -200
      expect(opposite(num)).toEqual(200)
    });
    test('RemoveChar', function () {
      expect(removeChar(str)).toEqual('rivet, Movsa');//какой результат выдаст функция при подаче тестового параметра
      str = ''
      expect(removeChar(str)).toEqual('');
      str = 'a'
      expect(removeChar(str)).toEqual('a');
    });
    test('RepeatString', function () {
      str = 'Elbrus';
      expect(repeatStr(count, str)).toEqual('ElbrusElbrusElbrus');//какой результат выдаст функция при подаче тестового параметра(ожидание)
       
    });
    });
  });
