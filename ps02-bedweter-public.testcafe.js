import Page from './page-model';

const page = new Page();

fixture(
  `ps02-bedweter-public`
).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02-bedweter-public.testcafe.js
//testcafe remote --qr-code ps02-bedweter-public.testcafe.js

test('Test www.bedweter.nl', async t => {
  await t
    .navigateTo('https://www.bedweter.nl/contact/')
    .expect(page.pageSet3.innerText)
    .contains('MEER OVER DE BEDWETER')
    //
    .navigateTo('/')
    .expect(page.pageSet3.exists)
    .ok()
    .expect(page.pageSet3.innerText)
    .contains('opgericht door Helma en Nico-Jan Wolfswinkel')
    //
    .navigateTo('/sitemap/')
    .expect(page.h1.innerText)
    .eql('Sitemap')
    .expect(page.li.count)
    .gt(100, 'Bevat minimaal 100 menu-items')
    //
    .navigateTo('/recensies/')
    .expect(page.pageSet3.exists)
    .ok()
    .expect(page.author.count)
    .gt(15, 'Bevat minimaal 15 reacties')
    //
    .click(page.zoekA)
    .expect(page.input.count)
    .eql(2, 'Toont zoek-inputs')
    .typeText(page.input.nth(0), 'water')
    .click(page.input.nth(1))
    .expect(page.li.count)
    .gt(10, "Minimaal 10 links naar pagina's met water gevonden")
    //
    .navigateTo('/collecties/waterbedden/profine/')
    .expect(page.pageSet2.innerText)
    .contains('eigen fabriek in Grobbendonk')
    //
    .expect(page.modal.visible).notOk('Menu modal NIET zichtbaar')
    .click(page.menuA)
    .expect(page.modal.visible).ok('Menu modal zichtbaar')
    //
    .navigateTo('/');
});
