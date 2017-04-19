import { Selector } from 'testcafe';
import Page from './page-model';

const page = new Page();

fixture(`ps01-detienmorgen-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps01-detienmorgen-public.testcafe.js

test('Test www.detienmorgen.nl', async t => {
  await t
    .navigateTo('https://www.detienmorgen.nl/')
    .expect(Selector('h1').innerText).eql('Home')    
    .expect(Selector('#text01').innerText).contains('Welkom bij  de Tienmorgen!')
    //
    .expect(Selector('#header-menu a').count).eql(5, 'Bevat 5 hoofd-menu-links')
    .click(Selector('#header-menu a').nth(2))
    .expect(Selector('h1').innerText).eql('Activiteiten')
    .expect(Selector('#text01 h3').innerText).eql('Loeigezellige belevenissen.')
    //
    .expect(Selector('#menu-sub .depth-2 a').count).gt(5, 'Bevat 5 sub-menu-links')
    .click(Selector('#menu-sub .depth-2 a').nth(2))
    .expect(Selector('h1').innerText).contains('Boerengolf')
    //
    /*
    .navigateTo('/ledikanten/')
    .expect(page.text01.innerText)
    .contains('Dit is een globale greep uit de mogelijkheden', 'Bevat juiste tekst')
    .expect(Selector('#text01 img').count).gt(5, 'Bevat minimaal 5 afbeeldingen')
    //
    .navigateTo('/info/')
    .expect(page.input.count).eql(10, 'Bevat 10 inputs')
    */
    //
    .navigateTo('/');
  //
});
