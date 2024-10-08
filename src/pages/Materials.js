import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const materials = [
  {
    id: 1,
    title: 'Переменные в программировании',
    content: [
      { type: 'text', value: 'Переменные в программировании - это именованные области памяти, в которых хранятся значения определенного типа. Для использования переменной ее нужно определить. Синтаксис определения переменной: тип имя_переменной.; Имя переменной может содержать буквы, цифры и символ подчеркивания, но не может начинаться с цифры, содержать знаки пунктуации или пробелы, и не должно быть ключевых слов языка. Желательно давать переменным описательные имена.' },
      { type: 'code', language: 'java', value: 'string name;' },
      { type: 'text', value: 'Переменной можно присвоить значение после определения: name = "Tom";' },
      { type: 'code', language: 'java', value: 'name = "Tom";' },
      { type: 'text', value: 'Также можно определить переменную и сразу присвоить ей значение (инициализация): string name = "Tom";' },
      { type: 'code', language: 'java', value: 'string name = "Tom";' },
      { type: 'text', value: 'Значение переменной можно изменять: name = "Bob";' },
      { type: 'code', language: 'java', value: 'name = "Bob";' },
      { type: 'text', value: 'Константы - это значения, которые не изменяются в процессе работы программы. Они определяются с помощью ключевого слова const и должны быть инициализированы при определении: const string NAME = "Tom";' },
      { type: 'code', language: 'java', value: 'const string NAME = "Tom";' },
      { type: 'text', value: 'Константы нельзя изменить после определения, и их значение должно быть известно на момент компиляции программы.' }
    ]
  },
  {
    id: 2,
    title: 'Типы данных в C#',
    content: [
      { type: 'text', value: 'В C# существует множество типов данных, каждый из которых предназначен для хранения определенного вида информации. Вот некоторые из базовых типов данных:' },
      { type: 'text', value: '- bool: хранит значение true или false.' },
      { type: 'text', value: '- byte: хранит целое число от 0 до 255.' },
      { type: 'text', value: '- sbyte: хранит целое число от -128 до 127.' },
      { type: 'text', value: '- short: хранит целое число от -32768 до 32767.' },
      { type: 'text', value: '- ushort: хранит целое число от 0 до 65535.' },
      { type: 'text', value: '- int: хранит целое число от -2147483648 до 2147483647.' },
      { type: 'text', value: '- uint: хранит целое число от 0 до 4294967295.' },
      { type: 'text', value: '- long: хранит целое число от -9223372036854775808 до 9223372036854775807.' },
      { type: 'text', value: '- ulong: хранит целое число от 0 до 18446744073709551615.' },
      { type: 'text', value: '- float: хранит число с плавающей точкой от -3.4 * 10^38 до 3.4 * 10^38.' },
      { type: 'text', value: '- double: хранит число с плавающей точкой от ±5.0 * 10^-324 до ±1.7 * 10^308.' },
      { type: 'text', value: '- decimal: хранит десятичное дробное число.' },
      { type: 'text', value: '- char: хранит одиночный символ Unicode.' },
      { type: 'text', value: '- string: хранит набор символов Unicode.' },
      { type: 'text', value: '- object: может хранить значение любого типа данных.' },
      { type: 'text', value: 'Для объявления переменных разных типов используется следующий синтаксис: тип_данных имя_переменной = значение;' },
      { type: 'code', language: 'csharp', value: 'int age = 30;\nstring name = "Alice";\nbool isStudent = true;' },
      { type: 'text', value: 'Также в C# можно использовать неявную типизацию с помощью ключевого слова var, чтобы компилятор самостоятельно определял тип переменной на основе присвоенного значения:' },
      { type: 'code', language: 'csharp', value: 'var myVar = 10; // myVar имеет тип int\nvar myString = "Hello"; // myString имеет тип string' },
      { type: 'text', value: 'Неявная типизация имеет свои ограничения: переменная должна быть инициализирована при объявлении, и нельзя использовать null для неявно типизированных переменных.' },
      { type: 'text', value: 'Кроме того, для целочисленных и вещественных литералов можно использовать суффиксы для явного указания типа данных:' },
      { type: 'text', value: '- F или f для типа float' },
      { type: 'text', value: '- M или m для типа decimal' },
      { type: 'text', value: '- U или u для типа uint' },
      { type: 'text', value: '- L или l для типа long' },
      { type: 'text', value: '- UL или ul для типа ulong' }
    ]
  },
  {
    id: 3,
    title: 'Ввод и вывод данных в C#',
    content: [
      { type: 'text', value: 'В C# для вывода информации на консоль используется метод Console.WriteLine(). Этот метод принимает строку, которую нужно вывести, и выводит её на консоль, автоматически добавляя перевод строки в конце. Например:' },
      { type: 'code', language: 'csharp', value: 'string hello = "Привет мир!";\nConsole.WriteLine(hello);' },
      { type: 'text', value: 'Также можно использовать интерполяцию строк для вывода значений переменных вместе с текстом. Для этого используется символ $ перед строкой и фигурные скобки {} для вставки переменных. Например:' },
      { type: 'code', language: 'csharp', value: 'string name = "Tom";\nint age = 34;\ndouble height = 1.7;\nConsole.WriteLine($"Имя: {name}  Возраст: {age}  Рост: {height}м");' },
      { type: 'text', value: 'Если нужно вывести несколько значений в одну строку, можно использовать метод Console.Write(), который работает аналогично Console.WriteLine(), но не добавляет перевод строки в конце. Например:' },
      { type: 'code', language: 'csharp', value: 'Console.Write("Введите свое имя: ");\nstring userName = Console.ReadLine();\nConsole.WriteLine($"Привет, {userName}!");' },
      { type: 'text', value: 'Для ввода данных с консоли используется метод Console.ReadLine(), который считывает строку, введенную пользователем, и возвращает её. Например:' },
      { type: 'code', language: 'csharp', value: 'Console.Write("Введите ваш возраст: ");\nstring ageString = Console.ReadLine();\nint age = Convert.ToInt32(ageString);' },
      { type: 'text', value: 'Здесь мы считываем строку, введенную пользователем, с помощью Console.ReadLine(), затем преобразуем эту строку в целое число с помощью Convert.ToInt32() и сохраняем результат в переменную age.' },
      { type: 'text', value: 'Кроме того, для преобразования строки в другие типы данных можно использовать методы Convert.ToDouble() для типа double, Convert.ToDecimal() для типа decimal и другие аналогичные методы.' },
      { type: 'code', language: 'csharp', value: 'Console.Write("Введите ваш вес: ");\nstring weightString = Console.ReadLine();\ndouble weight = Convert.ToDouble(weightString);' }
    ]
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert('Код скопирован в буфер обмена!'))
    .catch(err => console.error('Ошибка при копировании: ', err));
}

function Materials() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <Layout>
      <div className='materials'>
        <div className='sidebar'>
          <h1>Учебные материалы</h1>
          <ul>
            {materials.map((material) => (
              <li 
                key={material.id}
                className={material.id === selectedMaterial.id ? 'active' : ''}
                onClick={() => setSelectedMaterial(material)}
              >
                {material.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='container'>
        <div className='content'>
          <h2>{selectedMaterial.title}</h2>
          {selectedMaterial.content.map((item, index) => {
            switch (item.type) {
              case 'text':
                return <p key={index}>{item.value}</p>;
              case 'code':
                return (
                  <div key={index} className="code-block">
                    <SyntaxHighlighter language={item.language} >
                      {item.value}
                    </SyntaxHighlighter>
                    <button onClick={() => copyToClipboard(item.value)} className="copy-btn">Копировать</button>
                  </div>
                );
              case 'image':
                return <img key={index} src={item.src} alt={item.alt} />;
              default:
                return null;
            }
          })}
        </div>

        </div>
      </div>
    </Layout>
  );
}

export default Materials;
