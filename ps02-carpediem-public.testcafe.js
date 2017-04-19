import Page from './page-model';

const page = new Page();

fixture(`ps02-carpediem-boxspring-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-carpediem-boxspring-public.testcafe.js

test('Test www.carpediem-boxspring.nl', async t => {
  await t
    .navigateTo('https://www.carpediem-boxspring.nl/')
    .expect(page.h1.innerText)
    .contains('Carpe Diem Beds of Sweden')
    //
    .navigateTo('/aanbieding/')
    .expect(page.text02.innerText)
    .contains('Bel direct:', 'Bevat de tekst "Bel direct:"')
    //
    .navigateTo('/carpe-diem-bedden/marstrand/')
    .expect(page.text01.innerText)
    .contains('De elektrisch verstelbare Marstrand is niet alleen mooi')
    .expect(page.content.find('img').count)
    .gt(0, 'Bevat minimaal 1 afbeelding')
    //
    .navigateTo('/showroommodellen/')
    .expect(page.subpagesA.count).gt(3, 'Bevat minimaal 3 afbeeldingen')
    .click(page.subpagesA.nth(1))
    .expect(page.subpageNav.innerText)
    .contains(' 2 / ')
    //
    .navigateTo('/contact/')
    .expect(page.input.count).eql(5, 'Bevat 5 inputs')
    //
    .navigateTo('/');
  //
});
