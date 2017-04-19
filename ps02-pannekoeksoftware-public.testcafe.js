import Page from './page-model';

const page = new Page();

fixture(`ps02-pannekoeksoftware-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-pannekoeksoftware-public.testcafe.js

test('Test www.pannekoeksoftware.nl', async t => {
  await t
    .navigateTo('/')
    .expect(page.text01.innerText)
    .contains('Welkom op de site van PannekoekSoftware')
    //
    .navigateTo('/techniek/')
    .expect(page.h1.innerText)
    .eql('Techniek', 'Heeft titel Techniek')
    //
    .navigateTo('/producten/')
    .expect(page.text01.innerText)
    .contains('Hieronder laten we u de stappen', 'Bevat juiste inhoud')
    .expect(page.text01.find('img').count)
    .gt(4, 'Bevat 4 afbeeldingen')
    //
    .navigateTo('/contact/')
    .expect(page.input.count).eql(5, 'Bevat 5 inputs')
    //
    .navigateTo('/voorbeelden/')
    .expect(page.text01.find('a').count).gt(8, 'Bevat minimaal 8 voorbeeld-linkjes')
    //
    .navigateTo('/');
  //
});
