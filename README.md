### Live-версия доступна по ссылке https://shkirenkoroma.github.io/validateForm/
Проект "Регистрационная форма"
![image](https://user-images.githubusercontent.com/61347452/229460375-7ea70957-a153-4756-9d18-a6c0e7e4ca67.png)
В каждом из полей продумана логика валидации. Каждый input обязателен к заполнению, о чем говориться в всплывающей подсказке
![image](https://user-images.githubusercontent.com/61347452/229461127-da728af1-5da8-4dc3-8639-c44938c85562.png)
Дополнительно продумана отдельная логика для каждого поля:

##### Имя
минимальное количество символов - 2
максимальное количество символов - 25

##### Фамилия
минимальное количество символов - 2
максимальное количество символов - 25

##### Дата рождения
максимальная допустимая дата - текущая дата
формат даты - дд.мм.гг

##### Электронная почта
валидный email

##### Пароль
минимум 8 символов
минимум 1 символ в верхнем регистре
минимум одна цифра 1-9
минимум 1 специальный символ из перечисленных !@#$%

##### Подтверждение пароля
должен совпадать с полем пароль
В случае, когда все поля не заполнены, показывается всплывающая подсказка
![image](https://user-images.githubusercontent.com/61347452/229462806-1e5101de-400e-4436-a3f3-a41c06c1a765.png)
