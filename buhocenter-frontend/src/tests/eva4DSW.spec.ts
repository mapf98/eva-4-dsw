const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Prueba de creación de ofertas', () => {
    it('Inicio de sesión de administrador y creación de ofertas', async () => {
        let check = true;
        try {
            let driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:8080/home');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('btnSignIn')).click();
            await driver.findElement(By.id('inputEmail')).sendKeys('admin@gmail.com');
            await driver.findElement(By.id('inputPassword')).sendKeys('123456');
            await driver.findElement(By.id('signIn')).click();
            await driver.wait(until.elementLocated(By.id('menuProfile')), 10000);
            await driver.findElement(By.id('menuProfile')).click();
            await driver.findElement(By.id('profile')).click();
            await driver.findElement(By.id('PLATFORM_ADMINISTRATE')).click();
            await driver.findElement(By.id('OFFERS')).click();
            await driver.findElement(By.id('createOffer')).click();
            await driver.findElement(By.id('inputRate')).clear();
            await driver.findElement(By.id('inputRate')).sendKeys(33);
            await driver.findElement(By.id('inputName')).sendKeys('Oferta especial');
            await driver.findElement(By.id('inputDescription')).sendKeys('Aprovechala');
            await driver.findElement(By.id('createBtn')).click();
            await driver.wait(until.elementLocated(By.id('snackbar')), 10000);
            await driver.findElement(By.id('seeOffer')).click();
        } catch (e) {
            check = false;
            console.log('Error en test: ', e.message);
        }
        expect(check).toBeTruthy();
    }, 100000);

    it('Inicio de sesión de administrador y fallo en creación de ofertas', async () => {
        let check = true;
        try {
            let driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:8080/home');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('btnSignIn')).click();
            await driver.findElement(By.id('inputEmail')).sendKeys('admin@gmail.com');
            await driver.findElement(By.id('inputPassword')).sendKeys('123456');
            await driver.findElement(By.id('signIn')).click();
            await driver.wait(until.elementLocated(By.id('menuProfile')), 10000);
            await driver.findElement(By.id('menuProfile')).click();
            await driver.findElement(By.id('profile')).click();
            await driver.findElement(By.id('PLATFORM_ADMINISTRATE')).click();
            await driver.findElement(By.id('OFFERS')).click();
            await driver.findElement(By.id('createOffer')).click();
            await driver.findElement(By.id('inputRate')).clear();
            await driver.findElement(By.id('inputRate')).sendKeys(-10);
            await driver.findElement(By.id('inputName')).sendKeys('Oferta especial');
            await driver.findElement(By.id('inputDescription')).sendKeys('');
        } catch (e) {
            check = false;
            console.log('Error en test: ', e.message);
        }
        expect(check).toBeTruthy();
    }, 100000);

    it('Inicio de sesión de administrador y eliminacion de ofertas', async () => {
        let check = true;
        try {
            let driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:8080/home');
            await driver.manage().window().fullscreen();
            await driver.findElement(By.id('btnSignIn')).click();
            await driver.findElement(By.id('inputEmail')).sendKeys('admin@gmail.com');
            await driver.findElement(By.id('inputPassword')).sendKeys('123456');
            await driver.findElement(By.id('signIn')).click();
            await driver.wait(until.elementLocated(By.id('menuProfile')), 10000);
            await driver.findElement(By.id('menuProfile')).click();
            await driver.findElement(By.id('profile')).click();
            await driver.findElement(By.id('PLATFORM_ADMINISTRATE')).click();
            await driver.findElement(By.id('OFFERS')).click();
            await driver.findElement(By.id('offer_0')).click();
        } catch (e) {
            check = false;
            console.log('Error en test: ', e.message);
        }
        expect(check).toBeTruthy();
    }, 100000);

    it('Fallo en inicio de sesión de administrador y fallo en creación de ofertas', async () => {
        let check = true;
        try {
            let driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:8080/home');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('btnSignIn')).click();
            await driver.findElement(By.id('inputEmail')).sendKeys('admingmail.com');
            await driver.findElement(By.id('inputPassword')).sendKeys('123456');
            await driver.findElement(By.id('signIn')).click();
        } catch (e) {
            check = false;
            console.log('Error en test: ', e.message);
        }
        expect(check).toBeTruthy();
    }, 100000);
});
