# Frontend

## Описание
Развлекательное приложение. Каждый день оно предлагает тебе задания(3-10) (просто полезных или интересных. (Уделить час в день спорту, купить себе то, что давно хотел и т.д.)), которые ты можешь выполнить или от которых отказаться.  Если выполняешь задание, можно добавить какой-то комментарий, фото. Есть раздел, 
в котором размещен календарь, на котором твои дни раскрашены в тот или иной цвет в зависимости от того, сколько заданий ты выполнил, то есть тут можно следить за своей "Продуктивностью". Приложение направлено на то, чтобы разбавить ежедневную рутину или, может быть, привить тебе новую привчку.


Проект был написан с использованием фреймворка Angular, т.к. он из коробки предоставляет поддержку TypeScript'а.
Приложение было разбито на компоненты. Каждая страница — верхне уровневый компонент, к которому прописан путь в
app-routing.module.ts файле

Т.к. хэдер и футер повторяются на каждой странице, они тоже были вынесены в отдельный компоненты, чтобы не дублировать
код

auth.guard.ts при каждой навигации проверяет, залогинен ли пользователь в системе, если нет, он перенаправляется на
/login

Сервисы (TaskService и AuthService) позволяют общаться с нашим сервером.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
