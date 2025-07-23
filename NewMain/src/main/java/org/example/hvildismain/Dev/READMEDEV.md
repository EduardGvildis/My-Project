# ⚙️ HVildis Dev Backend

Це **розробницька версія серверної частини** проєкту HVildis. Вона використовується для експериментів, розширення функціональності, тестування нових фіч до того, як вони потраплять у production.

---

## 🛠️ Технології

- Java 17
- Spring Boot 3.x
- Maven
- PostgreSQL / MongoDB
- Docker (локальний запуск)
- Spring Security / JWT (якщо є)

---

## 📦 Інсталяція та запуск

### 1. Клонування проєкту

```bash
git clone https://github.com/EduardGvildis/My-Project.git
cd My-Project
git checkout Dev 
```
###Запуск 
```bash
mvn clean install
mvn spring-boot:run
```
## Структура проєкту

* Dev/
* ├── controller/
* ├── dev/
* ├── dto/
* ├── entity/
* └── READMEDEV.md
🧪 Особливості гілки Dev
✅ Дозволено нестабільні фічі

🚧 Можливі незавершені API

🔁 Часті оновлення

🧩 Працює з тестовими базами