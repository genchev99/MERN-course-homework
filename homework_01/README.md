Да се реализира клиентско (браузър) приложение с ReactJS, без презареждане на страницата (Single Page Application - SPA), което пази данните в Window.localStorage, със следната функционалност:

**За всеки потребител (User) се съхранява следната информация (с валидация на данните):**

- идентификатор на записа (до 24 символа);
- име на потребителя;
- login име (username - до 15 символа - word characters);
- парола (поне 8 символа, поне една цифра и знак различен от буква и цифра);
- пол;
- потребителска роля (user или admin);
- снимка на потребителя (може да бъде URL, ако липсва се замества с аватара по подразбиране в зависимост от пола);
- кратко представяне на потребителя (до 512 символа);
- статус на валидност на акаунта - (active, suspended или deactivated);
- дата и час на регистрация (генерира се автоматично);
- дата и час на последна модификация (генерира се автоматично);

**За всяка рецепта (Recipe) се съхранява следната информация (с валидация на данните):**
- идентификатор на рецептата (до 24 символа);
- идентификатор на потребителя споделил рецептата (до 24 символа);
- име на рецептата (до 80 символа);
- кратко описание на рецептата (до 256 символа);
- време за приготвяне (в минути);
- използвани продукти (списък от продукти);
- снимка на резултата от рецептата (валиден URL, задължителен атрибут);
- подробно описание (до 2048 символа);
- ключови думи - tags (списък от тагове);
- дата и час на споделяне (генерира се автоматично);
- дата и час на последна модификация (генерира се автоматично);
- Позволява добавяне на нов потребител (в тази версия без секюрити рестрикции). (10 точки)
- Позволява избор на активен потребител (login). (5 точки)
- Позволява публикуване на нова рецепта от активния потребител. (10 точки)
- Извеждане на последните 10 публикувани рецепти, с възможност за филтриране по ключови думи (tags) и автор (потребител споделил рецептата), със снимка на резултата, в съкратен (summary) формат (до 150 символа), сортирани (обратно - descending) по дата на публикуване. (10 точки)
- Извежда списък на всички рецепти, като до всяка рецепта се извеждат бутон за редактиране и бутон за изтриване на рецептата, който да активира съответната функционалност (редактиране в нов изглед - view или изтриване). За редактирането можете да използвате повторно формата за публикуване реализирана в предишна точка. (10 точки).
- Извежда списък на всички потребители, като до всеки потребител се извеждат бутон за редактиране и бутон за изтриване на пoтребителя, който да активира съответната функционалност (редактиране в нов изглед - view или изтриване) (10 точки).
- Меню позволяващо избор на всека от функционалностите (изгледите, views) реализирани в задачата. (5 точки).

Максимален брой точки: 60.