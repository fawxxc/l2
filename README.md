# TypeScript Evolution (L2)
Це навчальний проект-бібліотека, створений для демонстрації еволюції проекту від простого JavaScript-подібного коду до стабільної TypeScript-бібліотеки з версією 1.0.0.

Проект демонструє налаштування інструментів (ESLint, Prettier, Husky), роботу з типами (type, interface), класами, дженеріками (<T>), змінними оточення (.env) та правильне семантичне версіонування (SemVer).

---
### Інструкції з запуску

1. Встановлення залежностей:
```bash
npm i
```

2. Запуск демонстраційного файлу:

Ця команда виконає компіляцію "на льоту" і запустить src/demo.ts.
```bash
npm run demo
```
3. Збірка бібліотеки:

Ця команда очистить папку dist і створить CJS та MJS версії бібліотеки.
```bash
npm run build
```
---

### Еволюція версій

Проект розвивався згідно з принципами SemVer:

- v0.1.0 (Patch): Початкова версія з простими функціями, що використовують any.

- v0.2.0 (Patch): Додано базові типи (string, number), сумісність збережено.

- v0.3.0 (Minor): Додано нову функцію formatNumber зі складним типом NumberFormatOptions.

- v0.4.0 (Minor): Додано інтерфейс User та дженерік-функцію groupBy<T>.

- v0.5.0 (Minor): Додано клас Logger, інтеграцію .env (через config.ts та zod) та оновлено formatNumber для читання APP_PRECISION.

- v1.0.0 (Major): Стабілізація API. Налаштовано exports у package.json, посилено ESLint, src/index.ts став єдиною точкою входу, додано збірку (build).

- v2.0.0 (Major): Breaking Change! Змінено сигнатуру add(a, b) на add(numbers: number[]) для прийому масиву чисел.

---

### Приклади використання
```bash
import { add, capitalize, formatNumber, Logger, config, groupBy } from './dist'; // (після збірки)

// Прості функції
console.log('Додавання:', add(2, 3));
console.log('Капіталізація:', capitalize('hello'));

// Форматування з опціями
console.log('Форматування:', formatNumber(123.456, { precision: 1 }));

// Використання .env (config) та Logger
const logger = new Logger(config.LOG_LEVEL);
logger.info('Повідомлення з логера');

// Дженеріки (groupBy)
const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' },
];
const groupedByRole = groupBy(users, (user) => user.role);
console.log('Групування:', groupedByRole);
```
---
 ### Налаштування .env
 Для коректної роботи бібліотеки потрібен файл .env у корені проекту:
 ```bash
# .env

# Визначає точність за замовчуванням для formatNumber (напр. 2)
APP_PRECISION=2

# Визначає рівень логування: 'silent' | 'info' | 'debug'
LOG_LEVEL=debug
```
---

### Теги релізів
Ви можете переглянути код для кожної версії на сторінці [https://github.com/fawxxc/l2/tags]
