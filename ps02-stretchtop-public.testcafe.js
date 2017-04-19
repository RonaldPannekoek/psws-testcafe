import { Selector } from 'testcafe';
import Page from './page-model';

const page = new Page();

fixture(`ps02-stretchtop-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-stretchtop-public.testcafe.js

test('Test www.stretchtop.nl', async t => {
  await t
    .navigateTo('https://www.stretchtop.nl/')
    .expect(page.h1.innerText).eql('StretchTop.nl')    
    .expect(Selector('h1').nth(1).innerText).contains('Waterbedden en vervanging watermatrassen')
    //
    .expect(Selector('#menu a').count).gt(5, 'Bevat minimaal 5 menu-links')
    .click(Selector('#menu a').nth(2))
    .expect(Selector('h1').nth(1).innerText) .contains('StretchTop Waterbed Armada')
    .expect(page.text01.innerText)
    .contains('Armada is het nieuwe type van Stretchtop.', 'Bevat juiste tekst')
    //
    .navigateTo('/ledikanten/')
    .expect(page.text01.innerText)
    .contains('Dit is een globale greep uit de mogelijkheden', 'Bevat juiste tekst')
    .expect(Selector('#text01 img').count).gt(5, 'Bevat minimaal 5 afbeeldingen')
    //
    .navigateTo('/info/')
    .expect(page.input.count).eql(10, 'Bevat 10 inputs')
    //
    .navigateTo('/');
  //
});
