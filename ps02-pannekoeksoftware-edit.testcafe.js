import Page from './page-model';

const page = new Page();

fixture(`Getting Started`).page`https://www.pannekoeksoftware.nl`;

//testcafe chrome ps02-pannekoeksoftware-public.testcafe.js

const TESTCAFE_USER = process.env['TESTCAFE_USER'],
  TESTCAFE_PASSWORD = process.env['TESTCAFE_PASSWORD'];

test('Test ps-site met inloggen', async t => {
  const sMenuTitle = 'TestCafe ' + (new Date()).toISOString().substring(0, 10)

  await t
    .expect(page.text01.innerText)
    .contains('Welkom op de site van PannekoekSoftware', 'Bevat welkom')
    //
    .navigateTo('/login')
    .expect(page.h1.innerText)
    .contains('Login', 'Toont loginscherm')
    .typeText(page.nameInput, TESTCAFE_USER)
    .typeText(page.passwordInput, TESTCAFE_PASSWORD)
    .click(page.submitInput)
    .expect(page.h3.innerText)
    .contains('Ingelogd als: Ronald', 'Inloggen gelukt')
    //
    .navigateTo('/producten/')
    .expect(page.text01.innerText)
    .match(/PannekoekSoftware\:WebSite/, 'Toont producten inhoud')
    //
    .expect(page.editAddUnder.exists).ok('Edit knop nieuw-menu dieper bestaat')
    .click(page.editAddUnder)
    .expect(page.editNewMenuTitleInput.exists).ok('Edit nieuw-menu wordt getoond')
    .typeText(page.editNewMenuTitleInput, sMenuTitle)
    .click(page.editNewUrlInput)
    .expect(page.editNewUrlInput.value)
    .contains(sMenuTitle.toLowerCase().replace(' ', '-'), 'Aangepaste URL')
    .click(page.submitInput)
    //
    .expect(page.h1.innerText)
    .contains(sMenuTitle, 'Nieuw pagina is aangemaakt.')
    .navigateTo('?edit=page-remove')
    .expect(page.editRemoveConfirmLink.exists).ok('Verwijderpagina wordt getoond')
    .click(page.editRemoveConfirmLink)
    //
    .expect(page.h1.innerText).contains('Producten', 'Na verwijderen terug naar Producten')
    .navigateTo('/login?end')
    .expect(page.h1.innerText).contains('Home', 'Na uitloggen terug naar home')
});
