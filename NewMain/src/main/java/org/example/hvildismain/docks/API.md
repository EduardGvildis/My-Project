Було зроблено main і я вже радий що створив його тому на цьому все подальші дії пишіть знизу!
# TaskMaster API Documentation

## Base URL
http://localhost:3000/api

## Endpoints

### GET /api/tasks
Отримати всі завдання.

### POST /api/tasks
Створити нове завдання.

#### Request Body:
```json
{
  "title": "Finish project",
  "completed": false
}
