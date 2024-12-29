describe('Проверка авторизации сайта QA', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // нашли кнопку логина и ввели логин
         cy.get('#pass').type('iLoveqastudio1') //  нашли кнопку пароль и ввели пароль
         cy.get('#loginButton').click(); // нашел и нажал кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('be.visible');
            cy.get('#forgotEmailButton').click();
            cy.get('#forgotForm > .header').contains('Восстановите пароль');
            cy.get('#forgotForm > .header').should('be.visible');
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })
           it('Верный логин и НЭВЭРНЫЙ пароль', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // нашли кнопку логина и ввели логин
            cy.get('#pass').type('iLoveqastudio69') //  нашли кнопку пароль и ввели пароль
            cy.get('#loginButton').click(); // нашел и нажал кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click()
           })
           it('НЭВЕРНЫЙ логин и верный пароль', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#mail').type('tutioslava@dolnikov.ru'); // нашли кнопку логина и ввели логин
            cy.get('#pass').type('iLoveqastudio1') //  нашли кнопку пароль и ввели пароль
            cy.get('#loginButton').click(); // нашел и нажал кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click()
           })
           it('Проверка валидации', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); // нашли кнопку логина и ввели логин
            cy.get('#pass').type('iLoveqastudio1') //  нашли кнопку пароль и ввели пароль
            cy.get('#loginButton').click(); // нашел и нажал кнопку войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click()
           })
           it('Приведение к строчным буквам', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашли кнопку логина и ввели логин
            cy.get('#pass').type('iLoveqastudio1') //  нашли кнопку пароль и ввели пароль
            cy.get('#loginButton').click(); // нашел и нажал кнопку войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })
           describe('Покупка аватара', function () {                                // название набора тестов
            it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
                 cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
                 cy.get('input[type="email"]').type('tutios@yandex.ru');                   // вводим логин
                 cy.get('input[type="password"]').type('Tutiosl@');               // вводим пароль
                 cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
                 cy.wait(2000);
                 cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
                 cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
                 cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
                 cy.get('.credit').type('4620869113632996');                     // вводим номер карты
                 cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
                 cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
                 cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
                 cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
                 cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
                 cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
                 cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
             });
         });
        
})