import { Selector } from 'testcafe';
import Page from './page-model';

const page = new Page();

fixture(`ps02-mline-bedweter-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-mline-bedweter-public.testcafe.js

test('Test www.mline-bedweter.nl', async t => {
  await t
    .navigateTo('https://www.mline-bedweter.nl/')
    .expect(page.h1.innerText).contains('Mline matrassen zijn nergens goedkoper')
    //
    .click(Selector('#menu-main a').nth(2))
    .expect(page.h1.innerText)
    .contains('Mline Slowmotion matrassen')
    .expect(page.text01.innerText)
    .contains('De matrassen hoeven niet gedraaid te worden', 'Bevat juiste tekst')
    //
    .expect(Selector('#menu-sub a').count).gt(5, 'Bevat minimaal 5 menu-links')
    .click(Selector('#menu-sub a').nth(2))
    .expect(page.h1.innerText)
    .contains('Slowmotion matras IV')
    //
    .navigateTo('/kussens/video/')
    .expect(page.h1.innerText).eql('Video')
    .expect(Selector('#content iframe').count).eql(1, 'Bevat een iframe')
    //
    .navigateTo('/contact/')
    .expect(Selector('#text03').innerText).contains('Dorpsstraat 63', 'Bevat Bedweter adres')
    .expect(Selector('#text04').innerText).contains('Eemlandweg 13A', 'Bevat Slaapmaker adres')
    //
    .navigateTo('/');
  //
});
