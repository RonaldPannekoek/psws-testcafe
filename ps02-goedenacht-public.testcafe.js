import { Selector } from 'testcafe';
import Page from './page-model';

const page = new Page();

fixture(`ps02-goedenacht-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-goedenacht-public.testcafe.js

test('Test www.goedenacht.nl', async t => {
  await t
    .navigateTo('https://www.goedenacht.nl/')
    .expect(page.h1.innerText)
    .contains('Home')
    //
    .click(Selector('#menu-1'))
    .expect(page.h1.innerText)
    .contains('Route')
    .expect(page.text01.innerText)
    .contains('Routeplanner:', 'Bevat de tekst "Routeplanner:"')
    //
    .expect(Selector('.menu').count).eql(2, 'Bevat 2 menu-ULs')
    .click(Selector('.menu').nth(1).find('li').nth(0))
    .expect(page.h1.innerText)
    .contains('Openingstijden')
    //
    .navigateTo('/slaapkamers/senioren-ledikanten/')
    .expect(page.h1.innerText).eql('Senioren ledikanten')
    .expect(Selector('#content img').count).gt(5, 'Bevat minimaal 5 afbeeldingen')
    //
    .navigateTo('/slaapcomfort/tips/')
    .expect(page.h1.innerText).eql('Tips')
    .expect(page.text01.innerText).contains('Tips voor een gezonde nachtrust', 'Bevat de tekst "gezonde nachtrust"')
    //
    .navigateTo('/contact/')
    .expect(page.input.count).eql(8, 'Bevat 8 inputs')
    //
    .navigateTo('/');
  //
});
